<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<script>
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
</script>
<Cursor/>
<Menu/>
<div class="main-work-page">
    <a href="{window.location.origin}/#work">
    <div class="back {isHovered ? 'hover' : ''}" on:mouseenter={() => {isHovered = true}} on:mouseleave={() => {isHovered = false}}>
        <div class="arrow"><span><ArrowLeft/></span></div><div class="back-txt"><p>Works</p></div>
    </div>
    </a>
    <div class="main-header">
        <video autoplay muted loop playsinline class="{scrollPos > 40 ? 'shrunk' : ''}">
            <source src="{workData[workIndex].thumbnail}" type="video/mp4" />
        </video>
        <div class="main-title {scrollPos > 40 ? 'sticked' : ''}">
            <h1>{workData[workIndex].title}</h1>
        </div>
    </div>
    <div class="main-content">
        <slot />
    </div>
</div>

<style>
    .main-content {
        width: 100%;
        max-width: 1000px;
        margin: auto;
    }
    .main-header video {
        width: 90vw;
        max-width: 1100px;
        height: auto;
        filter: brightness(75%);
        border: solid 1px var(--main-brand-color);
        z-index: 10;
        margin-top: 140px;
        transition: .6s;
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
        font-size: 120px;
        color: transparent;
        -webkit-text-stroke: 4px var(--main-brand-color);
        font-weight: 850;
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
    }
    .main-title.sticked {
        position: fixed;
        top: 16px;
        left:0;
    }
    .main-title.sticked h1 {
        color: var(--main-brand-color);
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
        position: fixed;
        top: 20px;
        left: 20px;
        transition: .2s;
        cursor: pointer;
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