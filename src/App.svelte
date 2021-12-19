<script lang="ts">
  //components
  import Natural from "./components/Natural.svelte";
  import Note from "./components/Note.svelte";
  import MusicInfo from "./components/MusicInfo.svelte";
  import type Key from "./key";
  import { currentOctave, playingKey } from "./stores";
  import { majorScale } from "./frequencyMap";

  export let keys: Array<Key>;
  let notes = keys.map((key) => key.note);
  let selectedOctave: number = 3;

  function handleKeydown(e: KeyboardEvent) {
    playingKey.set(null)
    playingKey.set(e.key);
  }

  function setOctave() {
    currentOctave.set(selectedOctave);
  }

  var randomNote = notes[Math.floor(Math.random()*notes.length)];
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <p>🎶🎶🎶</p>
  <div id="piano">
    {#each keys as key}
      <Natural {key} />
    {/each}
  </div>

  <div id="noteSelector">
    <select bind:value={selectedOctave} on:change={setOctave}>
      {#each [...Array(8).keys()] as octave}
        <option value={octave}>
          {octave}
        </option>
      {/each}
    </select>

    {#each notes as note}
      <Note {note} highlighted={note == randomNote} />
    {/each}

    <div>
      <MusicInfo scale={majorScale(randomNote, 3)}/>
    </div>
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
