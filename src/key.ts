import { getContext } from "svelte";

export default class Key {
    private context = new AudioContext;
    private started = false;
    private stopped = false;

    private keyMap = {
        "C3" : 130.8
    };
    public note: string;
    constructor(note: string) {
        this.note = note;
    }

    play() {
        var osci = this.context.createOscillator();
        var gain = this.context.createGain();
        osci.frequency.value = this.keyMap[this.note]
        osci.connect(gain);
        osci.type = "sine"
        gain.connect(this.context.destination);

        osci.start(0);
        gain.gain.exponentialRampToValueAtTime(
            0.00001, this.context.currentTime + 1
        )
        // if(this.started == true) {
        //     this.gain.gain.exponentialRampToValueAtTime(
        //         0.00001, this.context.currentTime + 0.04
        //     )
        //     this.stopped = true;
        //     this.started = false;
        // } else if(this.stopped == true) {
        //     this.gain.gain.exponentialRampToValueAtTime(
        //         1, this.context.currentTime + 0.04
        //     );
        //     this.stopped = false;
        //     this.started = true;
        // } else {
        //     this.osci.start(1);
        //     this.started = true;
        // }
    }

    stop(){
    }
}

