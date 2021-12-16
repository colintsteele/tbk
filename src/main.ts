import App from './App.svelte';
import Key from './key';

let aKey = new Key('C3');

let keys = [];
keys.push(aKey);

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		keys: keys
	}
});

export default app;