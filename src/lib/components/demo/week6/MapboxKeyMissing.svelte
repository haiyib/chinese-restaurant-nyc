<div class="missing">
	<h4 class="title">Mapbox access token required</h4>
	<ol class="steps">
		<li>
			Create a free account at
			<a href="https://account.mapbox.com/" target="_blank" rel="noopener noreferrer">mapbox.com</a>
		</li>
		<li>
			Copy <code>.env.development.example</code> to <code>.env.development</code> and set
			<code>PUBLIC_MAPBOX_TOKEN</code> to your default public token from the
			<a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer"
				>Mapbox dashboard</a
			>
		</li>
		<li>
			If publishing to GitHub Pages, copy <code>.env.production.example</code> to
			<code>.env.production</code> and set <code>PUBLIC_MAPBOX_TOKEN</code> to a separate token with URL
			restrictions for <code>https://&lt;username&gt;.github.io/&lt;repo-name&gt;/*</code>
		</li>
		<li>Restart the dev server: <code>npm run dev</code></li>
	</ol>
</div>

<style>
	.missing {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 16rem;
		padding: 1.25rem 1.5rem;
		border: 1px dashed #d4a72c;
		border-radius: 0.5rem;
		background: #fffbeb;
		font-family: system-ui, sans-serif;
		color: #444;
	}

	.title {
		margin: 0 0 0.75rem;
		font-size: 1rem;
		font-weight: 600;
		color: #92400e;
	}

	.steps {
		margin: 0;
		padding-left: 1.25rem;
		line-height: 1.6;
	}

	.steps li + li {
		margin-top: 0.35rem;
	}

	code {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.85em;
		background: rgba(0, 0, 0, 0.05);
		padding: 0.1em 0.35em;
		border-radius: 0.2rem;
	}

	a {
		color: #1d4ed8;
	}
</style>
