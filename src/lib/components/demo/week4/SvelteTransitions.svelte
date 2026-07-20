<script>
	import { fade, fly } from 'svelte/transition';

	let show = $state(false);
</script>

<button type="button" onclick={() => (show = !show)}>Toggle</button>

{#if show}
	<div class="box fade" transition:fade={{ duration: 300 }}>Fades in and out.</div>

	<div class="box fly" in:fly={{ y: 20, duration: 400 }} out:fade={{ duration: 200 }}>
		Flies in from below, fades out.
	</div>
{/if}

<style>
	.box {
		margin-top: 0.75rem;
		padding: 0.75rem 1rem;
		border-radius: 0.375rem;
		background: #eef6fb;
		color: #1d3557;
	}
</style>
