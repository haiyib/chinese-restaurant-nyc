# Food sanitary concern in Flushing

A data story about New York City's Chinese restaurants: how large the cuisine looms across the city, and why Flushing, the city's densest Chinese dining hub stands out for its health-inspection record.

Built for final project Columbia Journalism School's Data journalism program class: **Data Visulization**, using NYC open data, D3, and Mapbox.

---

## The story

The piece moves through four visualizations:

1. **Cuisine bar chart** — Chinese is New York City's largest *foreign* cuisine and third overall among graded restaurants (top 12 of 90 cuisines).
2. **Closures line chart** — health-department closures of Flushing restaurants over time, with a spike in 2025.
3. **Reviews vs. grades tie-in** — Flushing's Chinese restaurants draw far more attention from Chinese reviewers, yet carry a higher share of Grade C.
4. **Interactive map** — every graded Chinese restaurant in the city, colored by grade, with address search and click-to-view details.

The published page lives in ([https://haiyib.github.io/chinese-restaurant-nyc/]). Charts were prototyped first in Svelte + D3 (`src/routes/+page.svelte`), then ported to plain HTML/D3/Mapbox for the static page.

---
## Process

I first found this dataset on NYC Open data portal: https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results and decided to play around with it. This story didn't come from an idea, like what I will usually do, this one start with this dataset. Then I found a more specific Chinese restaurant inspection dataset: https://data.cityofnewyork.us/Health/Chinese-Restaurants/w3z6-mr9h/about_data I then dive deep into this and think about what story I can write based on this.

I found something interesting which is: Flushing has been known for a Chinese community and eateries there are always good reviews, (found a dataset thanks to this reddit post: https://www.reddit.com/r/nyc/comments/1rwtqds/i_filtered_600000_nyc_chinese_restaurant_reviews/) But the inspection grade is the worst among all the neighborhoods in the city. I think by presenting this data with better visualization, people will be aware of this. So I decided to create a series of graphics based on this.


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

## Skills I used

I first time built my page with HTML CSS at the same time with D3/Svelte. As part of the final project, this is the most graph I've ever used in one story with real data. I used pandas to clean the dataset from the City government, and merge some datasets together, and find visualization ideas, try to arrow some highlight points, etc. I designed the story to be presenting the data and the background story one by one, then touch on  the main focus of what I'm trying to tell.

---

## What I want to improve
I think the visualization is good in terms of the graphics, but I want to make everything look fancier. This is a little bit basic of a data story. I tried to avoid scrollytelling for this one because I don't think it will make a big difference in making it look prettier. I think I need better suggestions in designing it.





