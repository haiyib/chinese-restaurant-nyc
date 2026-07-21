# Chinese Restaurants & Health Inspections in NYC

A data story about New York City's Chinese restaurants: how large the cuisine looms across the city, and why Flushing — the city's densest Chinese dining hub — stands out for its health-inspection record.

Built for **Data, Computation & Innovation II** using NYC open data, D3, and Mapbox.

---

## The story

The piece moves through four visualizations:

1. **Cuisine bar chart** — Chinese is New York City's largest *foreign* cuisine and third overall among graded restaurants (top 12 of 90 cuisines).
2. **Closures line chart** — health-department closures of Flushing restaurants over time, with a spike in 2025.
3. **Reviews vs. grades tie-in** — Flushing's Chinese restaurants draw far more attention from Chinese reviewers, yet carry a higher share of Grade C.
4. **Interactive map** — every graded Chinese restaurant in the city, colored by grade, with address search and click-to-view details.

The published page lives in [`web/index.html`](web/index.html) (a self-contained static story). Charts were prototyped first in Svelte + D3 (`src/routes/+page.svelte`), then ported to plain HTML/D3/Mapbox for the static page.

---

## Data sources

| File | What it is |
|------|-----------|
| `data/DOHMH_New_York_City_Restaurant_Inspection_Results_20260720.csv` | NYC Dept. of Health restaurant inspection results (all cuisines, all boroughs) |
| `data/chinese_inspections_dedup.csv` | Chinese-restaurant inspections, deduplicated |
| `data/chinese-restaurant-review-nyc.xlsx` | Google Maps review ratings/counts (sorted by common Chinese last names; originally compiled by Reddit user "Cssoph") |
| `data/chinese_reviews_geocoded.csv` | The review data geocoded to lat/lng, ZIP, borough, and a Flushing flag (via Google Places `place_id`s) |
| `web/chinese_restaurants.geojson` | Graded Chinese restaurants (one per unique CAMIS with an A/B/C grade) used by the map |

**Definitions used throughout:** "graded" = restaurants with an official A/B/C letter grade. "Flushing" = Queens ZIP codes 11354–11368.

### Scripts

- `scripts/geocode_reviews.py` — geocodes the review Excel file's Google `place_id`s (needs a Google Places API key; results cached in `scripts/geocode_cache.json`).
- `scripts/build_reviews_csv.py` — builds `data/chinese_reviews_geocoded.csv` from the cache (no API calls).

---

## Running it

### The static story (`web/index.html`)

The map and charts fetch local data files, so it must be **served over HTTP** (opening the file directly will block the map's data):

```sh
cd web
python3 -m http.server 8000
# then open http://localhost:8000/
```

### The Svelte prototype

```sh
npm install
npm run dev      # http://localhost:5173
```

Mapbox needs a public token (see `.env.development.example`). The static page in `web/` has its token inline.

---

## Building & publishing (Svelte site)

```sh
npm run build      # static site -> build/
npm run preview    # preview the production build
make github        # build + copy to docs/ + push (GitHub Pages)
```

GitHub Pages serves from `docs/` on `main`. Static hosting works because `svelte.config.js` uses `@sveltejs/adapter-static` and `src/routes/+layout.js` sets `prerender = true`.

---

## Skills I used

<!-- What did you learn / practice building this? e.g. data cleaning, D3, Mapbox, geocoding, SVG annotations, writing for a general audience... -->

_Write here._




---

## What I want to improve

<!-- Where did you struggle? What would you do differently or add with more time? -->

_Write here._




---

## Notes & reflections

<!-- Anything else — data caveats you found, sources, credits, decisions you made. -->

_Write here._




---

## Credits

- Data: NYC Department of Health (DOHMH), Google Maps reviews (compiled by "Cssoph"), Google Places API.
- Photos: Haiyi Bi; Flushing tour photo courtesy of Council Member Sandra Ung's office, adapted from [QNS](https://qns.com/2024/11/councilmember-ung-and-dsny-commissioner-tisch-tackle-sidewalk-congestion-and-sanitation-in-downtown-flushing/).
- Template: [jsoma/page-templates](https://github.com/jsoma/page-templates/) and the class Svelte starter.
