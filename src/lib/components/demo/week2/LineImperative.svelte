<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	const data = [
		{ month: 'Jan', temp: 40 },
		{ month: 'Feb', temp: 44 },
		{ month: 'Mar', temp: 54 },
		{ month: 'Apr', temp: 65 },
		{ month: 'May', temp: 75 },
		{ month: 'Jun', temp: 83 }
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

	let container;

	onMount(() => {
		const svg = d3
			.select(container)
			.append('svg')
			.attr('viewBox', `0 0 ${width} ${height}`)
			.attr('width', width)
			.attr('height', height);

		svg
			.append('path')
			.datum(data)
			.attr('d', lineGenerator)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 2);
	});
</script>

<div bind:this={container} class="chart-host"></div>

<style>
	.chart-host {
		border: 1px solid #ccc;
		display: inline-block;
	}
</style>
