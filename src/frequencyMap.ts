import { object_without_properties } from "svelte/internal";

export const FrequencyMap = {
  C: [16.35, 32.7, 65.41, 130.8, 261.6, 523.3, 1047.0, 2093.0, 4186.0],
  "C#": [17.32, 34.65, 69.3, 138.6, 277.2, 554.4, 1109, 2217, 4435],
  D: [18.35, 36.71, 73.42, 146.8, 293.7, 587.3, 1175.0, 2349.0, 4699.0],
  Eb: [19.45, 38.89, 77.78, 155.6, 311.1, 622.3, 1245.0, 2489.0, 4978.0],
  E: [20.6, 41.2, 82.41, 164.8, 329.6, 659.3, 1319.0, 2637.0, 5274.0],
  F: [21.83, 43.65, 87.31, 174.6, 349.2, 698.5, 1397.0, 2794.0, 5588.0],
  "F#": [23.12, 46.25, 92.5, 185.0, 370.0, 740.0, 1480.0, 2960.0, 5920.0],
  G: [24.5, 49.0, 98.0, 196.0, 392.0, 784.0, 1568.0, 3136.0, 6272.0],
  "G#": [25.96, 51.91, 103.8, 207.7, 415.3, 830.6, 1661.0, 3322.0, 6645.0],
  A: [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0, 7040.0],
  Bb: [29.14, 58.27, 116.5, 233.1, 466.2, 932.3, 1865.0, 3729.0, 7459.0],
  B: [30.87, 61.74, 123.5, 246.9, 493.9, 987.8, 1976.0, 3951.0, 7902.0],
};

export const scales = () => {
  var notes = [];
  Object.keys(FrequencyMap).forEach((note) =>{
    notes.push(majorScale(note, 3));
  });

  return notes;
}


//E, F♯, G♯, A, B, C♯, and D♯. 
export const majorScale = (root, octave) => {
  var steps = [2, 2, 1, 2, 2, 2, 1];
  var notes = [...Object.keys(FrequencyMap), ...Object.keys(FrequencyMap)];
  var rootIndex = notes.indexOf(root);
  var iterator = rootIndex;
  var scale = [root + `${octave}`];

  steps.forEach((step) => {
    iterator += step;
    let currentOctave = (iterator > 8 ? octave + 1 : octave); //8 is the index where we go from G# to A - see above/starts at C
    let note = notes[iterator]
    scale.push(`${note}${currentOctave}`);
  });

  console.log(scale);
  return scale;
};
