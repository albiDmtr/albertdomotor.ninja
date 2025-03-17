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
        class="btn-back"
        on:click={() => {document.querySelector('body')?.classList.remove("stop-scrolling")}}
        data-cooltransition>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <span>Works</span>
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
        max-width: 900px;
        margin: 0 auto 64px auto;
    }
    .main-header video {
        width: 80vw;
        max-width: 1000px;
        height: auto;
        filter: brightness(84%);
        border: solid 1px var(--main-brand-color);
        z-index: 10 !important;
        margin-top: 110px;
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
        font-family: 'Geist Mono', monospace;
        text-transform: uppercase;
        line-height: 1;
        font-size: 36px;
        font-weight: 600;
        text-shadow: rgba(0,0,0,0.1) 0 0 20px;
        z-index: 12;
        margin:0;
        width: 600px;
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
        font-size: 26px;
        width: 433px;
    }
    .main-header {
        text-align: center;
    }

    :global(h6) {
        color: rgba(255,255,255,0.8);
    }

    .btn-back {
        color: var(--main-brand-color);
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        font-size: 14px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        width: fit-content;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        transition: .2s;
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--main-tr-color);
        z-index: 13;
        position: fixed;
        top: 32px;
        left: 32px;
    }
    .btn-back:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }
    
    .btn-back svg {
        width: 16px;
        height: 16px;
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
        .btn-back span {
            display: none;
        }
        .btn-back {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 40px;
            height: 40px;
            padding: 0;
            justify-content: center;
        }
        .btn-back svg {
            width: 28px;
            height: 28px;
        }
        
        :global(.arrow-down) {
            display: none !important;
        }
    }
</style>