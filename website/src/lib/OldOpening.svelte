<script>
import ParallaxElem from "./ParallaxElem.svelte";
import viewport from './useViewportAction'
import {sectionEnter, sectionLeave} from "./store"
let mainElem

setTimeout(() => {
    mainElem.classList.add("opening-active")
    mainElem.classList.remove("opening-unactive")
}, 1200);

</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@1,700&display=swap" rel="stylesheet">
</svelte:head>
<div
    class="main-parallax-container opening-unactive"
    bind:this="{mainElem}">
    <ParallaxElem  front=1>
        <div class="main-parallax-text domotor fading parallax-elem">Dömötör</div>
    </ParallaxElem>
    <ParallaxElem front=-1>
        <div class="main-parallax-img fading parallax-elem"></div>
    </ParallaxElem>
    <ParallaxElem front=2>
        <div class="main-parallax-text albert fading parallax-elem">Albert</div>
    </ParallaxElem>
    <ParallaxElem  front=3>
        <div class="main-parallax-title fading parallax-elem">
            Software Engineer, Digital Systems and Design student at Aalto University
        </div>
    </ParallaxElem>
</div>
<div class="placeholder"
id="top"
use:viewport
on:enterViewport={() => {sectionEnter("");}}
on:exitViewport={() => {sectionLeave("");}}></div>
<style>
    /* parallax */
    .main-parallax-img {
        animation: float-img 20s linear 0s infinite;
    }
    .albert {
        animation: float-albert 20s linear 0s infinite;
    }
    .domotor {
        animation: float-domotor 20s linear 0s infinite;
    }
    .main-parallax-title {
        animation: float-txt 20s linear 0s infinite;
    }

    @keyframes float-txt {
        0% {transform: translate(0px, 20px);}
        12.5% {transform: translate(14px, 14px);}
        25% {transform: translate(20px, 0px);}
        37.5% {transform: translate(14px, -14px);}
        50% {transform: translate(0px, -20px);}
        62.5% {transform: translate(-14px, -14px);}
        75% {transform: translate(-20px, 0px);}
        87.5% {transform: translate(-14px, 14px);}
        100% {transform: translate(0px, 20px);}
    }
    @keyframes float-albert {
        0% {transform: translate(0px, 14px);}
        12.5% {transform: translate(9.3px, 9.3px);}
        25% {transform: translate(14px, 0px);}
        37.5% {transform: translate(9.3px, -9.3px);}
        50% {transform: translate(0px, -14px);}
        62.5% {transform: translate(-9.3px, -9.3px);}
        75% {transform: translate(-14px, 0px);}
        87.5% {transform: translate(-9.3px, 9.3px);}
        100% {transform: translate(0px, 14px);}
    }
    @keyframes float-domotor {
        0% {transform: translate(0px, 7px);}
        12.5% {transform: translate(4.7px, 4.7px);}
        25% {transform: translate(7px, 0px);}
        37.5% {transform: translate(4.7px, -4.7px);}
        50% {transform: translate(0px, -7px);}
        62.5% {transform: translate(-4.7px, -4.7px);}
        75% {transform: translate(-7px, 0px);}
        87.5% {transform: translate(-4.7px, 4.7px);}
        100% {transform: translate(0px, 7px);}
    }
    @keyframes float-img {
        0% {transform: translate(-0px, -7px);}
        12.5% {transform: translate(-4.7px, -4.7px);}
        25% {transform: translate(-7px, -0px);}
        37.5% {transform: translate(-4.7px, 4.7px);}
        50% {transform: translate(-0px, 7px);}
        62.5% {transform: translate(4.7px, 4.7px);}
        75% {transform: translate(7px, 0px);}
        87.5% {transform: translate(4.7px, -4.7px);}
        100% {transform: translate(0px, -7px);}
    }

    /* rest */
    .placeholder {
        width: 100vw;
        height: 100vh;
    }
    .main-parallax-title {
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-style: italic;
        font-size: 2.5vh;
        width: 40vh;
        text-align: center;
        color: rgb(255,255,255);
        position: absolute;
        padding-top: 60vh;
        padding-left: calc(50vw - 60vh);
        z-index: 4;
        text-shadow: 0 0 1.4vh rgba(0,0,0,0.2);
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
    }
    .main-parallax-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw !important;
        overflow: hidden;
        overflow-anchor: none;
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
        .main-parallax-img {
            width: 90vw;
            height: 90vw;
            position: absolute;
            top: calc(40vh - 45vw);
            left: 5vw;
            z-index: 2;
        }
        .albert {
            padding-top: calc(40vh - 55vw);
            font-size: 24vw;
            padding-left: 6vw;
            z-index: 2;
        }
        .domotor {
            padding-top: calc(40vh - 15vw);
            font-size: 14vw;
            padding-left: 55vw;
            -webkit-text-stroke: 0.5vh transparent;
            z-index: 2;
        }
        .main-parallax-title {
            font-size: 5.5vw;
            width: 86vw;
            position: absolute;
            padding-top: 66vh;
            padding-left: 7vw;
        }
    }
</style>