import { get, writable } from 'svelte/store';
import Lenis from '@studio-freight/lenis';

export const activeSection = writable("");

export const lenis =  writable(null)

function raf(time) {
    get(lenis) ? get(lenis).raf(time) : ''
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)