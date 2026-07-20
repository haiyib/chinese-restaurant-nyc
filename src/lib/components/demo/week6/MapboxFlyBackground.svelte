<script>
	import { onMount } from 'svelte';
	import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
	import * as mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import MapboxKeyMissing from './MapboxKeyMissing.svelte';

	let { index = 0, slides = [] } = $props();

	const token = PUBLIC_MAPBOX_TOKEN;
	const hasToken = Boolean(token.trim());

	let container = $state();
	/** @type {mapboxgl.Map | undefined} */
	let map;
	let ready = $state(false);

	function updateView(activeIndex) {
		if (!map || !ready || slides.length === 0) return;

		const place = slides[Math.min(activeIndex, slides.length - 1)];

		map.flyTo({
			center: place.center,
			zoom: place.zoom,
			duration: 1500,
			essential: true
		});

		for (const slide of slides) {
			const visibility = slide.id === place.id ? 'visible' : 'none';
			map.setLayoutProperty(`${slide.id}-circle`, 'visibility', visibility);
			map.setLayoutProperty(`${slide.id}-label`, 'visibility', visibility);
		}
	}

	onMount(() => {
		if (!hasToken || !container || slides.length === 0) return;

		mapboxgl.setAccessToken(token);

		map = new mapboxgl.Map({
			container,
			style: 'mapbox://styles/mapbox/light-v11',
			center: slides[0].center,
			zoom: slides[0].zoom
		});

		map.on('load', () => {
			for (const slide of slides) {
				map.addSource(slide.id, {
					type: 'geojson',
					data: {
						type: 'Feature',
						properties: { label: slide.label },
						geometry: {
							type: 'Point',
							coordinates: slide.center
						}
					}
				});

				map.addLayer({
					id: `${slide.id}-circle`,
					type: 'circle',
					source: slide.id,
					paint: {
						'circle-radius': 8,
						'circle-color': slide.color,
						'circle-stroke-width': 2,
						'circle-stroke-color': '#ffffff'
					}
				});

				map.addLayer({
					id: `${slide.id}-label`,
					type: 'symbol',
					source: slide.id,
					layout: {
						'text-field': ['get', 'label'],
						'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
						'text-size': 13,
						'text-offset': [0, 1.1],
						'text-anchor': 'top'
					},
					paint: {
						'text-color': '#111111',
						'text-halo-color': '#ffffff',
						'text-halo-width': 2
					}
				});
			}

			ready = true;
			updateView(index);
		});

		return () => map?.remove();
	});

	$effect(() => {
		updateView(index);
	});
</script>

{#if hasToken}
	<div class="background">
		<div bind:this={container} class="map"></div>
	</div>
{:else}
	<div class="background missing-host">
		<MapboxKeyMissing />
	</div>
{/if}

<style>
	.background {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 1.5rem;
		background: #fafafa;
	}

	.map {
		width: 100%;
		height: 100%;
		border-radius: 0.35rem;
		overflow: hidden;
	}

	.missing-host {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
