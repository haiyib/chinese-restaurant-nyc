import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: [
			// ESM build avoids Rolldown rewriting mapbox-gl worker imports with import.meta.url
			{ find: /^mapbox-gl$/, replacement: 'mapbox-gl/dist/esm/mapbox-gl.js' }
		]
	}
});
