<script>
	const data = [
		{ city: 'New York', temp: 84, region: 'Northeast' },
		{ city: 'Philadelphia', temp: 91, region: 'Northeast' },
		{ city: 'Chicago', temp: 78, region: 'Midwest' },
		{ city: 'Los Angeles', temp: 72, region: 'West' },
		{ city: 'Houston', temp: 96, region: 'South' }
	];

	const regionColors = {
		Northeast: 'steelblue',
		Midwest: 'seagreen',
		West: 'tomato',
		South: 'goldenrod'
	};
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
			fill={regionColors[d.region]}
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
