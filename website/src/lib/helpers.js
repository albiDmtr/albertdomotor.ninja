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
function _0x5648(){const _0x464bd5=['6307175ScZQmV','3513222RqXJLZ','1085292TjMEmA','addEventListener','265684riZwAH','3566StjnSe','2539922yDRuhU','innerHTML','70CwdsCO','key','3553840GVVgFb','keydown','</br>Btw\x20this\x20is\x20my\x20girl:</br><img\x20width=\x22200px\x22\x20src=\x22https://u.cubeupload.com/asdgjklufdsa/IMG2403.jpg\x22/>','506jiWpCR','21Qqydqp'];_0x5648=function(){return _0x464bd5;};return _0x5648();}function _0x5e0a(_0x42a5e0,_0xb86865){const _0x5648d6=_0x5648();return _0x5e0a=function(_0x5e0adb,_0x2f4b9d){_0x5e0adb=_0x5e0adb-0xd1;let _0x43b5cc=_0x5648d6[_0x5e0adb];return _0x43b5cc;},_0x5e0a(_0x42a5e0,_0xb86865);}(function(_0x45f39e,_0x3d253f){const _0xe29a42=_0x5e0a,_0x46cc68=_0x45f39e();while(!![]){try{const _0x3eb1b5=-parseInt(_0xe29a42(0xdd))/0x1*(parseInt(_0xe29a42(0xd6))/0x2)+-parseInt(_0xe29a42(0xd7))/0x3*(parseInt(_0xe29a42(0xdc))/0x4)+-parseInt(_0xe29a42(0xd8))/0x5+-parseInt(_0xe29a42(0xda))/0x6+parseInt(_0xe29a42(0xde))/0x7+parseInt(_0xe29a42(0xd3))/0x8+parseInt(_0xe29a42(0xd9))/0x9*(parseInt(_0xe29a42(0xd1))/0xa);if(_0x3eb1b5===_0x3d253f)break;else _0x46cc68['push'](_0x46cc68['shift']());}catch(_0x1c1aff){_0x46cc68['push'](_0x46cc68['shift']());}}}(_0x5648,0xb2408));export const easterEgg=(_0x57fefa,_0x15ccd2)=>{const _0x46296b=_0x5e0a,_0x2300bc='more\x20info';let _0x1ebb63='';_0x57fefa[_0x46296b(0xdb)](_0x46296b(0xd4),_0x143c34=>{const _0x292435=_0x46296b;_0x1ebb63+=_0x143c34[_0x292435(0xd2)],_0x1ebb63['slice'](-_0x2300bc['length'])===_0x2300bc&&(_0x15ccd2[_0x292435(0xdf)]+=_0x292435(0xd5));});};
