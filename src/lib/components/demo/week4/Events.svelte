<script>
	let active = $state(false);
</script>

<svg viewBox="0 0 200 120" width="200" height="120" class="chart">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<rect
		width="100"
		height="60"
		x="50"
		y="30"
		fill={active ? 'tomato' : 'steelblue'}
		onclick={() => (active = !active)}
	/>
</svg>

<p class="hint">Click the rectangle to toggle its color.</p>

<style>
	.chart {
		border: 1px solid #ccc;
		cursor: pointer;
	}

	.hint {
		margin: 0.5rem 0 0;
		font-size: 0.85rem;
		color: #666;
	}
</style>
