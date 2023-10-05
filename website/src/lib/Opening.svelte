<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap" rel="stylesheet">
<script>
import {parallaxElems, handleParallax} from "./Parallax"
import viewport from './useViewportAction'
import {activeSection} from "./store"

let mainElem

setTimeout(() => {
    mainElem.classList.add("opening-active")
    mainElem.classList.remove("opening-unactive")
}, 1200);

</script>
<div class="main-parallax-container opening-unactive" on:mousemove={handleParallax} bind:this="{mainElem}">
    <div class="main-parallax-img fading"  bind:this="{parallaxElems[0]}" data-parallax="-1"></div>
    <div class="main-parallax-text albert fading" bind:this="{parallaxElems[1]}" data-parallax="2">Albert</div>
    <div class="main-parallax-text domotor fading" bind:this="{parallaxElems[2]}" data-parallax="1">Dömötör</div>
    <div class="main-parallax-title fading" bind:this="{parallaxElems[3]}" data-parallax="4">
        Software Engineer, Digital Systems and Design student at Aalto University
    </div>
</div>
<div class="placeholder"
use:viewport
on:enterViewport={() => {activeSection.set("");}}></div>

<style>
    .placeholder {
        width: 100vw;
        height: 100vh;
    }
    .main-parallax-title {
        font-family: 'Merriweather';
        font-size: 2.5vh;
        width: 40vh;
        text-align: center;
        color: rgb(255,255,255);
        position: absolute;
        padding-top: 60vh;
        padding-left: calc(50vw - 60vh);
        z-index: 4;
        text-shadow: 0 0 1.4vh rgba(0,0,0,0.2);
        transition: 0.1s;
    }
    .domotor {
        padding-top: 40vh;
        padding-left: 52vw;
        z-index: 1;
        background: var(--main-brand-color);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-stroke: 0.7vh transparent;
        opacity: 0.6;
    }
    .albert {
        padding-top: 20vh;
        padding-left: calc(50vw - 60vh);
        z-index: 5;
        color: var(--main-brand-color);
        opacity: 0.6;
    }
    .main-parallax-text {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 18vh;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;

        transition: 0.1s;
    }
    .main-parallax-img {
        height: 80vh;
        width: 80vh;
        background-image: url("../../assets/me.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 60% 100%;
        position: absolute;
        top: 2.5vh;
        left: calc(50vw - 40vh);
        z-index: 3;
        transition: 0.1s;
    }
    .main-parallax-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 1;
    }
    :global(.opening-unactive) {
        transform: scale(0);
        transition: 2s;
    }
    :global(.opening-active) {
        transform: scale(1);
        transition: 1s;
    }
    @media (max-aspect-ratio: 1/1) {
        /*mobile*/
    }
</style>