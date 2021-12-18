import { getContext } from "svelte";
import { FrequencyMap } from "./frequencyMap";
import type Key from "./key";

//probably becomes more important as we switch keypresses around with music notes
export default class KeyHandler {
    private keys: object;

    constructor(keys: object){
        this.keys = keys;
    }

    handle(keypress: string) {
        let key = this.keys[keypress]
        if (key !== undefined) {
            var note = key.play();

            return {
               'key': keypress,
               'note': note
             }
        }
    }
}