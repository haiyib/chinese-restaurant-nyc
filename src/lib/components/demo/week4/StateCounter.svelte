<script>
	let count = $state(0);
</script>

<p class="count">{count}</p>
<button type="button" onclick={() => count++}>Increment</button>

<style>
	.count {
		margin: 0 0 0.75rem;
		font-size: 1.5rem;
		font-weight: 600;
	}
</style>
