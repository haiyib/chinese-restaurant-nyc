<script>
	import * as d3 from 'd3';
	const data = [
		{ month: 'Jan', temp: 40 },
		{ month: 'Feb', temp: 44 },
		{ month: 'Mar', temp: 54 },
		{ month: 'Apr', temp: 65 },
		{ month: 'May', temp: 75 },
		{ month: 'Jun', temp: 83 },
		{ month: 'Jul', temp: 88 },
		{ month: 'Aug', temp: 86 },
		{ month: 'Sep', temp: 78 },
		{ month: 'Oct', temp: 67 },
		{ month: 'Nov', temp: 55 },
		{ month: 'Dec', temp: 44 }
	];

	const width = 600;
	const height = 400;
	const margin = { top: 20, right: 20, bottom: 40, left: 50 };

	const xScale = d3
		.scalePoint()
		.domain(data.map((d) => d.month))
		.range([margin.left, width - margin.right]);

	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => d.temp)])
		.range([height - margin.bottom, margin.top]);

	const lineGenerator = d3
		.line()
		.x((d) => xScale(d.month))
		.y((d) => yScale(d.temp));
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	<path d={lineGenerator(data)} fill="none" stroke="steelblue" stroke-width="2" />
</svg>

<style>
	.chart {
		max-width: 100%;
		height: auto;
	}
</style>
