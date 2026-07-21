#!/usr/bin/env python3
"""
Geocode the Google `place_id`s in chinese-restaurant-review-nyc.xlsx (All sheet)
to lat/lng + ZIP + borough, flag whether each is in Flushing, and write a
geojson + a small summary. Results are cached to scripts/geocode_cache.json so
re-runs never re-bill the API.

Usage:
    GOOGLE_PLACES_API_KEY=xxxxx python3 scripts/geocode_reviews.py
"""
import openpyxl, re, os, json, sys, time, urllib.parse, urllib.request

KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "").strip()
if not KEY:
    sys.exit("ERROR: set GOOGLE_PLACES_API_KEY environment variable")

XLSX = "data/chinese-restaurant-review-nyc.xlsx"
CACHE = "scripts/geocode_cache.json"
OUT_GEOJSON = "static/chinese_reviews.geojson"

# Flushing / greater-Flushing area ZIP codes (Queens)
FLUSHING_ZIPS = {
    "11354", "11355", "11356", "11357", "11358", "11359", "11360",
    "11361", "11362", "11363", "11364", "11365", "11366", "11367", "11368",
}

def load_cache():
    if os.path.exists(CACHE):
        with open(CACHE) as f:
            return json.load(f)
    return {}

def save_cache(c):
    with open(CACHE, "w") as f:
        json.dump(c, f)

def place_details(pid):
    """Legacy Place Details API -> geometry + address components."""
    params = urllib.parse.urlencode({
        "place_id": pid,
        "fields": "geometry/location,address_component",
        "key": KEY,
    })
    url = "https://maps.googleapis.com/maps/api/place/details/json?" + params
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=20) as r:
                data = json.load(r)
        except Exception as e:
            time.sleep(1.5 * (attempt + 1))
            continue
        status = data.get("status")
        if status == "OK":
            return data["result"]
        if status in ("OVER_QUERY_LIMIT", "UNKNOWN_ERROR"):
            time.sleep(2 * (attempt + 1))
            continue
        # NOT_FOUND / INVALID_REQUEST / REQUEST_DENIED etc. -> give up on this one
        return {"__status__": status, "__msg__": data.get("error_message", "")}
    return {"__status__": "RETRY_EXHAUSTED"}

def extract(result):
    loc = (result.get("geometry") or {}).get("location") or {}
    lat, lng = loc.get("lat"), loc.get("lng")
    zipc = ""
    for comp in result.get("address_components", []):
        if "postal_code" in comp.get("types", []):
            zipc = comp.get("short_name", "")
            break
    return lat, lng, zipc

def main():
    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb["All"]
    rows = list(ws.iter_rows(values_only=True))

    cache = load_cache()
    feats = []
    calls = 0
    for i, r in enumerate(rows[1:]):
        if not r[0]:
            continue
        name = str(r[0])
        m = re.search(r"place_id:([A-Za-z0-9_\-]+)", str(r[5] or ""))
        if not m:
            continue
        pid = m.group(1)

        if pid not in cache:
            cache[pid] = place_details(pid)
            calls += 1
            if calls % 25 == 0:
                save_cache(cache)
                print(f"  ...{calls} API calls made")
            time.sleep(0.05)  # be gentle

        res = cache[pid]
        if res.get("__status__"):
            continue
        lat, lng, zipc = extract(res)
        if lat is None or lng is None:
            continue
        feats.append({
            "type": "Feature",
            "properties": {
                "name": name,
                "ch_rating": r[1], "ch_count": r[2],
                "all_rating": r[3], "all_count": r[4],
                "zip": zipc,
                "flushing": zipc in FLUSHING_ZIPS,
            },
            "geometry": {"type": "Point", "coordinates": [lng, lat]},
        })

    save_cache(cache)
    with open(OUT_GEOJSON, "w") as f:
        json.dump({"type": "FeatureCollection", "features": feats}, f)

    total = len(feats)
    flushing = sum(1 for x in feats if x["properties"]["flushing"])
    print(f"\nGeocoded features: {total}")
    print(f"In Flushing area:  {flushing}")
    print(f"Rest of NYC:       {total - flushing}")
    print(f"New API calls this run: {calls}")
    print(f"Wrote {OUT_GEOJSON}")

if __name__ == "__main__":
    main()
