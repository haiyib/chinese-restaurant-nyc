<script>
	const data = [
		{ label: 'A', value: 30 },
		{ label: 'B', value: 70 },
		{ label: 'C', value: 45 },
		{ label: 'D', value: 90 }
	];

	let threshold = $state(50);

	let filtered = $derived(data.filter((d) => d.value >= threshold));
</script>

<label class="control">
	Min value: {threshold}
	<input type="range" min="0" max="100" bind:value={threshold} />
</label>

<ul class="list">
	{#each filtered as d}
		<li>{d.label}: {d.value}</li>
	{/each}
</ul>

<style>
	.control {
		display: grid;
		gap: 0.35rem;
		margin-bottom: 0.75rem;
		font-size: 0.9rem;
	}

	.list {
		margin: 0;
		padding-left: 1.25rem;
	}
</style>
