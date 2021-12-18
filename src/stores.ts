import { writable } from 'svelte/store'

export const currentNote = writable(null)
export const currentOctave = writable(3)
export const assigningNote = writable(false)
export const playingKey = writable(null)