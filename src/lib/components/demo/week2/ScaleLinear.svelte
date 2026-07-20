<script>
	import * as d3 from 'd3';
	const data = [
		{ city: 'New York', temp: 84 },
		{ city: 'Philadelphia', temp: 91 },
		{ city: 'Chicago', temp: 78 },
		{ city: 'Los Angeles', temp: 72 },
		{ city: 'Houston', temp: 96 }
	];

	const width = 600;
	const height = 400;
	const margin = { top: 20, right: 20, bottom: 40, left: 50 };

	const yScale = d3
		.scaleLinear()
		.domain([0, 100])
		.range([height - margin.bottom, margin.top]);
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as d, i}
		<rect
			x={margin.left + i * 100}
			y={yScale(d.temp)}
			width="60"
			height={height - margin.bottom - yScale(d.temp)}
			fill="steelblue"
		/>
	{/each}
</svg>

<style>
	.chart {
		max-width: 100%;
		height: auto;
	}
</style>
