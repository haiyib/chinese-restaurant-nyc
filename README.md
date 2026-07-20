# class-svelte-starter

Starter template for **Data, Computation & Innovation II** — a SvelteKit project for building charts, scrollytelling pieces, and maps with Svelte and D3.

---

## Project layout

```
src/
├── routes/
│   ├── +page.svelte          # Home page
│   ├── +layout.svelte        # App shell (global styles, favicon)
│   ├── +layout.js            # Enables static pre-rendering (see Publishing below)
│   └── demo/
│       └── +page.svelte      # Code examples gallery
│
└── lib/
    ├── components/
    │   ├── demo/
    │   │   ├── week1/ … week6/   # One folder per week; each .svelte file is a gallery demo
    │   └── layout/
    │       ├── Scroller.svelte   # Shared scrollytelling component
    │       └── gallery/          # DemoNav, DemoSection, DemoFrame (gallery chrome)
    │
    ├── data/                 # JSON datasets (GeoJSON, income data, cities, etc.)
    └── demo/
        ├── catalog.js        # Gallery metadata — titles, descriptions, component imports
        └── sources.js        # Loads raw .svelte source for the "Show code" toggle
```

**Where to put your own work**

- Class exercises and weekly demos live in `src/lib/components/demo/weekN/`.
- Shared pieces you reuse across weeks (a scroller, a tooltip, a layout wrapper) go in `src/lib/components/layout/`.
- Data files go in `src/lib/data/`.
- To add a demo to the gallery, register it in `src/lib/demo/catalog.js` and give it a `file` path for the code viewer.

The gallery at `/demo` reads from `catalog.js` and renders each entry inside a `DemoFrame` with a live preview and optional source panel.

---

## Developing

Install dependencies, then start the dev server:

```sh
npm install
npm run dev
```

Open the URL shown in the terminal — usually `http://localhost:5173`. The code examples gallery is at **`/demo`**.

Mapbox demos need a token in your env files (see `.env.development.example` and `.env.production.example`):

- **`.env.development`** — your Mapbox default public token, used during `npm run dev`.
- **`.env.production`** — a separate token with your GitHub Pages URL in its [URL restrictions](https://account.mapbox.com/access-tokens/) (for example `https://<username>.github.io/<repo-name>/*`). Used when you run `npm run build` or `make github`. Do not publish with the default token.

Vite picks the right file automatically based on mode. Restart the dev server after changing env files.

---

## Building

```sh
npm run build      # outputs a static site to build/
npm run preview    # preview the production build locally
```

---

## Publishing to GitHub Pages

This repo is set up to deploy as a static site from the `docs/` folder on the `main` branch.

### One-time setup

1. Go to [github.com/jaredwhalen/class-svelte-starter](https://github.com/jaredwhalen/class-svelte-starter) and click the green **Use this template** button to create your own copy of the repo under your GitHub account. Name it whatever you like.
2. Clone **your** new repo to your machine, then install dependencies and confirm `npm run dev` works (see [Developing](#developing) above).
3. In your repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch **`main`**, folder **`/docs`**, and save.
6. After the first deploy, your site will be live at `https://<username>.github.io/<repo-name>/` (use the repo name you chose in step 1).

### Deploy

From the project root:

```sh
make github
```

If your site includes Mapbox maps, set `PUBLIC_MAPBOX_TOKEN` in `.env.production` before you deploy (see [Developing](#developing)).

The `github` target in the `Makefile`:

1. Runs `npm run build` — compiles the site into `build/`
2. Replaces the `docs/` folder with a copy of `build/`
3. Adds `docs/.nojekyll` so GitHub Pages does not run Jekyll on the output
4. Commits and pushes the updated `docs/` folder

Give GitHub a minute or two after the push, then refresh your Pages URL.

### Why static hosting works

GitHub Pages serves plain files — there is no Node server to run SvelteKit at request time. Two project settings make that possible:

**`svelte.config.js`** — uses `@sveltejs/adapter-static` instead of the default server adapter. At build time, SvelteKit writes static HTML, CSS, and JavaScript into `build/` rather than producing a server bundle.

```js
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter()
	}
};
```

**`src/routes/+layout.js`** — exports `prerender = true`, which tells SvelteKit to pre-render every page when you build. Each route (including `/demo`) becomes a real `.html` file that GitHub Pages can serve directly.

```js
export const prerender = true;
```

Together, the static adapter generates the files and pre-rendering ensures every route exists as HTML before anything is uploaded.

---
