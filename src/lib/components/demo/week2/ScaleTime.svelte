<script>
	import * as d3 from 'd3';
	const width = 600;
	const height = 400;
	const margin = { top: 20, right: 20, bottom: 40, left: 50 };

	const timeSeries = [
		{ date: '2020-01-01', value: 120 },
		{ date: '2021-01-01', value: 145 },
		{ date: '2022-01-01', value: 98 },
		{ date: '2023-01-01', value: 162 },
		{ date: '2024-01-01', value: 180 }
	];
	const parsed = timeSeries.map((d) => ({ ...d, date: new Date(d.date) }));

	const xScale = d3
		.scaleTime()
		.domain(d3.extent(parsed, (d) => d.date))
		.range([margin.left, width - margin.right]);

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(parsed, (d) => d.value)])
		.range([height - margin.bottom, margin.top]);

	const lineGenerator = d3
		.line()
		.x((d) => xScale(d.date))
		.y((d) => yScale(d.value));
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	<path d={lineGenerator(parsed)} fill="none" stroke="steelblue" stroke-width="2" />

	{#each parsed as d}
		<circle cx={xScale(d.date)} cy={yScale(d.value)} r="5" fill="steelblue" />
	{/each}
</svg>

<style>
	.chart {
		max-width: 100%;
		height: auto;
	}
</style>
