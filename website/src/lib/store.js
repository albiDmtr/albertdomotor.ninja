import { get, writable } from 'svelte/store';
import Lenis from '@studio-freight/lenis';

export const activeSection = writable("");

let activeSections = []
export const sectionEnter = (section) => { 
    activeSections.push(section)
    activeSection.set(activeSections[activeSections.length - 1])
}
export const sectionLeave = (section) => {
    let index = activeSections.indexOf(section);
    if (index !== -1) {
        activeSections.splice(index, 1);
    }
    activeSection.set(activeSections[activeSections.length - 1])
}

export const lenis =  writable(null)

function raf(time) {
    get(lenis) ? get(lenis).raf(time) : ''
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)