<script>
	const data = [80, 150, 200];
	const width = 600;
	const height = 400;
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	<rect x="50" y={400 - data[0]} width="60" height={data[0]} fill="steelblue" />
	<rect x="150" y={400 - data[1]} width="60" height={data[1]} fill="steelblue" />
	<rect x="250" y={400 - data[2]} width="60" height={data[2]} fill="steelblue" />
</svg>

<style>
	.chart {
		border: 1px solid #ccc;
		max-width: 100%;
		height: auto;
	}
</style>
