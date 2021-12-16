import App from './App.svelte';
import Key from './key';
import KeyHandler from './keyHandler';

let keyHandler = new KeyHandler;

let aKey = new Key('C3');
let gKey = new Key('G3');

let keys = {
	'C3': aKey,
	'G3': gKey
};

const app = new App({
	target: document.body,
	props: {
		keys: keys,
		keyHandler: keyHandler
	}
});

export default app;