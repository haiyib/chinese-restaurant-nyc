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
	const barHeight = 40;
	const gap = 15;
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as d, i}
		<rect
			x={0}
			y={i * (barHeight + gap) + 20}
			width={d.temp * 4}
			height={barHeight}
			fill="steelblue"
		/>
		<text
			x={d.temp * 4 + 8}
			y={i * (barHeight + gap) + 20 + barHeight / 2 + 5}
			font-size="14"
		>
			{d.city}
		</text>
	{/each}
</svg>

<style>
	.chart {
		border: 1px solid #ccc;
		max-width: 100%;
		height: auto;
	}
</style>
