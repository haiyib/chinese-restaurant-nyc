<script>
	import Scroller from '$lib/components/layout/Scroller.svelte';
	import MapYearBackground from '$lib/components/demo/week6/MapYearBackground.svelte';
	import Slide from '$lib/components/demo/week5/Slide.svelte';

	const incomeYears = [2020, 2021, 2022, 2023];

	const slides = incomeYears.map((year) => ({
		title: String(year),
		description: `Median household income in ${year}.`
	}));

	let showDebugger = $state(false);
	let index = $state(0);
	let offset = $state(0);
	let progress = $state(0);
	let count = $state(0);
</script>

<div class="scroller-demo">
	<label class="debugger-toggle">
		<input type="checkbox" bind:checked={showDebugger} />
		Show debugger for <code>map-year</code>
	</label>

	<Scroller
		top={0}
		bottom={1}
		ref="map-year"
		debugger={showDebugger}
		bind:index
		bind:offset
		bind:progress
		bind:count
	>
		{#snippet background()}
			<MapYearBackground {index} {incomeYears}/>
		{/snippet}

		{#snippet foreground()}
			{#each slides as slide}
				<Slide title={slide.title} description={slide.description} />
			{/each}
		{/snippet}
	</Scroller>
</div>

<style>
	.scroller-demo {
		max-width: none;
		margin: 0 -1.25rem;
	}

	.debugger-toggle {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0 1.25rem 0.75rem;
		font-family: system-ui, sans-serif;
		font-size: 0.85rem;
		color: #444;
		cursor: pointer;
	}

	.debugger-toggle input {
		margin: 0;
	}
</style>
