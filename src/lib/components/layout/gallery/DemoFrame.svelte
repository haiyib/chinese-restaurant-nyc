<script>
	let { title, description, id, code, children } = $props();

	let showCode = $state(false);
</script>

<article class="frame" {id}>
	<header class="header">
		<div class="header-row">
			<h3 class="title">{title}</h3>
			{#if code}
				<button
					type="button"
					class="code-toggle"
					aria-expanded={showCode}
					onclick={() => (showCode = !showCode)}
				>
					{showCode ? 'Hide code' : 'Show code'}
				</button>
			{/if}
		</div>
		{#if description}
			<p class="description">{description}</p>
		{/if}
	</header>
	{#if showCode && code}
		<div class="code-panel">
			<pre class="code"><code>{code}</code></pre>
		</div>
	{/if}
	<div class="preview">
		{@render children()}
	</div>
</article>

<style>
	.frame {
		border: 1px solid #e5e5e5;
		border-radius: 0.5rem;
		background: white;
		scroll-margin-top: 5rem;
	}

	.header {
		padding: 1rem 1.25rem;
		border-bottom: 1px solid #eee;
		background: #fafafa;
	}

	.header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: #111;
	}

	.description {
		margin: 0.35rem 0 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: #555;
	}

	.code-toggle {
		flex-shrink: 0;
		padding: 0.35rem 0.65rem;
		border: 1px solid #d4d4d4;
		border-radius: 0.35rem;
		background: white;
		font: inherit;
		font-size: 0.8rem;
		color: #333;
		cursor: pointer;
	}

	.code-toggle:hover {
		background: #f3f3f3;
	}

	.code-panel {
		border-bottom: 1px solid #eee;
		background: #1e1e1e;
		max-height: 24rem;
		overflow: auto;
	}

	.code {
		margin: 0;
		padding: 1rem 1.25rem;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.75rem;
		line-height: 1.5;
		color: #d4d4d4;
		white-space: pre;
		tab-size: 2;
	}

	.preview {
		padding: 1.25rem;
		overflow-x: auto;
	}
</style>
