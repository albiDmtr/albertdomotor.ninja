<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
import CallMade from "svelte-material-icons/CallMade.svelte"
import viewport from './useViewportAction'
import {activeSection} from "./store"
let hoveredIcon = ""
let workSidebar
let workElem

</script>
<div class="work-sidebar unactive" bind:this={workSidebar}>
    <div class="works-txt"><p>Works</p></div>
    <div class="work-item {hoveredIcon == "AIC" ? "hover" : ""}">
        <div class="wrapper"
            on:mouseenter={() => hoveredIcon = "AIC"}
            on:mouseleave={() => hoveredIcon = ""}><div class="work-icon AIC"></div></div>
        <div class="txt"><p>AIContentfy</p></div>
    </div>
    <div class="work-item {hoveredIcon == "PJ" ? "hover" : ""}">
        <div class="wrapper"
        on:mouseenter={() => hoveredIcon = "PJ"}
        on:mouseleave={() => hoveredIcon = ""}><div class="work-icon PJ"></div></div>
        <div class="txt"><p>Programozd a jövőd!</p></div>
    </div>
    <div class="work-item {hoveredIcon == "Marvin" ? "hover" : ""}">
        <div class="wrapper"
            on:mouseenter={() => hoveredIcon = "Marvin"}
            on:mouseleave={() => hoveredIcon = ""}><div class="work-icon Marvin"></div></div>
        <div class="txt"><p>marvin.py</p></div>
    </div>
    <div class="work-item {hoveredIcon == "VT" ? "hover" : ""}">
        <div class="wrapper"
        on:mouseenter={() => hoveredIcon = "VT"}
        on:mouseleave={() => hoveredIcon = ""}><div class="work-icon VT"></div></div>
        <div class="txt"><p>Vision Translate</p></div>
    </div>
    <div class="work-item {hoveredIcon == "TT" ? "hover" : ""}">
        <div class="wrapper"
        on:mouseenter={() => hoveredIcon = "TT"}
        on:mouseleave={() => hoveredIcon = ""}><div class="work-icon TT"></div></div>
        <div class="txt"><p>Toothsome Tomato</p></div>
    </div>
</div>
<div class="work-wrapper">
    <div class="work-section-main" bind:this={workElem} id="work"
        use:viewport
        on:enterViewport={() => {
            workSidebar.classList.add("active");
            workSidebar.classList.remove("unactive");
            workElem.classList.add("shown");
            workElem.classList.remove("notshown");
            activeSection.set("work");}}
		on:exitViewport={() => {
            workSidebar.classList.remove("active");
            workSidebar.classList.add("unactive");
            workElem.classList.add("notshown");
            workElem.classList.remove("shown")
        }}>
        <div class="inner fading">
        <div class="main-title">
        <h2>Work</h2>
        </div>
        <div class="main-desc">
            <p>I'm Albert Dömötör, software engineer and second year student at Aalto University.
            I'm mostly familiar with frontend and backend web development.
            <br/>I currently reside in Espoo, Finland.</p>
        </div>
        </div>
    </div>
</div>

<style>
    /* Work content */
    .AIC {
        background-image: url('../../assets/work_icons/aic.png');
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
    .work-item.hover .txt p {
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
    .work-icon:hover {
        filter: saturate(120%);
    }
    .wrapper:hover {
        transform: scale(1.1);
    }
    .work-icon {
        width: 45px;
        height: 45px;
        background-size: cover;
        filter:saturate(50%) brightness(60%);
        transition: .2s;
    }
    .wrapper {
        border: solid 1px var(--main-brand-color);
        width: 45px;
        height: 45px;
        transition: .2s;
        cursor: pointer;
        display: inline-block;
        margin: 0 15px 0 0;
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
        height: 220vh;
    }
    .work-section-main {
        height: 100vh;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    }
    .main-desc {
        width: 800px;
        border-left: solid 1px var(--main-brand-color);
        padding: 20px;
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
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes disappear {
        from {opacity: 1;}
        to {opacity: 0;}
    }
</style>