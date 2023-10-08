<script lang="ts">
	import snippets from '$lib/snippets.json';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container mx-auto my-4">
	<h1>UI Snippets</h1>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 mx-4">
		{#each snippets as snippet (snippet)}
			<div class="flex flex-col gap-2 p-2 bg-slate-50 rounded-md">
				<!-- For Codepen Embed -->
				<!-- <p
					class="codepen aspect-square"
					data-height="500"
					data-default-tab="result"
					data-slug-hash={snippet['codepen-link'].split('/').at(-1)}
				>
					<span
						>See the Pen <a href={snippet['codepen-link']}> {snippet.name}</a>
						by {snippet.author} on
						<a href="https://codepen.io">CodePen</a>.</span
					>
				</p>
				<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script> -->
				<img src={snippet['image-link']} alt={snippet.name} class="aspect-square" />
				<div class="text-center">
					<p class="text-xl">{snippet.name}</p>
					<p>Visit at <a href={snippet['codepen-link']}>Codepen</a></p>
					<p>Author: {snippet.author}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
