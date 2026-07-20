<script>
	const data = [
		{ city: 'New York', income: 67000, rent: 1800 },
		{ city: 'Philadelphia', income: 47000, rent: 1200 },
		{ city: 'Chicago', income: 58000, rent: 1300 },
		{ city: 'Los Angeles', income: 65000, rent: 1900 },
		{ city: 'Houston', income: 52000, rent: 1050 },
		{ city: 'Phoenix', income: 51000, rent: 1100 },
		{ city: 'Seattle', income: 93000, rent: 2000 },
		{ city: 'Miami', income: 45000, rent: 1600 }
	];
	const width = 600;
	const height = 400;
	const margin = 60;

	const xScale = (income) => ((income - 40000) / 60000) * (width - margin * 2) + margin;
	const yScale = (rent) => height - margin - ((rent - 1000) / 1000) * (height - margin * 2);
</script>

<svg viewBox="0 0 {width} {height}" {width} {height} class="chart">
	{#each data as d}
		<circle
			cx={xScale(d.income)}
			cy={yScale(d.rent)}
			r="8"
			fill="steelblue"
			opacity="0.7"
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
