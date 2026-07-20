<script>
	import Scroller from '$lib/components/layout/Scroller.svelte';
	import MapboxFlyBackground from '$lib/components/demo/week6/MapboxFlyBackground.svelte';
	import Slide from '$lib/components/demo/week5/Slide.svelte';

	const slides = [
		{
			id: 'columbia',
			title: 'Columbia University',
			description:
				'The map starts on Morningside Heights. Only the Columbia marker layer is visible.',
			label: 'Columbia University',
			center: [-73.9626, 40.8075],
			zoom: 14,
			color: '#b31b1b'
		},
		{
			id: 'philadelphia',
			title: 'Philadelphia',
			description:
				'Scrolling triggers map.flyTo() to Philadelphia and toggles layer visibility so only the Philly marker shows.',
			label: 'Philadelphia',
			center: [-75.1652, 39.9526],
			zoom: 12.5,
			color: '#0057b8'
		}
	];

	let showDebugger = $state(false);
	let index = $state(0);
	let offset = $state(0);
	let progress = $state(0);
	let count = $state(0);
</script>

<div class="scroller-demo">
	<label class="debugger-toggle">
		<input type="checkbox" bind:checked={showDebugger} />
		Show debugger for <code>mapbox-fly</code>
	</label>

	<Scroller
		top={0}
		bottom={1}
		ref="mapbox-fly"
		debugger={showDebugger}
		bind:index
		bind:offset
		bind:progress
		bind:count
	>
		{#snippet background()}
			<MapboxFlyBackground {index} {slides} />
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
