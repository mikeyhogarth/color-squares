import { writable } from 'svelte/store';

function createPixels() {

	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		addColor: (x, y, color, border) => update(n => ({
          ...n,
          [`${x},${y}`]: {color, border}
      }
    )),
    clear: () => set({})
	};
}

export const pixels = createPixels();
export const red = "#D21404"
export const currentBorder = writable('white')
export const currentColor = writable(red)
export const maxX = writable(10)
export const maxY = writable(10)
