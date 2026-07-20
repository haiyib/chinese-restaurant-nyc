<script>
	import * as d3 from 'd3';
	const data = [
		{ month: 'Jan', temp: 34, precip: 3.2 },
		{ month: 'Feb', temp: 37, precip: 2.8 },
		{ month: 'Mar', temp: 46, precip: 4.0 },
		{ month: 'Apr', temp: 57, precip: 3.7 },
		{ month: 'May', temp: 67, precip: 3.5 },
		{ month: 'Jun', temp: 76, precip: 3.4 },
		{ month: 'Jul', temp: 82, precip: 4.3 },
		{ month: 'Aug', temp: 80, precip: 3.8 },
		{ month: 'Sep', temp: 72, precip: 3.2 },
		{ month: 'Oct', temp: 61, precip: 2.7 },
		{ month: 'Nov', temp: 50, precip: 3.1 },
		{ month: 'Dec', temp: 39, precip: 3.6 }
	];
	const width = 560;
	const height = 280;
	const margin = { top: 20, right: 20, bottom: 30, left: 45 };

	let metric = $state('temp');

	const xScale = d3
		.scalePoint()
		.domain(data.map((d) => d.month))
		.range([margin.left, width - margin.right])
		.padding(0.5);

	let yScale = $derived(
		d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d[metric])])
			.range([height - margin.bottom, margin.top])
			.nice()
	);

	let lineGenerator = $derived(
		d3
			.line()
			.x((d) => xScale(d.month))
			.y((d) => yScale(d[metric]))
	);
</script>

<div class="controls">
	<button type="button" onclick={() => (metric = 'temp')}>Temperature</button>
	<button type="button" onclick={() => (metric = 'precip')}>Precipitation</button>
</div>

<svg {width} {height} class="chart">
	<path d={lineGenerator(data)} fill="none" stroke="steelblue" stroke-width="2.5" />
</svg>

<style>
	.controls {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.chart {
		max-width: 100%;
		height: auto;
	}
</style>
