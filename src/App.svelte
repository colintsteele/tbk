<script lang="ts">
import Natural from "./components/Natural.svelte"
import type Key from "./key"
import type KeyHandler from "./keyHandler"

	export let keyHandler: KeyHandler
	export let keys: Array<Key>

	let naturals = [];

	function handleKeydown(e: KeyboardEvent) {
		naturals.map((natural) => {
			if(natural.key.key === e.key){
				natural.pressKey()
			}
		})
	}
</script>

<svelte:window on:keydown={handleKeydown}/>
<!-- a: 97 s:115 d:100 -->

<main>
	<p> 🎶🎶🎶 </p>
	{#each keys as key, i }
	  <Natural key={ key[1] } bind:this={naturals[i]}/>
	{/each}
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
		font-size: 2em;
		font-weight: 100;
	}

	span {
		color: #0077ff;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>