import { writable } from 'svelte/store';

export const currentNote = writable(null);
export const assigningNote = writable(false);