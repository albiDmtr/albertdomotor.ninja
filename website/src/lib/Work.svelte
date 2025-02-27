<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
import viewport from './useViewportAction'
import {sectionEnter, sectionLeave} from "./store"
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"
import { workData } from "./workData"
import { scrollToElem } from "./helpers"

let hoveredIcon = ""
let workSidebar
let workElem
let stickyElemEnterPos
let screenHeight = window.innerHeight
let effectStartPos
$: effectStartPos = stickyElemEnterPos + screenHeight
let scrollLength
let workWrapper
$: {if (workWrapper && workElem) {
    scrollLength = workWrapper.offsetHeight - workElem.offsetHeight
} }
let stepSize
$: {scrollLength ? stepSize = (scrollLength / workData.length) : ""}

let workNo = 0

let moreHover = false

// scrolling to the correct section
const urlParams = new URLSearchParams(window.location.search)
const section = urlParams.get('section')
if (section) {
    setTimeout(() => scrollToElem(section), 1)
}

// effectActive csak odaplaccsanaskor valtozzon
let bgActive = false

const observer = new IntersectionObserver(
    ([e]) => {if (e.intersectionRatio == 1) {bgActive = true} else {bgActive = false}}, {
  threshold: [1],
});

$: if (workElem) {observer.observe(workElem)} 

</script>
<div class="work-sidebar unactive" bind:this={workSidebar}>
    <div class="works-txt"><p>Works</p></div>
    {#each workData as work, index}
        <div class="work-item {hoveredIcon == work.urlSafe ? "hover" : ""} {workNo == index ? 'active-item' : ''}">
            <div class="wrapper"
                on:click={() => scrollToElem(work.urlSafe)} 
                on:mouseenter={() => hoveredIcon = work.urlSafe}
                on:mouseleave={() => hoveredIcon = ""}><div class="work-icon {work.urlSafe}" style="background-image: url({work.icon});"></div></div>
            <div class="txt"><p>{work.title}</p></div>
        </div>
    {/each}
</div>
<div class="work-wrapper" bind:this={workWrapper} >
    {#key stepSize}
    {#each workData as work}
        <div class="pos-elem"
            id="{work.urlSafe}"
            style="position: absolute; top: {(stepSize/2)+(work.index*stepSize)}px;"
            use:viewport
            on:enterViewport={() => {
                workNo = work.index;
            }}>
        </div>
    {/each}
    {/key}
    <div class="work-section-main" bind:this={workElem} id="work"
        use:viewport
        on:enterViewport={() => {
            workSidebar.classList.add("active");
            workSidebar.classList.remove("unactive");
            workElem.classList.add("shown");
            workElem.classList.remove("notshown");
            sectionEnter("work");
            }}
		on:exitViewport={() => {
            workSidebar.classList.remove("active");
            workSidebar.classList.add("unactive");
            workElem.classList.add("notshown");
            workElem.classList.remove("shown");
            sectionLeave("work");
        }}>
        <div class="inner fading">
            <div class="main-title">
            <h2 class="above-txt">Works:</h2>
            <h2 class="below-txt">{workData[workNo] ? workData[workNo].title : ""}</h2>
            </div>
            <div class="main-desc">
                {#key workNo}
                    <video class="main-work-thumbnail animIn{workData[workNo] ? workNo%2 : ''}"
                    style="background-image: url('{workData[workNo] ? workData[workNo].fallback : ''}');"
                    autoplay muted loop playsinline>
                        <source src="{workData[workNo] ? workData[workNo].thumbnail : ''}" type="video/mp4" />
                    </video>
                {/key}         
                <div class="main-work-desc">
                    <p>{workData[workNo] ? workData[workNo].description : ""}</p>
                        <div class="button-cont">
                            <a href="{workData[workNo] ? `/work/${workData[workNo].urlSafe}` : ""}"
                            data-cooltransition>
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="more {moreHover ? 'hover' : ''}"
                                on:mouseenter={() => moreHover = true}
                                on:mouseleave={() => moreHover = false}>
                                <p>Read More</p>
                                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>                                  
                            </div>
                            </a>
                            <div class="work-time">{workData[workNo] ? workData[workNo].time : ""}</div>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
{#key [workNo, bgActive]}
    <div class="bg-img fadeIn{workData[workNo] ? workNo%2 : ''}">
        <div class="shadow"></div>
        <video
        style="background-image: url('{bgActive && workData[workNo] ? workData[workNo].fallback : ''}');"
        autoplay muted loop playsinline>
            <source src="{bgActive && workData[workNo] ? workData[workNo].thumbnail : ''}" type="video/mp4" />
        </video>
    </div>
{/key}
<div class="preload-cont">
{#each workData as work}
    <video autoplay muted loop playsinline class="thumbnailImg">
        <source src={work.thumbnail} type="video/mp4" />
    </video>
    <img class="thumbnailImg" src={work.fallback} alt="preload img" />
{/each}
</div>
<style>
    .pos-elem {
        z-index: -1;
        width: 100px;
        height: 100px;
    }
    .bg-img video {
        min-width: 100vw;
        min-height: 100vh;
        z-index: -2;
    }
    .thumbnailImg, .actionImg {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .fadeIn0 {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-iteration-count: 1;
    }
    .fadeIn1 {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-iteration-count: 1;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    .animIn0 {
        animation-name: animIn;
        animation-duration: 0.8s;
        animation-delay: 0s;
        animation-iteration-count: 1;
    }
    .animIn1 {
        animation-name: animIn;
        animation-duration: 0.8s;
        animation-delay: 0s;
        animation-iteration-count: 1;
    }
    @keyframes animIn {
        0% {opacity: 0; transform: scale(0);}
        100% {opacity: 1; transform: scale(1);}
    }
    /* Work content */
    .AIC {
        background-image: url('../../assets/work_icons/aic.png');
    }
    .XSV {
        background-image: url('../../assets/work_icons/xsv.png');
    }
    .PJ {
        background-image: url('../../assets/work_icons/pj.png');
    }
    .Marvin {
        background-image: url('../../assets/work_icons/marvin.png');
    }
    .VT {
        background-image: url('../../assets/work_icons/vt.png');
    }
    .TT {
        background-image: url('../../assets/work_icons/tt.png');
    }

    /* work previews */
    .bg-img {
        position: fixed;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;        
        filter: brightness(15%) saturate(20%);
        transition: .5s;
        z-index: -1;
    }
    .bg-img .shadow {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left:0;
        box-shadow: inset 0 0 30vh 0 rgb(0,0,0);
    }
    .arrow {
        width: 18px;
        height: 18px;
        margin-left: 4px;
        color: black;
        position: relative;
        right: 0;
        transition: .3s;
    }
    .hover .arrow {
        position: relative;
        right: -4px;
    }
    .main-work-desc {
        transition: .2s;
        border: solid 1px var(--main-brand-color);
        backdrop-filter: blur(16px);
        background-color: rgba(5,5,46,.35);
        margin-top: -120px;
        margin-left: -20px;
        width: 650px;
        border-radius: var(--main-border-radius);
        box-shadow: var(--main-shadow);
    }
    .main-work-desc:hover {
        transform: scale(1.02);
    }
    .work-time {
        float: right;
        color: white;
        opacity: 0.8;
        text-align: right;
        font-family: 'Inter', sans-serif;
        width: 80%;
    }
    .button-cont {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 650px;
        height: fit-content;
        padding: 8px;
    }
    .worktime {
        float: right;
        width: 200px;
        margin: 0 !important;
        position: relative;
        bottom: -10px;
        right: -20px;
    }
    .action-button {
        height: 45px;
        width: 45px;
        background-color: var(--main-brand-color);
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: 50%;
        opacity: 0.8;
        overflow: hidden;
        transition: .2s;
    }
    .more {
        font-family: 'Inter', sans-serif;
        background: var(--main-brand-color);
        overflow: hidden;
        text-align: center;
        opacity: 0.8;
        font-weight: 400;
        transition: .3s;
        cursor: pointer;
        border-radius: var(--main-border-radius);
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        padding: 8px 12px;
        border: var(--dark-border);
        box-shadow: var(--main-shadow);
    }
    a {
        text-decoration: none;
    }
    .more:hover {
        background-color: white;
        opacity: 0.8;
    }
    .main-work-thumbnail {
        width: 800px;
        height: 450px;
        background-position: 50%;
        background-size: cover;
        filter: brightness(90%);
        box-shadow: var(--main-shadow);
        border-radius: var(--main-border-radius);
        transition: .2s;
    }
    .main-work-thumbnail:hover {
        transform: scale(1.02);
    }
    .main-desc p {
        margin: 20px;
    }
    .more p {
        color: black;
        white-space: nowrap;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    /* rest */
    .work-item {
        width: 250px;
        display: flex;
        flex-direction: row;
        height: 45px;
        margin: 18px 25px;
    }
    .txt {
        display: inline-block;
        width: 100px;
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: .3s;
    }
    .active-item .txt p {
        color:white;
    }
    .txt p {
        color:rgba(255,255,255,0);
        transition: .3s;
    }
    .work-item p {
        font-size: 12px; 
    }
    .works-txt {
        font-size: 12px;
        width: 45px;
        text-align: center;
        margin: 0 0 0 25px;
    }
    .active-item .wrapper .work-icon {
        filter: saturate(130%) brightness(110%);
    }
    .active-item .wrapper {
        transform: scale(1.1);
    }
    .work-icon {
        width: 45px;
        height: 45px;
        background-size: cover;
        filter:saturate(80%) brightness(80%);
        transition: .2s;
    }
    .work-icon:hover {
        filter: saturate(120%);
    }
    .wrapper:hover {
        transform: scale(1.1);
    }
    .wrapper {
        border: var(--dark-border);
        border-radius: var(--main-border-radius);
        width: 45px;
        height: 45px;
        transition: .2s;
        cursor: pointer;
        display: inline-block;
        margin: 0 15px 0 0;
        overflow: hidden;
        box-shadow: var(--main-shadow);
    }
    .work-sidebar {
        position: fixed;
        top:0;
        left:0;
        width: 240px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10;
    }

    .work-wrapper {
        position: relative;
        height: 800vh;
    }
    .work-section-main {
        height: 98vh;
        position: sticky;
        top: 1vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    .above-txt {
        line-height: 1.2;
        padding-bottom: 7px;
    }
    .below-txt {
        border-top: solid 1px var(--main-brand-color);
        line-height: 1.2;
        padding-top: 6px;
    }
    .inner {
        width: 1000px;
        margin-left: calc(50vw - 500px);
        z-index: 10;
        display: flex;
    }
    .main-title {
        width: 100px;
        padding: 20px;
        margin-top: 0;
        height: 100px;
        text-align: right;
    }
    .main-desc {
        width: 800px;
        margin: 20px;
    }
    h2 {
        color: rgba(255,255,255, 0.8);
        font-family: 'Inter', sans-serif;
        margin: 0;
        float: right;
    }
    p {
        color: rgba(255,255,255, 0.8);
        font-family: 'Inter', sans-serif;
        margin: 0;
    }
    /* rest */
    :global(.work-sidebar.active div) {
    animation: appear;
    opacity: 0;
    animation-duration: 1s;
    animation-delay: calc(var(--nth-child)*0.1s);
    animation-fill-mode: forwards;
    }
    :global(.work-sidebar.unactive div) {
        animation: disappear;
        animation-duration: 1s;
        animation-delay: calc(var(--nth-child)*0.1s);
        animation-fill-mode: forwards;
    }
    @keyframes appear {
        0% {opacity: 0; visibility: visible;}
        100% {opacity: 1; visibility: visible;}
    }
    @keyframes disappear {
        0% {opacity: 1; visibility: visible;}
        99% {opacity: 0; visibility: visible;}
        100% {opacity: 0; visibility: hidden;}
    }
    @media (max-width: 1200px) {
        .bg-img {
            display: none;
        }
        .works-txt {
            display: none;
        }
        .work-sidebar {
            width: 100vw;
            height: 45px;
            flex-direction: row;
            position: fixed;
            left: 0;
            top: initial;
            bottom: 12vh;
        }
        .work-item .txt {
            display: none;
        }
        .work-item {
            width: 45px;
            margin: 10px;
        }
        .inner {
            display: block;
            width: 100%;
            margin-left: auto;
            position: relative;
            top: -6vh;
        }
        .main-desc {
            margin: 0;
            width: auto;
        }
        .main-work-thumbnail {
            width: 95vw;
            height: calc(95vw / (16/9));
            margin-left: calc(2.5vw - 5px );
        }
        .main-title {
            width: 95vw;
            height: 85px;
            padding: 0;
            margin-left: calc(2.5vw - 5px );
        }
        .above-txt {
            text-align: left;
            display: block;
            width: 95vw;
            float: left;
        }
        .below-txt {
            display: block;
            float: left;
        }
        .main-work-desc {
            margin: 0;
            width: 95vw;
            margin-left: calc(2.5vw - 5px );
        }
        .work-time {
            display: none;
        }
    }
</style>