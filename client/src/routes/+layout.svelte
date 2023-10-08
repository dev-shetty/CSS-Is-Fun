<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<!-- <footer class="flex justify-center py-2 bg-slate-50">
		&#0169; Deveesh Shetty - {new Date().getFullYear()}
	</footer> -->
</div>
