<script lang="ts">
import type KeyHandler from "./keyHandler";
	export let keyHandler: KeyHandler;
	let keyPressed = null;
	$: lastKey = keyPressed;

	function handleKeydown(e: KeyboardEvent) {
		keyPressed = e.key;
		keyHandler.handle(e.key);
	}

</script>

<svelte:window on:keydown={handleKeydown}/>
<!-- a: 97 s:115 d:100 -->

<main>
	<p> 🎶🎶🎶 </p>
	<h4>Key Pressed: <span>{lastKey}</span> </h4>

	<button on:click={() => keyHandler.handle('a')}>
		C
	</button>

	<button on:click={() => keyHandler.handle('s')}>
		G
	</button>

</main>

<style>

	/* background-color: #2e2e2e; */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h4 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	span {
		color: #0077ff;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>