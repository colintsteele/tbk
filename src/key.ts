import { FrequencyMap } from "./frequencyMap";
import SoundMachine from "./soundMachine";
export default class Key {
    private soundMachine: SoundMachine
    public key: string //keyboard key -> qwerty
    public note: string
    public octave: number

    constructor(note: string, octave: number, key: string) {
        this.note = note;
        this.octave = octave;
        this.key = key;
    }

    play() {
        let soundMachine = new SoundMachine
        soundMachine.setFrequency(FrequencyMap[this.note][this.octave]);
        soundMachine.start(0)
    }
}

