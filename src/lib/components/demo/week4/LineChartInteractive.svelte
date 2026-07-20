<script>
	import * as d3 from 'd3';
	import { fade } from 'svelte/transition';
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
	const height = 320;
	const margin = { top: 20, right: 20, bottom: 30, left: 45 };

	let metric = $state('temp');
	let containerWidth = $state(0);

	let xScale = $derived(
		d3
			.scalePoint()
			.domain(data.map((d) => d.month))
			.range([margin.left, containerWidth - margin.right])
			.padding(0.5)
	);

	let yScale = $derived(
		d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d[metric])])
			.range([height - margin.bottom, margin.top])
			.nice()
	);

	let lineGenerator = $derived(
		d3
			.line()
			.x((d) => xScale(d.month))
			.y((d) => yScale(d[metric]))
			.curve(d3.curveCatmullRom)
	);
</script>

<div bind:clientWidth={containerWidth} class="host">
	<div class="controls">
		<button type="button" onclick={() => (metric = 'temp')}>Temperature</button>
		<button type="button" onclick={() => (metric = 'precip')}>Precipitation</button>
	</div>

	{#if containerWidth > 0}
		<svg width={containerWidth} {height} class="chart">
			{#each yScale.ticks(5) as tick (tick)}
				<g style="transform: translateY({yScale(tick)}px)" transition:fade={{ duration: 150 }}>
					<line
						x1={margin.left}
						x2={containerWidth - margin.right}
						y1="0"
						y2="0"
						stroke="#e5e5e5"
					/>
					<text
						x={margin.left - 8}
						y="0"
						text-anchor="end"
						dominant-baseline="middle"
					>
						{tick}
					</text>
				</g>
			{/each}

			{#each data as d}
				<text
					x={xScale(d.month)}
					y={height - margin.bottom + 16}
					text-anchor="middle"
				>
					{d.month}
				</text>
			{/each}

			<line
				x1={margin.left}
				x2={margin.left}
				y1={margin.top}
				y2={height - margin.bottom}
				stroke="#999"
			/>
			<line
				x1={margin.left}
				x2={containerWidth - margin.right}
				y1={height - margin.bottom}
				y2={height - margin.bottom}
				stroke="#999"
			/>

			<path d={lineGenerator(data)} fill="none" stroke="steelblue" stroke-width="2.5" />
		</svg>
	{/if}
</div>

<style>
	.host {
		width: 100%;
	}

	.controls {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	g {
		transition: transform 300ms ease;
	}

	path {
		transition: d 300ms ease;
	}

	text {
		font-family: sans-serif;
		font-size: 12px;
		fill: #555;
	}

	.chart {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
