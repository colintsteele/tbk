<svelte:options accessors={true} />

<script module="module" lang="ts">
  import { get } from "svelte/store";

  import type Key from "../key";
  import {
    currentNote,
    assigningNote,
    currentOctave,
    playingKey,
    stoppingKey,
  } from "../stores";

  let keyDown: boolean = false;
  let assignedKey: string = null;

  export let key: Key;

  export function pressKey() {
    let shouldAssign = get(assigningNote);
    if (shouldAssign == true) {
      key.note = assignedKey;
      key.octave = get(currentOctave);
      assigningNote.set(false);
    } else {
      key.play();
      keyDown = true;
      setTimeout(keyUp, 100);
    }
  }

  const onClick = () => {
    pressKey();
  };

  const keyUp = () => {
    keyDown = false;
  };

  playingKey.subscribe((k) => {
    if (key.key == k) {
      pressKey();
    }
  });

  stoppingKey.subscribe((k) => {
    if (key.key == k) {
      key.stop();
    }
  });

  currentNote.subscribe((value) => {
    assignedKey = value;
  });
</script>

<div class="natural" class:pressed={keyDown === true} on:click={onClick}>
  <span> {key.note} {key.octave} </span>
  <span class="switch"> {key.key} </span>
</div>

<style>
  span {
    display: block;
    font-size: small;
  }

  .switch {
    padding: 0.1em;
    width: 1em;
    height: 1em;
    margin-top: 1em;
    margin-left: 1.3em;
    border-width: 0.1em;
    border-style: solid;
    border-radius: 0.2em;
    font-family: monospace;
  }
  .natural {
    height: 6em;
    width: 3em;
    display: inline-block;
    margin: 0.5px;
    border-style: solid;
    border-color: #8b8b84;
    border-radius: 0.2em;
    border-bottom-width: 0.5em;
    border-top: 1em;
    background-color: #ebeadb;
  }

  .pressed {
    border-bottom-width: 0.2em;
    height: 6.4em;
  }
</style>
