import App from './App.svelte';
import Key from './key';
import KeyHandler from './keyHandler';
import SoundMachine from './soundMachine';
let context = new AudioContext;
let soundMachine = new SoundMachine(context)
let keyMap = {
	'C': ['q', '1'],
	'C#': ['w', '2'],
	'D': ['e', '3'],
	'Eb': ['r', '4'],
	'E': ['t', '5'],
	'F': ['y', '6'],
	'F#': ['u', '7'],
	'G': ['i', '8'],
	'G#': ['o', '9'],
	'A': ['p', '0'],
	'Bb': ['[', '-'],
	'B': [']', '=']
}
let keys: Array<Key> = [];

for (var key in keyMap) {
	var num_row = keyMap[key][1]
	var letter_row = keyMap[key][0];

	keys.push(new Key(soundMachine, key, 3, num_row))
}

let keyHandler = new KeyHandler(keys);

const app = new App({
	target: document.body,
	props: {
		keyHandler: keyHandler,
		keys: Object.entries(keys).slice(0, 7)
	}
});

export default app;