/** @type {Record<string, string>} */
const modules = import.meta.glob('$lib/components/demo/**/*.svelte', {
	query: '?raw',
	import: 'default',
	eager: true
});

/** @param {string} file Path relative to demo/, e.g. `week6/Choropleth.svelte` */
export function getDemoSource(file) {
	const key = `/src/lib/components/demo/${file}`;
	return modules[key] ?? null;
}
