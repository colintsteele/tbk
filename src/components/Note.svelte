<svelte:options accessors={true} />

<script module="module" lang="ts">
  import { assigningNote, currentNote } from "../stores";

  export let highlighted: boolean = false;
  export let note: string;

  const onClick = () => {
    currentNote.set(note);
    assigningNote.set(true);
  };

  const stopAssignment = () => {
    assigningNote.set(false);
  };
</script>

<div
  class="noteblock"
  class:highlighted
  on:click={onClick}
  on:mouseover={onClick}
  on:mouseout={stopAssignment}
>
  <span> {note} </span>
</div>

<style>
  .highlighted {
    background-color: #c0ffee;
  }
  div {
    display: inline-block;
    padding: 1em;
    margin: 0.2em;
    border-radius: 0.2em;
    border-style: solid;
    border-color: black;
  }
</style>
