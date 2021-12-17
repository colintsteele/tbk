import { getContext } from "svelte";
import { FrequencyMap } from "./frequencyMap";
import type Key from "./key";

//probably becomes more important as we switch keypresses around with music notes
export default class KeyHandler {
    private keys: object;

    constructor(keys: object){
        this.keys = keys;

        // let mapping = {
        //      'C'  : ['q', '1'],
        //      'C#' : ['w', '2'],
        //      'D'  : ['e', '3'],
        //      'Eb' : ['r', '4'],
        //      'E'  : ['t', '5'],
        //      'F'  : ['y', '6'],
        //      'F#' : ['u', '7'],
        //      'G'  : ['i', '8'],
        //      'G#' : ['o', '9'],
        //      'A'  : ['p', '0'],
        //      'Bb' : ['[', '-'],
        //      'B'  : [']', '=']
        // }

        // for (var note in mapping) {
        //     var num_row = mapping[note][1]
        //     var letter_row = mapping[note][0];
        //     this.keys[num_row] = new Key(note, 3);
        //     this.keys[letter_row] = new Key(note, 4);
        // }
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