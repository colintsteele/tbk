<script lang="ts">
import Natural from "./components/Natural.svelte"
import Note from "./components/Note.svelte"
import type Key from "./key"
import type KeyHandler from "./keyHandler"
import { currentNote, assigningNote } from "./stores";

	export let keyHandler: KeyHandler
	export let keys: Array<Key>
	let notes = keys.map( key => key[1].note )
	let noteComponents = {};	
	let nNaturals = {};

	function handleKeydown(e: KeyboardEvent) {
		let key = nNaturals[e.key]
		key && key.pressKey()
	}
</script>

<svelte:window on:keydown={handleKeydown}/>
<!-- a: 97 s:115 d:100 -->

<main>
	<p> 🎶🎶🎶 </p>
	<div id="piano">
		{#each keys as key }
			<Natural key={ key[1] } bind:this={nNaturals[key[1].key]}/>
		{/each}
	</div>

	<div id="noteSelector">
		{#each notes as note }
			<Note note={ note } bind:this={noteComponents[note]}/>
		{/each}
	</div>
	

</main>

<style>

	/* background-color: #2e2e2e; */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#noteSelector {
		margin-top: 2em;
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