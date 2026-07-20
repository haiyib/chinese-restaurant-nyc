<script>
	import * as d3 from 'd3';
	import states from '$lib/data/us-states.json';
	import incomeData from '$lib/data/state-median-income.json';

	const parseDollar = (value) => Number(value.replace(/[$,]/g, ''));

	let { index = 0, incomeYears } = $props();

	function incomeByState(year) {
		return new Map(
			incomeData.map((row) => {
				let raw = row[String(year)];

				if (!raw) {
					for (let y = year - 1; y >= 2013; y--) {
						raw = row[String(y)];
						if (raw) break;
					}
				}

				return [row.State, raw ? parseDollar(raw) : null];
			})
		);
	}

	let width = $state(0);
	const height = 600;

	const year = $derived(incomeYears[Math.min(index, incomeYears.length - 1)]);

	let projection = $derived(d3.geoAlbersUsa().fitSize([width, height], states));
	let path = $derived(d3.geoPath(projection));

	let valuesByState = $derived(incomeByState(year));

	let colorScale = $derived(
		d3
			.scaleLinear()
			.domain(d3.extent([...valuesByState.values()].filter((v) => v != null)))
			.range(["#f0f9e8", "#006d2c"])
	);
</script>

<div class="background">
	<div class="header">
		<p class="year">{year}</p>
		<p class="label">Median household income</p>
	</div>

	<div bind:clientWidth={width} class="map-host">
		{#if width > 0}
			<svg viewBox="0 0 {width} {height}" {width} {height} class="map">
				{#each states.features as feature (feature.properties.STATE)}
					{@const income = valuesByState.get(feature.properties.NAME)}
					<path
						d={path(feature)}
						fill={income != null ? colorScale(income) : '#ddd'}
						stroke="white"
						stroke-width="0.5"
					/>
				{/each}
			</svg>
		{/if}
	</div>
</div>

<style>
	.background {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 1.5rem;
		background: #fafafa;
	}

	.header {
		margin-bottom: 0.75rem;
		font-family: system-ui, sans-serif;
	}

	.year {
		margin: 0;
		font-size: 2rem;
		font-weight: 700;
		line-height: 1;
		color: #111;
	}

	.label {
		margin: 0.25rem 0 0;
		font-size: 0.9rem;
		color: #666;
	}

	.map-host {
		flex: 1;
		width: 100%;
		min-height: 0;
	}

	.map {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
