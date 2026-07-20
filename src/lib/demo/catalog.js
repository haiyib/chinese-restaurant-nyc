import SvgPrimitives from '$lib/components/demo/week1/SvgPrimitives.svelte';
import ColumnHardcoded from '$lib/components/demo/week1/ColumnHardcoded.svelte';
import ColumnDataArray from '$lib/components/demo/week1/ColumnDataArray.svelte';
import ColumnEach from '$lib/components/demo/week1/ColumnEach.svelte';
import ColumnObjects from '$lib/components/demo/week1/ColumnObjects.svelte';
import ColumnColorChannel from '$lib/components/demo/week1/ColumnColorChannel.svelte';
import BarChart from '$lib/components/demo/week1/BarChart.svelte';
import ScatterPlot from '$lib/components/demo/week1/ScatterPlot.svelte';
import LineChartManual from '$lib/components/demo/week1/LineChartManual.svelte';

import ScaleLinear from '$lib/components/demo/week2/ScaleLinear.svelte';
import ScaleBand from '$lib/components/demo/week2/ScaleBand.svelte';
import ScaleOrdinal from '$lib/components/demo/week2/ScaleOrdinal.svelte';
import ScaleTime from '$lib/components/demo/week2/ScaleTime.svelte';
import D3Line from '$lib/components/demo/week2/D3Line.svelte';
import D3LineDots from '$lib/components/demo/week2/D3LineDots.svelte';
import D3Area from '$lib/components/demo/week2/D3Area.svelte';
import LineImperative from '$lib/components/demo/week2/LineImperative.svelte';
import AxesDeclarative from '$lib/components/demo/week2/AxesDeclarative.svelte';
import AxesImperative from '$lib/components/demo/week2/AxesImperative.svelte';

import ImperativeFull from '$lib/components/demo/week3/ImperativeFull.svelte';
import DeclarativeFull from '$lib/components/demo/week3/DeclarativeFull.svelte';

import StateCounter from '$lib/components/demo/week4/StateCounter.svelte';
import Events from '$lib/components/demo/week4/Events.svelte';
import DerivedFilter from '$lib/components/demo/week4/DerivedFilter.svelte';
import BindClientWidth from '$lib/components/demo/week4/BindClientWidth.svelte';
import ReactiveScales from '$lib/components/demo/week4/ReactiveScales.svelte';
import ColumnChartInteractive from '$lib/components/demo/week4/ColumnChartInteractive.svelte';
import LineChartInteractive from '$lib/components/demo/week4/LineChartInteractive.svelte';
import SvelteTransitions from '$lib/components/demo/week4/SvelteTransitions.svelte';

import SnippetsDemo from '$lib/components/demo/week5/SnippetsDemo.svelte';
import ScrollerSimple from '$lib/components/demo/week5/ScrollerSimple.svelte';
import ScrollerViz from '$lib/components/demo/week5/ScrollerViz.svelte';

import MapBase from '$lib/components/demo/week6/MapBase.svelte';
import Choropleth from '$lib/components/demo/week6/Choropleth.svelte';
import ChoroplethWithCities from '$lib/components/demo/week6/ChoroplethWithCities.svelte';
import MapScroller from '$lib/components/demo/week6/MapScroller.svelte';
import MapboxBasic from '$lib/components/demo/week6/MapboxBasic.svelte';
import MapboxScroller from '$lib/components/demo/week6/MapboxScroller.svelte';

/** @typedef {{ id: string, title: string, description?: string, file?: string, component: import('svelte').Component }} DemoEntry */
/** @typedef {{ id: string, title: string, source?: string, demos: DemoEntry[] }} DemoSection */

/** @type {DemoSection[]} */
export const demoCatalog = [
	{
		id: 'week-1',
		title: 'Week 1 — Chart Fundamentals + SVG/Svelte',
		source: 'Chart Fundamentals + SVG:Svelte Introduction.md',
		demos: [
			{
				id: 'svg-primitives',
				title: 'SVG primitives',
				description: 'Rectangles, circles, lines, and text on an SVG canvas.',
				file: 'week1/SvgPrimitives.svelte',
				component: SvgPrimitives
			},
			{
				id: 'column-hardcoded',
				title: 'Column chart — hardcoded',
				description: 'Three columns with every value typed by hand.',
				file: 'week1/ColumnHardcoded.svelte',
				component: ColumnHardcoded
			},
			{
				id: 'column-data-array',
				title: 'Column chart — data array',
				description: 'Values move into the script block and drive y and height.',
				file: 'week1/ColumnDataArray.svelte',
				component: ColumnDataArray
			},
			{
				id: 'column-each',
				title: 'Column chart — {#each}',
				description: 'One loop replaces three hardcoded rectangles.',
				file: 'week1/ColumnEach.svelte',
				component: ColumnEach
			},
			{
				id: 'column-objects',
				title: 'Column chart — objects',
				description: 'Each row is an object with named columns.',
				file: 'week1/ColumnObjects.svelte',
				component: ColumnObjects
			},
			{
				id: 'column-color-channel',
				title: 'Column chart — color channel',
				description: 'Height encodes temperature; color encodes region.',
				file: 'week1/ColumnColorChannel.svelte',
				component: ColumnColorChannel
			},
			{
				id: 'bar-chart',
				title: 'Bar chart',
				description: 'Width becomes the channel instead of height.',
				file: 'week1/BarChart.svelte',
				component: BarChart
			},
			{
				id: 'scatter-plot',
				title: 'Scatter plot',
				description: 'Manual scale functions map income and rent to x and y.',
				file: 'week1/ScatterPlot.svelte',
				component: ScatterPlot
			},
			{
				id: 'line-chart-manual',
				title: 'Line chart — manual scales',
				description: 'A polyline built from a points string.',
				file: 'week1/LineChartManual.svelte',
				component: LineChartManual
			}
		]
	},
	{
		id: 'week-2',
		title: 'Week 2 — D3 Scales, Generators, Axes',
		source: 'D3 Scales.md · Shape Generators, Declarative vs. Imperative, Axes.md',
		demos: [
			{
				id: 'scale-linear',
				title: 'scaleLinear',
				description: 'Quantitative data mapped to pixel positions with an inverted y range.',
				file: 'week2/ScaleLinear.svelte',
				component: ScaleLinear
			},
			{
				id: 'scale-band',
				title: 'scaleBand',
				description: 'Categorical x positions with automatic bandwidth and padding.',
				file: 'week2/ScaleBand.svelte',
				component: ScaleBand
			},
			{
				id: 'scale-ordinal',
				title: 'scaleOrdinal',
				description: 'Categories mapped to a color palette.',
				file: 'week2/ScaleOrdinal.svelte',
				component: ScaleOrdinal
			},
			{
				id: 'scale-time',
				title: 'scaleTime',
				description: 'Date strings parsed and connected with d3.line().',
				file: 'week2/ScaleTime.svelte',
				component: ScaleTime
			},
			{
				id: 'd3-line',
				title: 'd3.line()',
				description: 'A shape generator returns a path string for the whole dataset.',
				file: 'week2/D3Line.svelte',
				component: D3Line
			},
			{
				id: 'd3-line-dots',
				title: 'Line chart with dots',
				description: 'Path for the line; {#each} for circles at each point.',
				file: 'week2/D3LineDots.svelte',
				component: D3LineDots
			},
			{
				id: 'd3-area',
				title: 'd3.area()',
				description: 'Filled area between a baseline and the data line.',
				file: 'week2/D3Area.svelte',
				component: D3Area
			},
			{
				id: 'line-imperative',
				title: 'Line chart — imperative',
				description: 'D3 selects a container and appends SVG inside onMount.',
				file: 'week2/LineImperative.svelte',
				component: LineImperative
			},
			{
				id: 'axes-declarative',
				title: 'Axes — declarative',
				description: 'Tick values from scale.ticks() rendered with {#each}.',
				file: 'week2/AxesDeclarative.svelte',
				component: AxesDeclarative
			},
			{
				id: 'axes-imperative',
				title: 'Axes — imperative',
				description: 'd3.axisBottom and d3.axisLeft called on SVG groups.',
				file: 'week2/AxesImperative.svelte',
				component: AxesImperative
			}
		]
	},
	{
		id: 'week-3',
		title: 'Week 3 — D3 Generators + Declarative vs. Imperative',
		source: 'D3 Generators.md · Declarative vs Imperative.md',
		demos: [
			{
				id: 'declarative-full',
				title: 'Complete chart — declarative',
				description: 'Area, line, dots, and axes built in Svelte markup.',
				file: 'week3/DeclarativeFull.svelte',
				component: DeclarativeFull
			},
			{
				id: 'imperative-full',
				title: 'Complete chart — imperative',
				description: 'Same chart with bind:this, onMount, and D3 data joins.',
				file: 'week3/ImperativeFull.svelte',
				component: ImperativeFull
			}
		]
	},
	{
		id: 'week-4',
		title: 'Week 4 — Interactivity and Animation',
		source: 'Interactivity and Animation.md',
		demos: [
			{
				id: 'state-counter',
				title: '$state',
				description: 'Reactive state re-renders the UI when reassigned.',
				file: 'week4/StateCounter.svelte',
				component: StateCounter
			},
			{
				id: 'events',
				title: 'Events',
				description: 'onclick toggles fill on an SVG rectangle.',
				file: 'week4/Events.svelte',
				component: Events
			},
			{
				id: 'derived-filter',
				title: '$derived + bind:value',
				description: 'A range input filters a list via a derived value.',
				file: 'week4/DerivedFilter.svelte',
				component: DerivedFilter
			},
			{
				id: 'bind-client-width',
				title: 'bind:clientWidth',
				description: 'Responsive chart width from the container element.',
				file: 'week4/BindClientWidth.svelte',
				component: BindClientWidth
			},
			{
				id: 'reactive-scales',
				title: 'Reactive scales',
				description: 'A metric toggle drives $derived yScale and lineGenerator.',
				file: 'week4/ReactiveScales.svelte',
				component: ReactiveScales
			},
			{
				id: 'column-chart-interactive',
				title: 'Column chart — interactive',
				description: 'Selection, tooltips, and opacity transitions on hover and click.',
				file: 'week4/ColumnChartInteractive.svelte',
				component: ColumnChartInteractive
			},
			{
				id: 'line-chart-interactive',
				title: 'Line chart — interactive',
				description: 'Metric toggle, responsive width, and animated axis ticks.',
				file: 'week4/LineChartInteractive.svelte',
				component: LineChartInteractive
			},
			{
				id: 'svelte-transitions',
				title: 'Svelte transitions',
				description: 'fade and fly transitions on conditional elements.',
				file: 'week4/SvelteTransitions.svelte',
				component: SvelteTransitions
			}
		]
	},
	{
		id: 'week-5',
		title: 'Week 5 — Scrollytelling + Advanced patterns',
		source: 'Week 5 — Scrollytelling + Advanced patterns',
		demos: [
			{
				id: 'snippets',
				title: 'Props and snippets',
				description: 'Card and Panel components; Scroller uses snippets for background and foreground.',
				file: 'week5/SnippetsDemo.svelte',
				component: SnippetsDemo
			},
			{
				id: 'scroller-simple',
				title: 'Scroller + SimpleBackground',
				description: 'Slide loop with SimpleBackground; toggle the debugger to inspect scroll state.',
				file: 'week5/ScrollerSimple.svelte',
				component: ScrollerSimple
			},
			{
				id: 'scroller-viz',
				title: 'Scroller + VizBackground',
				description: 'Chart-driven scrolly with VizBackground; each scroller has its own debugger toggle.',
				file: 'week5/ScrollerViz.svelte',
				component: ScrollerViz
			}
		]
	},
	{
		id: 'week-6',
		title: 'Week 6 — GIS and Mapping',
		source: 'GIS and Mapping.md',
		demos: [
			{
				id: 'map-base',
				title: 'Base map',
				description: 'geoAlbersUsa projection and geoPath rendering state shapes.',
				file: 'week6/MapBase.svelte',
				component: MapBase
			},
			{
				id: 'choropleth',
				title: 'Choropleth — Map lookup',
				description: 'Join tabular income data to GeoJSON via a Map keyed by state name; color by growth rate.',
				file: 'week6/Choropleth.svelte',
				component: Choropleth
			},
			{
				id: 'choropleth-with-cities',
				title: 'Choropleth + city points',
				description: 'Growth-rate choropleth with tooltips, sized city points, and labels.',
				file: 'week6/ChoroplethWithCities.svelte',
				component: ChoroplethWithCities
			},
			{
				id: 'map-scroller',
				title: 'Map scrollytelling',
				description: 'One Slide per year (2013–2023); the map updates median income from a Map lookup.',
				file: 'week6/MapScroller.svelte',
				component: MapScroller
			},
			{
				id: 'mapbox-basic',
				title: 'Mapbox — base map + marker',
				description:
					'Loads a Mapbox map centered on Columbia University with a labeled marker.',
				file: 'week6/MapboxBasic.svelte',
				component: MapboxBasic
			},
			{
				id: 'mapbox-scroller',
				title: 'Mapbox — flyTo + layer visibility',
				description:
					'Scroller drives map.flyTo() between Columbia and Philadelphia and toggles marker layers with setLayoutProperty.',
				file: 'week6/MapboxScroller.svelte',
				component: MapboxScroller
			}
		]
	}
];
