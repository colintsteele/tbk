import { getContext } from "svelte";
import Key from "./key";
//probably becomes more important as we switch keypresses around with music notes
export default class KeyHandler {
    private keys: object;
    constructor(){
        this.keys = {};

        //not flats
        this.keys['a'] = new Key('F', 3),
        this.keys['s'] = new Key('G', 3)
        this.keys['d'] = new Key('A', 3),
        this.keys['f'] = new Key('B', 3),

        //flats
        this.keys['w'] = new Key('F#', 3),
        this.keys['e'] = new Key('G#', 3),
        this.keys['r'] = new Key('Bb', 3)
    }

    handle(keypress: string) {
        let key = this.keys[keypress]
        if (key !== undefined) {
            key.play();
        }
    }
}