import App from './App.svelte';
import KeyHandler from './keyHandler';

let keyHandler = new KeyHandler;

const app = new App({
	target: document.body,
	props: {
		keyHandler: keyHandler
	}
});

export default app;