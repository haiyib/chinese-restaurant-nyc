<script>
	import * as d3 from 'd3';
	import states from '$lib/data/us-states.json';

	let width = $state(0);
	const height = 600;

	let projection = $derived(d3.geoAlbersUsa().fitSize([width, height], states));
	let path = $derived(d3.geoPath(projection));
</script>

<div bind:clientWidth={width} class="map-host">
	{#if width > 0}
		<svg viewBox="0 0 {width} {height}" {width} {height} class="map">
			{#each states.features as feature (feature.properties.STATE)}
				<path d={path(feature)} fill="#ddd" stroke="white" stroke-width="0.5" />
			{/each}
		</svg>
	{/if}
</div>

<style>
	.map-host {
		width: 100%;
	}

	.map {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
