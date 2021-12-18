
<svelte:options accessors={true}/>

<script module="module" lang='ts'>
import { assigningNote, currentNote } from "../stores";

    export let note: string

    const onClick = () => {
        currentNote.set(note)
        assigningNote.set(true);
    }
</script>

<div class='noteblock' on:click={onClick}>
    <span> {note} </span>
</div>

<style>
    div {
        display: inline-block;
        padding: 1em;
        margin: .2em;
        border-radius: .2em; 
        border-style: solid;
        border-color: black;
    }
</style>
