<script>
	import DemoNav from '$lib/components/layout/gallery/DemoNav.svelte';
	import DemoSection from '$lib/components/layout/gallery/DemoSection.svelte';
	import DemoFrame from '$lib/components/layout/gallery/DemoFrame.svelte';
	import { demoCatalog } from '$lib/demo/catalog.js';
	import { getDemoSource } from '$lib/demo/sources.js';
</script>

<svelte:head>
	<title>Code examples gallery</title>
</svelte:head>

<main class="page">
	<header class="hero">
		<h1>Code examples gallery</h1>
		<p class="intro">
			Live versions of the examples from <strong>Data, Computation &amp; Innovation II</strong>.
		</p>
	</header>

	<div class="layout">
		<DemoNav sections={demoCatalog} />

		<div class="content">
			{#each demoCatalog as section}
				<DemoSection id={section.id} title={section.title} source={section.source}>
					{#each section.demos as demo}
						<DemoFrame
							id={demo.id}
							title={demo.title}
							description={demo.description}
							code={demo.file ? getDemoSource(demo.file) : null}
						>
							<demo.component />
						</DemoFrame>
					{/each}
				</DemoSection>
			{/each}
		</div>
	</div>
</main>

<style>
	.page {
		max-width: 72rem;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
		font-family: system-ui, sans-serif;
		color: #111;
	}

	.hero {
		margin-bottom: 2rem;
	}

	h1 {
		margin: 0 0 0.5rem;
		font-size: clamp(1.75rem, 4vw, 2.25rem);
		line-height: 1.2;
	}

	.intro {
		margin: 0;
		max-width: 42rem;
		color: #555;
		line-height: 1.6;
	}

	.layout {
		display: grid;
		gap: 2rem;
	}

	.content {
		display: grid;
		gap: 3rem;
		min-width: 0;
	}

	@media (min-width: 56rem) {
		.layout {
			grid-template-columns: 16rem minmax(0, 1fr);
			align-items: start;
		}
	}
</style>
