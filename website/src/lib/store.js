import { get, writable } from 'svelte/store';
import Lenis from '@studio-freight/lenis';

export const activeSection = writable("");

export const lenis =  writable(new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: "vertical",
    wheelMultiplier: 3
}))

function raf(time) {
    get(lenis).raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)