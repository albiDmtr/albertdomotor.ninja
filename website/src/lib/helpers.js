import Lenis from '@studio-freight/lenis';
import {get} from 'svelte/store'
import { lenis } from "./store"

export const scrollToPos = (pos) => {
    get(lenis).destroy()

    document.documentElement.scrollTop = pos

    lenis.set(new Lenis({
        lerp: 0.05,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: 3
    }));
}

export const scrollToElem = (id) => {
    get(lenis).destroy()

    document.getElementById(id).scrollIntoView()

    lenis.set(new Lenis({
        lerp: 0.05,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: 3
    }));
}