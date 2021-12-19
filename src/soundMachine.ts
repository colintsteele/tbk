import { set_input_type } from "svelte/internal";

export default class SoundMachine {
  private context: AudioContext;
  private frequency: number;
  private oscillator: OscillatorNode;
  private gain: GainNode;

  constructor(context: AudioContext) {
    this.context = context;
  }

  setFrequency(frequency: number) {
    this.frequency = frequency;
  }

  start(when: number) {
    this.oscillator = this.context.createOscillator();
    this.gain = this.context.createGain();

    this.oscillator.frequency.value = this.frequency;
    this.oscillator.connect(this.gain);
    this.oscillator.type = "sine";

    this.gain.connect(this.context.destination);

    this.oscillator.start(when);
  }

  stop(when: number) {
    this.gain.gain.exponentialRampToValueAtTime(
      0.00001,
      this.context.currentTime + 1
    );
  }
}
