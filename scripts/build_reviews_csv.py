#!/usr/bin/env python3
"""
Build data/chinese_reviews_geocoded.csv from the geocode cache + the review
Excel file. No API calls — reads scripts/geocode_cache.json (already fetched).

Columns: name, chinese_rating, chinese_count, all_rating, all_count,
         lat, lng, zip, neighborhood, borough, city, state, is_flushing, place_id
"""
import openpyxl, re, json, csv

XLSX = "data/chinese-restaurant-review-nyc.xlsx"
CACHE = "scripts/geocode_cache.json"
OUT = "data/chinese_reviews_geocoded.csv"

FLUSHING_ZIPS = {
    "11354", "11355", "11356", "11357", "11358", "11359", "11360",
    "11361", "11362", "11363", "11364", "11365", "11366", "11367", "11368",
}

def comp(components, wanted, key="short_name"):
    for c in components:
        if wanted in c.get("types", []):
            return c.get(key, "")
    return ""

cache = json.load(open(CACHE))
wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
rows = list(wb["All"].iter_rows(values_only=True))

out_rows = []
n_flushing = 0
for r in rows[1:]:
    if not r[0]:
        continue
    m = re.search(r"place_id:([A-Za-z0-9_\-]+)", str(r[5] or ""))
    pid = m.group(1) if m else ""
    res = cache.get(pid, {})
    if not res or res.get("__status__"):
        # keep the row but with empty geo fields so nothing is silently dropped
        out_rows.append([r[0], r[1], r[2], r[3], r[4], "", "", "", "", "", "", "", "", pid])
        continue
    loc = (res.get("geometry") or {}).get("location") or {}
    comps = res.get("address_components", [])
    zipc = comp(comps, "postal_code")
    neighborhood = comp(comps, "neighborhood", "long_name")
    borough = comp(comps, "sublocality_level_1", "long_name")
    city = comp(comps, "locality", "long_name")
    state = comp(comps, "administrative_area_level_1")  # NY / NJ
    is_flushing = zipc in FLUSHING_ZIPS
    if is_flushing:
        n_flushing += 1
    out_rows.append([
        r[0], r[1], r[2], r[3], r[4],
        loc.get("lat", ""), loc.get("lng", ""),
        zipc, neighborhood, borough, city, state, is_flushing, pid,
    ])

with open(OUT, "w", newline="") as f:
    w = csv.writer(f)
    w.writerow([
        "name", "chinese_rating", "chinese_count", "all_rating", "all_count",
        "lat", "lng", "zip", "neighborhood", "borough", "city", "state",
        "is_flushing", "place_id",
    ])
    w.writerows(out_rows)

print(f"wrote {OUT} with {len(out_rows)} rows")
print(f"is_flushing == True: {n_flushing}")
