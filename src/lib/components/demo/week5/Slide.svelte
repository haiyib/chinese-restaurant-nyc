<script>
	let { title, description, content } = $props();
</script>

<div class="slide">
	<div class="panel">
		<h3 class="title">{title}</h3>
		{#if content}
			<div class="content">
				{@render content()}
			</div>
		{:else}
			<p class="description">{description}</p>
		{/if}
	</div>
</div>

<style>
	.slide {
		display: flex;
		align-items: center;
		height: 100vh;
		max-width: 28rem;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		font-family: system-ui, sans-serif;
		box-sizing: border-box;
	}

	.panel {
		padding: 1.25rem 1.5rem;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		background: white;
	}

	.title {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
		line-height: 1.2;
	}

	.description {
		margin: 0;
		line-height: 1.6;
		color: #333;
	}

	.content {
		line-height: 1.6;
		color: #333;
	}

	.content :global(p) {
		margin: 0;
	}
</style>
