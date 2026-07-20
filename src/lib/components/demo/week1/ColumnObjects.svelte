<script>
	const data = [
		{ city: 'New York', temp: 84 },
		{ city: 'Philadelphia', temp: 91 },
		{ city: 'Chicago', temp: 78 },
		{ city: 'Los Angeles', temp: 72 },
		{ city: 'Houston', temp: 96 }
	];
	const width = 600;
	const height = 400;
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as d, i}
		<rect
			x={50 + i * 100}
			y={height - d.temp}
			width="60"
			height={d.temp}
			fill="steelblue"
		/>
	{/each}
</svg>

<style>
	.chart {
		border: 1px solid #ccc;
		max-width: 100%;
		height: auto;
	}
</style>
