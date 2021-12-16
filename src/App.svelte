<script lang="ts">
	export let name: string;
	export let keys;
</script>

<main>
	<h1>Hello {name}!</h1>
	<h3>Keys available are {keys}!</h3>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<button on:click={keys[0].play()}>
		<!-- TODO: learn to toggle button -->
		Play/Pause
	</button>

	<button on:click={keys[0].stop()}>
		<!-- TODO: learn to toggle button -->
		Pause
	</button>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>