<script>
    import { killLenis, newLenis } from "../helpers"
    import Menu from "../Menu.svelte";
    import Cursor from "../Cursor.svelte";
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte"
    import { workData } from "../workData"

    export let workIndex
    let isHovered = false
    let scrollPos = 0

    window.onscroll = () => {
        scrollPos = document.documentElement.scrollTop
    }

    killLenis()
    newLenis(0.05, 1)
</script>
<Cursor/>
<Menu/>
<div class="main-work-page">
    <a href="/#">
    <div class="back {isHovered ? 'hover' : ''}" on:mouseenter={() => {isHovered = true}} on:mouseleave={() => {isHovered = false}}>
        <div class="arrow"><span><ArrowLeft/></span></div><div class="back-txt"><p>Works</p></div>
    </div>
    </a>
    <div class="main-header">
        <video autoplay muted loop playsinline class="{scrollPos > 50 ? 'shrunk' : ''}">
            <source src="{workData[workIndex].thumbnail}" type="video/mp4" />
        </video>
        <div class="main-title {scrollPos > 50 ? 'sticked' : ''}">
            <h1>
                {workData[workIndex].title}
            </h1>
        </div>
    </div>
    <div class="main-content">
        <slot />
    </div>
</div>
<div class="opening-bg {scrollPos > 50 ? 'inactive' : ''}"></div>

<style>
    h1 {
        background: var(--main-brand-color-08);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
    .main-work-page {
        padding-bottom: 75px;
    }
    .opening-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background: linear-gradient(0deg, var(--main-brand-color) 13%, rgba(0,0,0,0) 95%);
        opacity: 0.3;
        transition: .6s;
    }
    .opening-bg.inactive {
        opacity: 0;
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
        z-index: 10;
        margin-top: 140px;
        transition: .8s;
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
        font-size: 110px;
        color: var(--main-brand-color);
        -webkit-font-smoothing: antialiased;
        paint-order: fill stroke;
        font-weight: 900;
        z-index: 12;
        margin:0;
        width: 800px;
        margin: auto;
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
        top: 16px;
        left:0;
    }
    .main-title.sticked h1 {
        -webkit-text-stroke: 0 var(--main-brand-color);
        font-size: 36px;
        width: 240px;
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
    }
    .arrow span {
        position: relative;
        top: 7px;
        left: 7px;
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
            font-size: 45px;
            width: 80vw;
        }
        .main-header video {
            margin-top: 95px;
        }
        .main-title.sticked {
            position: fixed;
            left: 0;
            top: 12px;
        }
        .main-title.sticked h1 {
            font-size: 30px;
            width: 54vw;
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