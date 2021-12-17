import { getContext } from "svelte";
import { FrequencyMap } from "./frequencyMap";
export default class Key {
    private context = new AudioContext;
    public key: string; //keyboard key -> qwerty
    public note: string;
    public octave: number;

    constructor(note: string, octave: number, key: string) {
        this.note = note;
        this.octave = octave;
        this.key = key;
    }

    play() {
        var osci = this.context.createOscillator();
        var gain = this.context.createGain();

        osci.frequency.value = FrequencyMap[this.note][this.octave]
        osci.connect(gain);
        osci.type = "sine"

        gain.connect(this.context.destination);

        osci.start(0);
        gain.gain.exponentialRampToValueAtTime(
            0.00001, this.context.currentTime + 1
        )
        console.log(this.note);
        return this.note;
    }
}

