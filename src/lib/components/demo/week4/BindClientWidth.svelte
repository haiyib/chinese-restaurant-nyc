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
	const height = 300;
	const margin = { top: 20, right: 20, bottom: 40, left: 50 };

	let containerWidth = $state(0);

	let xScale = $derived(
		d3
			.scalePoint()
			.domain(data.map((d) => d.month))
			.range([margin.left, containerWidth - margin.right])
	);
</script>

<div bind:clientWidth={containerWidth} class="host">
	{#if containerWidth > 0}
		<svg width={containerWidth} {height} class="chart">
			{#each data as d}
				<circle cx={xScale(d.month)} cy={height / 2} r="4" fill="steelblue" />
			{/each}
		</svg>
	{/if}
</div>

<p class="hint">Resize the window to see the chart reflow.</p>

<style>
	.host {
		width: 100%;
		border: 1px solid #ccc;
	}

	.chart {
		display: block;
		width: 100%;
		height: auto;
	}

	.hint {
		margin: 0.5rem 0 0;
		font-size: 0.85rem;
		color: #666;
	}
</style>
