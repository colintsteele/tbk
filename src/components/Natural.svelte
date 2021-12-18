<script module="module" lang="ts">
import type Key from "../key"
    let keyDown = false

    export let key: Key
    export function pressKey(kkey) {
        if(kkey == 'click' || kkey.key == key.key){
            key.play() 
            keyDown = true
            setTimeout(keyUp, 100)
        }
    }

    const onClick = () => {
        pressKey('click')
    }

    const keyUp = () => {
        keyDown = false
    }
</script>

<div class='natural' class:pressed="{keyDown === true}" on:click={onClick}>
    <span> {key.note} </span>     
    <span> {key.octave} </span>
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