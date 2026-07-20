<script>
	const data = [80, 150, 200];
	const width = 600;
	const height = 400;
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as value, i}
		<rect
			x={50 + i * 100}
			y={height - value}
			width="60"
			height={value}
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
