import { set_input_type } from "svelte/internal";

export default class SoundMachine {
  private frequency: number;

  constructor() {
  }

  setFrequency(frequency: number) {
    this.frequency = frequency;
  }

  start(when: number) {
    let context = new AudioContext
    let oscillator = context.createOscillator();
    let gain = context.createGain();

    oscillator.frequency.value = this.frequency;
    oscillator.connect(gain);
    oscillator.type = "triangle";

    gain.connect(context.destination);

    oscillator.start(when);

    gain.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + 1
    );
  }

}
