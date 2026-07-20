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

	const xScale = d3
		.scaleBand()
		.domain(data.map((d) => d.city))
		.range([margin.left, width - margin.right])
		.padding(0.2);

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => d.temp)])
		.range([height - margin.bottom, margin.top]);
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as d}
		<rect
			x={xScale(d.city)}
			y={yScale(d.temp)}
			width={xScale.bandwidth()}
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
