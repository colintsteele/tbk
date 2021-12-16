import { getContext } from "svelte";
import Key from "./key";
//probably becomes more important as we switch keypresses around with music notes
export default class KeyHandler {
    private keys: object;
    constructor(){
        this.keys = {};

        this.keys['a'] = new Key('C3'),
        this.keys['s'] = new Key('G3')
    }

    handle(keypress: string) {
        let key = this.keys[keypress]
        if (key !== undefined) {
            key.play();
        }
    }
}