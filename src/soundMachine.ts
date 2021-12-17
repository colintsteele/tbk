import { set_input_type } from "svelte/internal"

export default class SoundMachine {
    private context: AudioContext
    private frequency: number 

    constructor(context: AudioContext) {
        this.context = context;
    }

    setFrequency(frequency: number) {
        this.frequency = frequency
    }

    start(when: number) {
        var osci = this.context.createOscillator();
        var gain = this.context.createGain();

        osci.frequency.value = this.frequency
        osci.connect(gain);
        osci.type = "sine"

        gain.connect(this.context.destination);

        osci.start(when);
        gain.gain.exponentialRampToValueAtTime(
            0.00001, this.context.currentTime + 1
        )
    }
}