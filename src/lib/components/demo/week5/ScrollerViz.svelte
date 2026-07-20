<script>
	import Scroller from '$lib/components/layout/Scroller.svelte';
	import VizBackground from '$lib/components/demo/week5/VizBackground.svelte';
	import Slide from '$lib/components/demo/week5/Slide.svelte';

	const slides = [
		{
			title: 'Revenue',
			description: 'Scroll to step through different metrics on the same chart.'
		},
		{
			title: 'Users',
			description: 'VizBackground reads the scroll index and updates its internal step config.'
		},
		{
			title: 'Satisfaction',
			description: 'Lines animate between metrics with CSS transitions on the path.'
		},
		{
			title: 'Highlight West',
			description: 'Later steps can dim unselected series and emphasize one region.'
		},
		{
			title: 'Annotate North',
			description: 'The final step adds an annotation tied to a specific data point.'
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
		Show debugger for <code>viz-background</code>
	</label>

	<Scroller
		top={0}
		bottom={1}
		ref="viz-background"
		debugger={showDebugger}
		bind:index
		bind:offset
		bind:progress
		bind:count
	>
		{#snippet background()}
			<VizBackground {index} {count} />
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
