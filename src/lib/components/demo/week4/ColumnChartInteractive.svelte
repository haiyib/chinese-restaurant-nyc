<script>
	import * as d3 from 'd3';
	const data = [
		{ city: 'New York', avg: 55 },
		{ city: 'Miami', avg: 77 },
		{ city: 'Chicago', avg: 50 },
		{ city: 'Houston', avg: 68 },
		{ city: 'Seattle', avg: 52 }
	];
	const width = 500;
	const height = 320;
	const margin = { top: 20, right: 20, bottom: 40, left: 45 };

	const xScale = d3
		.scaleBand()
		.domain(data.map((d) => d.city))
		.range([margin.left, width - margin.right])
		.padding(0.2);

	const yScale = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

	const colorScale = d3
		.scaleOrdinal()
		.domain(data.map((d) => d.city))
		.range(d3.schemeTableau10);

	let selected = $state(null);
	let tooltip = $state(null);
</script>

<svg {width} {height} class="chart">
	{#each yScale.ticks(5) as tick}
		<line
			x1={margin.left}
			x2={width - margin.right}
			y1={yScale(tick)}
			y2={yScale(tick)}
			stroke="#e5e5e5"
		/>
		<text
			x={margin.left - 8}
			y={yScale(tick)}
			text-anchor="end"
			dominant-baseline="middle"
		>
			{tick}°
		</text>
	{/each}

	<line
		x1={margin.left}
		x2={width - margin.right}
		y1={height - margin.bottom}
		y2={height - margin.bottom}
		stroke="#999"
	/>

	{#each data as d}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<rect
			x={xScale(d.city)}
			y={yScale(d.avg)}
			width={xScale.bandwidth()}
			height={height - margin.bottom - yScale(d.avg)}
			fill={colorScale(d.city)}
			opacity={selected == null || selected == d.city ? 1 : 0.2}
			onclick={() => (selected = selected === d.city ? null : d.city)}
			onmouseenter={() => {
				tooltip = {
					x: xScale(d.city) + xScale.bandwidth() / 2,
					y: yScale(d.avg) - 8,
					text: `${d.city}: ${d.avg}`
				};
			}}
			onmouseleave={() => (tooltip = null)}
		/>
		<text
			x={xScale(d.city) + xScale.bandwidth() / 2}
			y={height - margin.bottom + 16}
			text-anchor="middle"
		>
			{d.city}
		</text>
	{/each}

	{#if tooltip}
		<text
			x={tooltip.x}
			y={tooltip.y}
			text-anchor="middle"
			font-size="13"
			font-weight="bold"
			fill="#222"
		>
			{tooltip.text}
		</text>
	{/if}
</svg>

<style>
	.chart {
		max-width: 100%;
		height: auto;
	}

	text {
		font-family: sans-serif;
		font-size: 12px;
		fill: #555;
	}

	rect {
		cursor: pointer;
		transition: opacity 200ms ease;
	}
</style>
