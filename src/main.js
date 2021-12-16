import App from './App.svelte';
import Key from './key.ts';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;