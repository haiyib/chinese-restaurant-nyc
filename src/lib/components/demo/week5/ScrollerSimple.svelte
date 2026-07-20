<script>
	import Scroller from '$lib/components/layout/Scroller.svelte';
	import SimpleBackground from '$lib/components/demo/week5/SimpleBackground.svelte';
	import Slide from '$lib/components/demo/week5/Slide.svelte';

	const slides = [
		{
			title: 'Step one',
			description: 'The background color changes as you scroll through each step.'
		},
		{
			title: 'Step two',
			description: 'Scroller binds index to whichever foreground step is active.'
		},
		{
			title: 'Step three',
			description: 'Pass that index into a background snippet to drive the visualization.'
		},
		{
			title: 'Step four',
			description: 'SimpleBackground cycles through a color palette based on the current index.'
		},
		{
			title: 'Step five',
			description: 'Try the VizBackground demo next for a chart-driven scrollytelling example.'
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
		Show debugger for <code>simple-background</code>
	</label>

	<Scroller
		top={0}
		bottom={1}
		ref="simple-background"
		debugger={showDebugger}
		bind:index
		bind:offset
		bind:progress
		bind:count
	>
		{#snippet background()}
			<SimpleBackground {index} {count} />
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
