<svelte:options accessors={true}/>

<script module="module" lang="ts">
import { get } from "svelte/store";

import type Key from "../key"
import { currentNote, assigningNote } from "../stores";

    let keyDown: boolean = false
    let assignedKey: string = null;

    export let key: Key
    
    export function pressKey() {
        let shouldAssign = get(assigningNote);
        if (shouldAssign == true) {
            key.note = assignedKey; 
            assigningNote.set(false)
        } else {
            key.play() 
            keyDown = true
            setTimeout(keyUp, 100)
        }
    }

    const onClick = () => {
        pressKey()
    }

    const keyUp = () => {
        keyDown = false
    }

    currentNote.subscribe(value => {
        assignedKey = value
    })
</script>

<div class='natural' class:pressed="{keyDown === true}" on:click={onClick}>
    <span> {key.note} </span>     
    <!-- <span> {key.octave} </span> -->
    <span> {key.key} </span>
</div>

<style>
    span {
        display: block;
        font-size: small;
    }

    .natural {
        height: 3em;
        width: 2em;
        display: inline-block;
        margin: .5px;
        border-style: solid;
        border-color: #8b8b84;
        border-radius: .2em;
        border-bottom-width: .5em;
        border-top: 1em;
        background-color: #ebeadb;
    }

    .pressed { 
        border-bottom-width: 0.2em;
        height: 3.4em;
    }
</style>