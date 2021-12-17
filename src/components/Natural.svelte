<script lang="ts">
    export let note;
</script>

<div class='natural'> {note} </div>

<style>
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