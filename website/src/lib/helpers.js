import Lenis from '@studio-freight/lenis';
import {get} from 'svelte/store'
import { lenis } from "./store"

export const scrollToPos = (pos) => {
    get(lenis).destroy()

    document.documentElement.scrollTop = pos

    lenis.set(new Lenis({
        lerp: 0.1,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: 3
    }));
}

export const scrollToElem = (id) => {
    get(lenis).destroy()

    if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView()
    } else {
        window.location.href = `${window.location.origin}/#${id}`
    }

    lenis.set(new Lenis({
        lerp: 0.1,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: 3
    }));
}

export const killLenis = () => {
    if (get(lenis)) {
        get(lenis).destroy()
    }
}

export const newLenis = (lerp, multiplier) => {
    lenis.set(new Lenis({
        lerp: lerp,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: multiplier
    }));
}

export const stopLenis = () => {
    if (get(lenis)) {
        get(lenis).stop();
    }
}

export const resumeLenis = () => {
    if (get(lenis)) {
        get(lenis).start();
    }
}