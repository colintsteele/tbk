import { FrequencyMap } from "./frequencyMap";
import type SoundMachine from "./soundMachine";
export default class Key {
    private soundMachine: SoundMachine
    public key: string //keyboard key -> qwerty
    public note: string
    public octave: number

    constructor(soundMachine: SoundMachine, note: string, octave: number, key: string) {
        this.soundMachine = soundMachine;
        this.note = note;
        this.octave = octave;
        this.key = key;
    }

    play() {
        this.soundMachine.setFrequency(FrequencyMap[this.note][this.octave]);
        this.soundMachine.start(0)
    }

    stop() {
        this.soundMachine.stop(0)
    }
}

