<script lang="ts">
import Natural from "./components/Natural.svelte";
import type KeyHandler from "./keyHandler";

	export let keyHandler: KeyHandler;

	let keyPressed = null;
	$: lastKey = keyPressed;

	let notePlayed = null;
	$: lastNote = notePlayed;

	function handleKeydown(e: KeyboardEvent) {
		var played = keyHandler.handle(e.key);
		if(played != undefined) {
			keyPressed = played['key']
			notePlayed = played['note']
		}
	}

	let notes = ['C#','D', 'Eb', 'Bb'];

</script>

<svelte:window on:keydown={handleKeydown}/>
<!-- a: 97 s:115 d:100 -->

<main>
	<p> 🎶🎶🎶 </p>
	<h4> Press keys 1 through = and q through ] to play music </h4>
	<h4>Key Pressed: <span>{lastKey}</span> </h4>
	<h4>Not Produced: <span>{lastNote}</span> </h4>

	<h6> ☣️ </h6>
	
	{#each notes as note}
	  <Natural note={note}/>
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