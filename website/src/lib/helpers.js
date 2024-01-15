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

// easterEgg code
function _0x679d(){const _0x4a54ff=['bW9yZSBpbmZv','531086bHhzbr','345600YoQzeY','12sHviMQ','2861575xUOeyH','keydown','slice','1489687UApTFl','408990PjpspU','131509vBBAMD','innerHTML','6sdEJcz','121ToXLTL','15RrWkMN','addEventListener','9960039cbgUBf'];_0x679d=function(){return _0x4a54ff;};return _0x679d();}(function(_0x30241a,_0x25b448){const _0x395856=_0x50f9,_0x133d96=_0x30241a();while(!![]){try{const _0x18c83a=-parseInt(_0x395856(0x132))/0x1+parseInt(_0x395856(0x13c))/0x2*(parseInt(_0x395856(0x138))/0x3)+-parseInt(_0x395856(0x13e))/0x4*(-parseInt(_0x395856(0x13f))/0x5)+-parseInt(_0x395856(0x136))/0x6*(-parseInt(_0x395856(0x134))/0x7)+-parseInt(_0x395856(0x13d))/0x8+-parseInt(_0x395856(0x13a))/0x9+parseInt(_0x395856(0x133))/0xa*(parseInt(_0x395856(0x137))/0xb);if(_0x18c83a===_0x25b448)break;else _0x133d96['push'](_0x133d96['shift']());}catch(_0x304bd8){_0x133d96['push'](_0x133d96['shift']());}}}(_0x679d,0xd5532));function _0x50f9(_0x46c755,_0x50b80e){const _0x679d39=_0x679d();return _0x50f9=function(_0x50f9ad,_0x69f449){_0x50f9ad=_0x50f9ad-0x132;let _0xf6dbf6=_0x679d39[_0x50f9ad];return _0xf6dbf6;},_0x50f9(_0x46c755,_0x50b80e);}export const easterEgg=(_0xc0f083,_0x5bec42)=>{const _0x5b18a0=_0x50f9,_0x557edb=_0x5b18a0(0x13b),_0x9f90be=atob(_0x557edb);let _0xac01c7='';_0xc0f083[_0x5b18a0(0x139)](_0x5b18a0(0x140),_0x42f9b5=>{const _0x172b63=_0x5b18a0;_0xac01c7+=_0x42f9b5['key'],_0xac01c7[_0x172b63(0x141)](-_0x557edb['length'])===_0x9f90be&&(_0x5bec42[_0x172b63(0x135)]+='</br>Btw\x20this\x20is\x20my\x20girl:</br><img\x20width=\x22200px\x22\x20src=\x22'+atob('aHR0cHM6Ly91LmN1YmV1cGxvYWQuY29tL2FzZGdqa2x1ZmRzYS9JTUcyNDAzLmpwZw==')+'\x22/>');});};