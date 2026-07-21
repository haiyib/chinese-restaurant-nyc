<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

    // Number of unique restaurants (by CAMIS) per cuisine in the
    // DOHMH NYC Restaurant Inspection Results dataset, counting only
    // restaurants that carry an official letter grade (A, B, or C).
    // Top 12 cuisines shown (90 exist in total).
    //
    // emoji = country flag where the cuisine maps to a country, else a food icon.
    // color = that country's flag color (China red, Italy green, ...); non-country
    // cuisines get a representative food color.
    const data = [
        { cuisine: 'American', count: 4507, emoji: '🇺🇸', color: '#8281BD' },
        { cuisine: 'Coffee/Tea', count: 2035, emoji: '☕', color: '#B39680' },
        { cuisine: 'Chinese', count: 2033, emoji: '🇨🇳  🥡', color: '#EF7361' },
        { cuisine: 'Pizza', count: 1494, emoji: '🍕', color: '#F1C57E' },
        { cuisine: 'Mexican', count: 1007, emoji: '🇲🇽  🌯', color: '#5CB491' },
        { cuisine: 'Latin American', count: 975, emoji: '🌮', color: '#C3A3F0' },
        { cuisine: 'Japanese', count: 932, emoji: '🇯🇵  🍣', color: '#EB8497' },
        { cuisine: 'Italian', count: 919, emoji: '🇮🇹  🍝', color: '#7BC79A' },
        { cuisine: 'Bakery/Desserts', count: 879, emoji: '🧁', color: '#FFA8D2' },
        { cuisine: 'Caribbean', count: 688, emoji: '🌴', color: '#6ED2CB' },
        { cuisine: 'Chicken', count: 682, emoji: '🍗', color: '#E0AC80' },
        { cuisine: 'Donuts', count: 539, emoji: '🍩', color: '#D9A16E' }
    ];

    const width = 780;
    const barHeight = 40;
    const margin = { top: 18, right: 70, bottom: 36, left: 150 };
    const height = margin.top + margin.bottom + data.length * barHeight;

    // horizontal bars: cuisine on the y-axis, count along the x-axis
    const yScale = d3
        .scaleBand()
        .domain(data.map((d) => d.cuisine))
        .range([margin.top, height - margin.bottom])
        .padding(0.28);

    const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.count)])
        .nice()
        .range([margin.left, width - margin.right]);

    let selected = $state(null);

    // annotation target: highlight the Chinese bar
    const chinese = data.find((d) => d.cuisine === 'Chinese');
    const chineseY = yScale(chinese.cuisine) + yScale.bandwidth() / 2;
    const chineseEndX = xScale(chinese.count);

    // --- Mapbox: every graded Chinese restaurant, plotted as a dot ---
    // (added AFTER the bar chart; nothing above is touched)
    const MAPBOX_TOKEN = PUBLIC_MAPBOX_TOKEN;
    let mapContainer = $state();

    // --- Tie-in chart: "celebrated" (review volume) vs "concerning" (grades) ---
    // Left panel: median Chinese-reviewer review count per restaurant (review data)
    const reviewVolume = [
        { label: 'Flushing', value: 73 },
        { label: 'Rest of NYC', value: 14 }
    ];
    const maxVol = Math.max(...reviewVolume.map((d) => d.value));

    // Right panel: grade distribution of graded Chinese restaurants (DOHMH data)
    const gradeSplit = [
        { label: 'Flushing', total: 341, A: 66.3, B: 19.4, C: 14.4 },
        { label: 'Rest of NYC', total: 1674, A: 78.4, B: 14.5, C: 7.1 }
    ];

    // --- Line chart: DOHMH closure events in Flushing, by year ---
    // (2026 is a partial year — dataset runs through mid-July 2026)
    const closureData = [
        { year: '2022', closures: 4 },
        { year: '2023', closures: 11 },
        { year: '2024', closures: 22 },
        { year: '2025', closures: 48 },
        { year: '2026', closures: 36 }
    ];

    const cWidth = 640;
    const cHeight = 360;
    const cMargin = { top: 20, right: 24, bottom: 40, left: 44 };

    const cxScale = d3
        .scalePoint()
        .domain(closureData.map((d) => d.year))
        .range([cMargin.left, cWidth - cMargin.right]);

    const cyScale = d3
        .scaleLinear()
        .domain([0, d3.max(closureData, (d) => d.closures)])
        .nice()
        .range([cHeight - cMargin.bottom, cMargin.top]);

    const cLine = d3
        .line()
        .x((d) => cxScale(d.year))
        .y((d) => cyScale(d.closures));

    const cArea = d3
        .area()
        .x((d) => cxScale(d.year))
        .y0(cHeight - cMargin.bottom)
        .y1((d) => cyScale(d.closures));

    onMount(async () => {
        // mapbox-gl is CJS: the browser bundle exposes named exports (no default),
        // and it touches `window`, so import it dynamically here (browser only).
        const mapboxgl = await import('mapbox-gl');
        const { Map: MapboxMap, NavigationControl, Popup } = mapboxgl;
        const MapboxGeocoder = (await import('@mapbox/mapbox-gl-geocoder')).default;

        const map = new MapboxMap({
            accessToken: MAPBOX_TOKEN,
            container: mapContainer,
            style: 'mapbox://styles/mapbox/standard',
            // open zoomed into Flushing, Queens — the densest cluster of Grade C spots
            center: [-73.83, 40.7595],
            zoom: 13
        });

        map.addControl(new NavigationControl(), 'top-right');

        // address search bar, limited to the New York City area
        const geocoder = new MapboxGeocoder({
            accessToken: MAPBOX_TOKEN,
            mapboxgl,
            marker: true,
            placeholder: 'Search an address or place…',
            bbox: [-74.2591, 40.4774, -73.7002, 40.9162], // NYC bounding box
            proximity: { longitude: -73.96, latitude: 40.71 }
        });
        map.addControl(geocoder, 'top-left');

        // surface any load/tile/token problems in the console
        map.on('error', (e) => console.error('[mapbox]', e && e.error));

        map.on('load', () => {
            map.resize();
            map.addSource('restaurants', {
                type: 'geojson',
                data: '/chinese_restaurants.geojson'
            });

            // one dot per Chinese restaurant
            map.addLayer({
                id: 'restaurants',
                type: 'circle',
                source: 'restaurants',
                paint: {
                    // color each dot by its inspection grade
                    'circle-color': [
                        'match',
                        ['get', 'grade'],
                        'A', '#2E9E5B', // green
                        'B', '#F2B705', // amber
                        'C', '#E23B2E', // red
                        '#999999' // fallback
                    ],
                    'circle-radius': 4,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#ffffff',
                    'circle-opacity': 0.85
                }
            });

            // click a dot -> popup with name, grade, address, score
            map.on('click', 'restaurants', (e) => {
                const p = e.features[0].properties;
                const coords = e.features[0].geometry.coordinates.slice();
                const address = [p.building, p.street].filter(Boolean).join(' ');
                new Popup()
                    .setLngLat(coords)
                    .setHTML(
                        `<strong>${p.name || 'Unnamed'}</strong>` +
                            `<div class="pop-grade grade-${p.grade}">Grade ${p.grade}` +
                            (p.score !== '' ? ` · score ${p.score}` : '') +
                            `</div>` +
                            `<div>${address}${p.zip ? ', ' + p.zip : ''}</div>` +
                            (p.date ? `<div class="pop-date">Inspected ${p.date}</div>` : '')
                    )
                    .addTo(map);
            });

            // pointer cursor over dots
            map.on('mouseenter', 'restaurants', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'restaurants', () => {
                map.getCanvas().style.cursor = '';
            });
        });
    });
</script>

<div class="wrap">
    <div class="headings">
        <h1>Chinese is New York City's largest foreign cuisine, ranked third overall among all health-inspected restaurants</h1>
        <p>Based on NYC Department of Health restaurant inspection results, counting only restaurants that received an official inspection letter grade (A, B, or C). Showing top 12 of 90 cuisines.</p>
    </div>

<svg viewBox="0 0 {width} {height}" class="chart">
    <defs>
        <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
        >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
        </marker>
    </defs>

    <!-- x axis tick labels -->
    {#each xScale.ticks(4) as tick}
        <text class="axis" x={xScale(tick)} y={height - margin.bottom + 26} text-anchor="middle">
            {d3.format(',')(tick)}
        </text>
    {/each}

    {#each data as d}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <g
            opacity={selected == null || selected == d.cuisine ? 1 : 0.25}
            onclick={() => (selected = selected === d.cuisine ? null : d.cuisine)}
            style="cursor: pointer;"
        >
            <rect
                class="bar"
                x={margin.left}
                y={yScale(d.cuisine)}
                width={xScale(d.count) - margin.left}
                height={yScale.bandwidth()}
                fill={d.color}
                rx="3"
            />
            <!-- cuisine label to the left of each bar -->
            <text
                class="label"
                x={margin.left - 12}
                y={yScale(d.cuisine) + yScale.bandwidth() / 2}
                text-anchor="end"
                dominant-baseline="middle"
            >
                {d.cuisine}
            </text>
            <!-- emoji sits on the left end of the bar -->
            <text
                class="emoji"
                x={margin.left + 10}
                y={yScale(d.cuisine) + yScale.bandwidth() / 2}
                dominant-baseline="middle"
            >
                {d.emoji}
            </text>
            <!-- count at the end of each bar -->
            <text
                class="value"
                x={xScale(d.count) + 8}
                y={yScale(d.cuisine) + yScale.bandwidth() / 2}
                dominant-baseline="middle"
            >
                {d3.format(',')(d.count)}
            </text>
        </g>
    {/each}

    <!-- Datawrapper-style annotation pointing at the Chinese bar -->
    <path
        class="anno-arrow"
        d="M {chineseEndX + 150} {chineseY + 2}
           Q {chineseEndX + 40} {chineseY - 36}, {chineseEndX - 55} {chineseY - 4}"
        fill="none"
        marker-end="url(#arrowhead)"
    />
    <text class="anno-text" x={chineseEndX + 156} y={chineseY - 18}>
        <tspan x={chineseEndX + 156} dy="0">There are <tspan class="bold">2,033</tspan> graded</tspan>
        <tspan x={chineseEndX + 156} dy="18">Chinese restaurants among</tspan>
        <tspan x={chineseEndX + 156} dy="18">all five boroughs in the city.</tspan>
    </text>
</svg>
</div>

<div class="wrap map-section">
    <h2>Flushing serves some of the city's most celebrated and authentic Chinese food, but its sanitary grades are among the most concerning</h2>
    <p>The largest cluster of Grade C Chinese restaurants in the city sits in Flushing. The map shows every graded Chinese restaurant, colored by inspection grade.</p>
    <div class="map" bind:this={mapContainer}></div>
    <div class="legend">
        <span class="legend-item"><span class="swatch" style="background:#2E9E5B"></span>Grade A</span>
        <span class="legend-item"><span class="swatch" style="background:#F2B705"></span>Grade B</span>
        <span class="legend-item"><span class="swatch" style="background:#E23B2E"></span>Grade C</span>
    </div>
</div>

<div class="wrap tiein-section">
    <h2>Beloved by reviewers, graded worse by inspectors</h2>
    <p>
        Flushing's Chinese restaurants draw far more attention from Chinese reviewers than those
        anywhere else in the city — yet their health grades skew notably lower.
    </p>

    <div class="tiein-grid">
        <!-- CELEBRATED: median review volume from Chinese reviewers -->
        <div class="panel">
            <h3 class="panel-title">Celebrated · median reviews from Chinese reviewers</h3>
            {#each reviewVolume as r}
                <div class="gradebar-row">
                    <div class="gradebar-head">
                        <span class="gradebar-name">{r.label}</span>
                        <span class="gradebar-n">{r.value} reviews</span>
                    </div>
                    <div class="vol-track">
                        <div
                            class="vol-fill"
                            style="width:{(r.value / maxVol) * 100}%; background:{r.label ===
                            'Flushing'
                                ? '#DE2910'
                                : '#C9C9C9'}"
                        ></div>
                    </div>
                </div>
            {/each}
            <p class="panel-note">Flushing draws roughly <strong>5×</strong> the Chinese-reviewer attention.</p>
        </div>

        <!-- CONCERNING: inspection grade distribution -->
        <div class="panel">
            <h3 class="panel-title">Concerning · share of inspection grades</h3>
            {#each gradeSplit as row}
                <div class="gradebar-row">
                    <div class="gradebar-head">
                        <span class="gradebar-name">{row.label}</span>
                        <span class="gradebar-n">{row.total.toLocaleString()} graded</span>
                    </div>
                    <div class="gradebar">
                        <div class="seg" style="width:{row.A}%; background:#2E9E5B">
                            {#if row.A >= 10}{Math.round(row.A)}%{/if}
                        </div>
                        <div class="seg" style="width:{row.B}%; background:#F2B705">
                            {#if row.B >= 10}{Math.round(row.B)}%{/if}
                        </div>
                        <div class="seg" style="width:{row.C}%; background:#E23B2E">
                            {#if row.C >= 10}{Math.round(row.C)}%{/if}
                        </div>
                    </div>
                </div>
            {/each}
            <p class="panel-note">
                <strong>1 in 7</strong> Flushing spots carries a Grade C — double the rest of NYC.
            </p>
        </div>
    </div>

    <p class="source">
        “Celebrated” from Google review counts (chinese-restaurant-review-nyc); grades from NYC
        DOHMH inspection results. Flushing defined by Queens ZIP codes (11354–11368).
    </p>
</div>

<div class="wrap closure-section">
    <h2>Health-department closures in Flushing have climbed sharply</h2>
    <p>Times an eatery was shut down by DOHMH for critical violations — mice, live roaches, or sewage problems — each year.</p>

    <svg viewBox="0 0 {cWidth} {cHeight}" class="chart">
        <!-- axes -->
        <line
            x1={cMargin.left}
            x2={cWidth - cMargin.right}
            y1={cHeight - cMargin.bottom}
            y2={cHeight - cMargin.bottom}
            stroke="#ccc"
        />

        {#each cyScale.ticks(5) as tick}
            <line
                x1={cMargin.left}
                x2={cWidth - cMargin.right}
                y1={cyScale(tick)}
                y2={cyScale(tick)}
                stroke="#eee"
            />
            <text
                x={cMargin.left - 8}
                y={cyScale(tick)}
                text-anchor="end"
                dominant-baseline="middle"
                font-size="12"
                fill="#666"
            >
                {tick}
            </text>
        {/each}

        {#each closureData as d}
            <text
                x={cxScale(d.year)}
                y={cHeight - cMargin.bottom + 20}
                text-anchor="middle"
                font-size="12"
                fill="#666"
            >
                {d.year === '2026' ? '2026*' : d.year}
            </text>
        {/each}

        <path d={cArea(closureData)} fill="#DE2910" opacity="0.12" />
        <path d={cLine(closureData)} fill="none" stroke="#DE2910" stroke-width="2.5" />

        {#each closureData as d}
            <circle
                cx={cxScale(d.year)}
                cy={cyScale(d.closures)}
                r="4.5"
                fill="white"
                stroke="#DE2910"
                stroke-width="2.5"
            />
            <text
                x={cxScale(d.year)}
                y={cyScale(d.closures) - 12}
                text-anchor="middle"
                font-size="12"
                font-weight="700"
                fill="#B71C10"
            >
                {d.closures}
            </text>
        {/each}
    </svg>

    <p class="source">DOHMH inspection results; closure events in Flushing ZIP codes (11354–11368). *2026 is a partial year (through mid-July); older resolved closures may also drop out of the dataset over time.</p>
</div>

<style>
    .map-section {
        margin-top: 3rem;
    }

    h2 {
        font-family: sans-serif;
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
    }

    .map-section p {
        margin-bottom: 0.8rem;
    }

    .map {
        width: 100%;
        height: 520px;
        border-radius: 6px;
    }

    .legend {
        display: flex;
        gap: 1.2rem;
        margin-top: 0.7rem;
        font-family: sans-serif;
        font-size: 0.9rem;
        color: #444;
    }

    .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .swatch {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        display: inline-block;
    }

    .closure-section {
        margin-top: 3rem;
    }

    .closure-section h2 {
        font-family: sans-serif;
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
    }

    .closure-section p {
        font-family: sans-serif;
        font-size: 0.95rem;
        color: #444;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    .closure-section .source {
        font-size: 0.78rem;
        color: #999;
        margin-top: 0.6rem;
        margin-bottom: 0;
    }

    .tiein-section {
        margin-top: 3rem;
    }

    .tiein-section h2 {
        font-family: sans-serif;
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
    }

    .tiein-section p {
        font-family: sans-serif;
        font-size: 0.95rem;
        color: #444;
        line-height: 1.5;
        margin-bottom: 1.2rem;
    }

    .tiein-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.8rem;
        margin-bottom: 0.6rem;
    }

    @media (max-width: 620px) {
        .tiein-grid {
            grid-template-columns: 1fr;
        }
    }

    .panel-title {
        font-family: sans-serif;
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: #666;
        margin: 0 0 0.9rem;
    }

    .panel-note {
        font-family: sans-serif;
        font-size: 0.82rem !important;
        color: #666 !important;
        line-height: 1.4 !important;
        margin: 0.5rem 0 0 !important;
    }

    .vol-track {
        height: 38px;
        background: #f0f0f0;
        border-radius: 5px;
        overflow: hidden;
    }

    .vol-fill {
        height: 100%;
        border-radius: 5px;
        min-width: 2px;
    }

    .gradebar-row {
        margin-bottom: 1rem;
        font-family: sans-serif;
    }

    .gradebar-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.3rem;
    }

    .gradebar-name {
        font-size: 1rem;
        font-weight: 700;
        color: #222;
    }

    .gradebar-n {
        font-size: 0.8rem;
        color: #888;
    }

    .gradebar {
        display: flex;
        height: 38px;
        border-radius: 5px;
        overflow: hidden;
    }

    .seg {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 600;
        white-space: nowrap;
    }

    .source {
        font-size: 0.78rem !important;
        color: #999 !important;
        margin-top: 0.4rem;
        margin-bottom: 0 !important;
    }

    /* widen the geocoder search bar */
    :global(.mapboxgl-ctrl-geocoder) {
        min-width: 300px;
        width: 300px;
        max-width: calc(100% - 20px);
    }

    :global(.mapboxgl-ctrl-geocoder input) {
        height: 40px;
    }

    /* popup content is injected by Mapbox outside Svelte's scoped styles */
    :global(.mapboxgl-popup-content) {
        font-family: sans-serif;
        font-size: 13px;
        line-height: 1.45;
        padding: 10px 14px;
    }

    :global(.mapboxgl-popup-content strong) {
        font-size: 14px;
    }

    :global(.pop-grade) {
        font-weight: 700;
        margin: 2px 0;
    }

    :global(.pop-grade.grade-A) {
        color: #2e9e5b;
    }

    :global(.pop-grade.grade-B) {
        color: #b98a00;
    }

    :global(.pop-grade.grade-C) {
        color: #e23b2e;
    }

    :global(.pop-date) {
        color: #888;
        font-size: 12px;
        margin-top: 2px;
    }

    .wrap {
        max-width: 780px;
        margin: 0 auto;
    }

    .headings {
        max-width: 780px;
    }

    h1 {
        font-family: sans-serif;
        font-size: 1.25rem;
        line-height: 1.3;
        margin-bottom: 0.4rem;
    }

    p {
        font-family: sans-serif;
        font-size: 0.95rem;
        color: #555;
        margin-top: 0;
    }

    .chart {
        width: 100%;
        max-width: 780px;
        height: auto;
    }

    text {
        font-family: sans-serif;
    }

    .label {
        font-size: 15px;
        font-weight: 600;
        fill: #333;
    }

    .axis {
        font-size: 13px;
        fill: #777;
    }

    .emoji {
        font-size: 19px;
    }

    .value {
        font-size: 14px;
        font-weight: 600;
        fill: #444;
    }

    .bar {
        transition: opacity 200ms ease;
    }

    .anno-arrow {
        stroke: #333;
        stroke-width: 1.5;
    }

    .anno-text {
        font-size: 14px;
        fill: #333;
    }

    .bold {
        font-weight: 700;
    }
</style>
