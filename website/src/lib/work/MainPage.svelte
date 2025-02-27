<script>
    import { killLenis, newLenis } from "../helpers"
    import Menu from "../Menu.svelte";
    import Cursor from "../Cursor.svelte";
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte"
    import { workData } from "../workData"
    import {activeSection} from "../store"
    import { router } from "tinro"

    activeSection.set("");

    export let workId
    let workIndex = workData.findIndex(work => work.urlSafe === workId)

    let isHovered = false
    let scrollPos = 0

    window.onscroll = () => {
        scrollPos = document.documentElement.scrollTop
    }

    killLenis()
    newLenis(0.05, 1)

    router.subscribe( _ => {window.scrollTo(0, 0);})
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@1,700&display=swap" rel="stylesheet">
    <title>Work – {workData[workIndex].title}</title>
</svelte:head>
<Cursor/>
<Menu/>
<div class="main-work-page">
    <a href="/?section={workData[workIndex].urlSafe}"
        on:click={() => {document.querySelector('body')?.classList.remove("stop-scrolling")}}
        data-cooltransition>
    <div class="back {isHovered ? 'hover' : ''}" on:mouseenter={() => {isHovered = true}} on:mouseleave={() => {isHovered = false}}>
        <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </div><div class="back-txt"><p>Works</p></div>
    </div>
    </a>
    <div class="main-header">
        <video autoplay muted loop playsinline class="{scrollPos > 50 ? 'shrunk' : ''}"
            style="background-image: url('{workData[workIndex].fallback}');">
            <source src="{workData[workIndex].thumbnail}" type="video/mp4" />
        </video>
        <div class="main-title {scrollPos > 50 ? 'sticked' : ''}">
            <h1 name={workData[workIndex].title}>
                {workData[workIndex].title}
            </h1>
        </div>
    </div>
    <div class="main-content">
        <slot />
    </div>
</div>
<style>
    .main-work-page {
        padding-bottom: 75px;
    }
    .main-content {
        width: 100%;
        max-width: 1000px;
        margin: auto;
    }
    .main-header video {
        width: 90vw;
        max-width: 1100px;
        height: auto;
        filter: brightness(84%);
        border: solid 1px var(--main-brand-color);
        z-index: 10 !important;
        margin-top: 140px;
        transition: .8s;
        border-radius: var(--main-border-radius);
    }
    .main-header video.shrunk {
        filter: none;
    }
    .main-title h1:hover{
        transform: scale(1.03);
    }
    .main-header video:hover {
        transform: scale(1.03);
    }
    .main-title h1 {
        color: var(--main-brand-color);
        font-family: 'Bebas Neue', sans-serif;
        font-size: 130px;
        font-weight: 600;
        text-shadow: rgba(0,0,0,0.1) 0 0 20px;
        z-index: 12;
        margin:0;
        width: 800px;
        margin: auto;
        opacity: 0.94;
        transition: .6s;
    }
    .main-title {
        text-align: center;
        position: fixed;
        top: 60px;
        left:0;
        width: 100%;
        transition: .6s;
        z-index: 12;
    }
    .main-title.sticked {
        position: fixed;
        top: 20px;
        left:0;
    }
    .main-title.sticked h1 {
        font-size: 38px;
        width: 234px;
    }
    .main-header {
        text-align: center;
    }

    .back p {
        color: rgba(255,255,255,0.8);
        font-size: 14px;
    }
    :global(h6) {
        color: rgba(255,255,255,0.8);
    }
    .back div {
        display: inline-block;
    }
    .arrow {
        width: 50px;
        height: 50px;
        background-color: var(--main-brand-color);
        opacity: 0.8;
        color: black;
        font-size: 34px;
        margin: 0;
        transition: .2s;
        position: relative;
    }
    .arrow svg {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .back-txt {
        width: 75px;
        height: 50px;
        margin: 0;
        float: right;
        text-align: center;
    }
    .back {
        height: 50px;
        width: 125px;
        border: solid 1px var(--main-brand-color);
        backdrop-filter: blur(16px);
        background-color: rgba(5,5,46,.5);
        position: fixed;
        top: 20px;
        left: 20px;
        transition: .2s;
        cursor: pointer;
        z-index: 13;
        border-radius: var(--main-border-radius);
    }
    .hover .arrow {
        background-color: white;
    }
    .back.hover {
        border: solid 1px rgba(255,255,255,0.8);
    }
    .back:hover {
        transform: scale(1.05);
    }
    @media (max-width: 1000px) {
        .main-title h1 {
            font-size: 60px;
            width: 80vw;
        }
        .main-header video {
            margin-top: 95px;
        }
        .main-title.sticked {
            position: fixed;
            left: 0;
            top: 10px;
        }
        .main-title.sticked h1 {
            font-size: 38px;
            width: 51vw;
        }
        .main-title {
            position: fixed;
            top: 70px;
        }
        .main-work-page {
            padding-bottom: 0px;
        }
    }
    @media (max-width: 500px) {
        .back {
            position: fixed;
            top: 0;
            left:0;
            width: 55px;
            height: 55px;
        }
        .back-txt {
            display: none !important;
        }
        .arrow {
            width: 55px;
            height: 55px;
            opacity: 1;
        }
        .arrow span {
            position: relative;
            top: 10px;
            left: 10px;
        }
        :global(.arrow-down) {
            display: none !important;
        }
    }
</style>