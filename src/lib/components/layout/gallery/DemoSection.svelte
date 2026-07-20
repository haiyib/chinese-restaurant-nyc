<script>
	let { title, source, id, children } = $props();
</script>

<section class="section" {id}>
	<header class="section-header">
		<h2 class="section-title">{title}</h2>
		{#if source}
			<p class="source">Code reference: <code>{source}</code></p>
		{/if}
	</header>
	<div class="demos">
		{@render children()}
	</div>
</section>

<style>
	.section {
		scroll-margin-top: 4rem;
	}

	.section-header {
		margin-bottom: 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid #111;
	}

	.section-title {
		margin: 0;
		font-size: 1.35rem;
		line-height: 1.3;
	}

	.source {
		margin: 0.4rem 0 0;
		font-size: 0.85rem;
		color: #666;
	}

	.demos {
		display: grid;
		gap: 1.5rem;
	}
</style>
