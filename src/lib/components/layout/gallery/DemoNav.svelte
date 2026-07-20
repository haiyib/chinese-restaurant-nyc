<script>
	let { sections } = $props();
</script>

<nav class="nav" aria-label="Demo sections">
	<p class="label">Jump to</p>
	<ul>
		{#each sections as section}
			<li>
				<a href={`#${section.id}`}>{section.title}</a>
				{#if section.demos?.length}
					<ul class="sub">
						{#each section.demos as demo}
							<li><a href={`#${demo.id}`}>{demo.title}</a></li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		position: sticky;
		top: 1rem;
		align-self: start;
		padding: 1rem 1.1rem;
		border: 1px solid #e5e5e5;
		border-radius: 0.5rem;
		background: #fafafa;
		font-size: 0.85rem;
		line-height: 1.4;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
	}

	.label {
		margin: 0 0 0.5rem;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #888;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav > ul > li + li {
		margin-top: 0.65rem;
	}

	a {
		color: #1d3557;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.sub {
		margin-top: 0.25rem;
		padding-left: 0.75rem;
		border-left: 2px solid #e5e5e5;
	}

	.sub li + li {
		margin-top: 0.2rem;
	}

	.sub a {
		color: #555;
		font-size: 0.8rem;
	}
</style>
