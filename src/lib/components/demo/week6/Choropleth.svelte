<script>
	import * as d3 from 'd3';
	import states from '$lib/data/us-states.json';
	import incomeData from '$lib/data/state-median-income.json';

	const parsePercent = (value) => Number(value.replace('%', ''));

	const growthByState = new Map(
		incomeData.map((row) => [row.State, parsePercent(row['Growth rate'])])
	);
	const growthRates = incomeData.map((row) => parsePercent(row['Growth rate']));

	let width = $state(0);
	const height = 600;

	let projection = $derived(d3.geoAlbersUsa().fitSize([width, height], states));
	let path = $derived(d3.geoPath(projection));

	let colorScale = $derived(
		d3.scaleLinear().domain(d3.extent(growthRates)).range(["#f0f9e8", "#006d2c"])
	);

	let tooltip = $state(null);
</script>

<div bind:clientWidth={width} class="map-host">
	{#if width > 0}
		<svg viewBox="0 0 {width} {height}" {width} {height} class="map">
			{#each states.features as feature (feature.properties.STATE)}
				{@const growth = growthByState.get(feature.properties.NAME)}
				{@const [cx, cy] = path.centroid(feature)}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<path
					d={path(feature)}
					fill={growth != null ? colorScale(growth) : '#ddd'}
					stroke="white"
					stroke-width="0.5"
					onmouseenter={() => {
						if (growth == null) return;
						tooltip = {
							x: cx,
							y: cy,
							text: `${feature.properties.NAME}: ${growth}% growth`
						};
					}}
					onmouseleave={() => (tooltip = null)}
				/>
			{/each}

			{#if tooltip}
				<text
					x={tooltip.x}
					y={tooltip.y}
					text-anchor="middle"
					dominant-baseline="middle"
					class="tooltip"
				>
					{tooltip.text}
				</text>
			{/if}
		</svg>
	{/if}
</div>

<style>
	.map-host {
		width: 100%;
	}

	.map {
		display: block;
		width: 100%;
		height: auto;
	}

	path {
		cursor: pointer;
	}

	.tooltip {
		font-family: system-ui, sans-serif;
		font-size: 13px;
		font-weight: 600;
		fill: #222;
		paint-order: stroke fill;
		stroke: white;
		stroke-width: 4px;
		pointer-events: none;
	}
</style>
