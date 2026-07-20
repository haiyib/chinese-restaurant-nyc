<script>
	const width = 600;
	const height = 400;
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	<rect x="50" y="50" width="100" height="60" fill="steelblue" />
	<circle cx="300" cy="100" r="40" fill="tomato" />
	<line x1="50" y1="200" x2="400" y2="200" stroke="black" stroke-width="2" />
	<text x="50" y="300" font-size="20">Hello, SVG</text>
</svg>

<style>
	.chart {
		border: 1px solid #ccc;
		max-width: 100%;
		height: auto;
	}
</style>
