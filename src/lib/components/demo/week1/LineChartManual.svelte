<script>
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
	const margin = 60;

	const xScale = (i) => margin + (i / (data.length - 1)) * (width - margin * 2);
	const yScale = (temp) => height - margin - (temp / 100) * (height - margin * 2);

	const points = data.map((d, i) => `${xScale(i)},${yScale(d.temp)}`).join(' ');
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	<polyline points={points} fill="none" stroke="steelblue" stroke-width="2" />

	{#each data as d, i}
		<circle cx={xScale(i)} cy={yScale(d.temp)} r="4" fill="steelblue" />
	{/each}
</svg>

<style>
	.chart {
		border: 1px solid #ccc;
		max-width: 100%;
		height: auto;
	}
</style>
