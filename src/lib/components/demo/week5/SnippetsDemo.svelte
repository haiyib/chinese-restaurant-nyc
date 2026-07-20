<script>
	import Card from '$lib/components/demo/week5/Card.svelte';
	import Panel from '$lib/components/demo/week5/Panel.svelte';
</script>

<div class="patterns">
	<div class="cards">
		<Card title="First card" description="This card uses the default props." />
		<Card
			title="Second card"
			description="Props let a parent customize a child component."
			accent="#2a9d8f"
		/>
	</div>

	<Panel title="List panel">
		{#snippet content()}
			<ul>
				<li>Snippets can include multiple elements</li>
				<li>They are not limited to a single string prop</li>
				<li>Scroller uses this idea for <code>background</code> and <code>foreground</code></li>
			</ul>
		{/snippet}
	</Panel>
</div>

<style>
	.patterns {
		display: grid;
		gap: 1rem;
	}

	.cards {
		display: grid;
		gap: 1rem;
	}
</style>
