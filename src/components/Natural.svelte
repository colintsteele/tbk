<script lang="ts">
import type Key from "../key";
    export let key: Key;

    const onClick = () => {
        key.play()
    }
</script>

<div class='natural' on:click={onClick}>
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