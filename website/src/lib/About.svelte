<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script>
import CallMade from "svelte-material-icons/CallMade.svelte"
import {githubUrl, linkedinUrl} from "./data"
import viewport from './useViewportAction'
import {sectionEnter, sectionLeave} from "./store"
let aboutElem
</script>
<div class="about-wrapper">
<div class="about-section-main notshown fading" bind:this={aboutElem} id="about"
    use:viewport
    on:enterViewport={() => {sectionEnter("about"); aboutElem.classList.add("shown"); aboutElem.classList.remove("notshown");}}
    on:exitViewport={() => {sectionLeave("about"); aboutElem.classList.remove("shown"); aboutElem.classList.add("notshown")}}>
    <div class="inner">
    <div class="main-title">
    <h2>About</h2>
    </div>
    <div class="main-desc">
        <p>I'm Albert Dömötör, software engineer and second year student at Aalto University.
        I'm mostly familiar with frontend and backend web development but I'm interested in
        everything that has to do with building things.
        <br/>I currently reside in Espoo, Finland.
        </p>
        <div class="gh button" on:click={() => window.open(githubUrl, '_blank')}></div>
        <div class="ln button" on:click={() => window.open(linkedinUrl, '_blank')}></div>
        <br/>
        <div class="titles">
            <p class="time">Currently at:</p>
            <div class="current occupation aalto">
                <div class="img"></div>
                <div>
                    <p>Student<br/><span>Aalto University</span></p>
                </div>
            </div>

            <p class="time">Previously:</p>
            <div class="occupation aic">
                <div class="img"></div>
                <div>
                    <p>Fullstack Software Developer<br/><span>AIContentfy</span></p>
                </div>
                <a href="https://aicontentfy.com/" target="_blank"><span class="url"><CallMade /></span></a>
            </div>
            <div class="occupation pj">
                <div class="img"></div>
                <div>
                    <p>Campaign Ambassador<br/><span>Programozd a jövőd!</span></p>
                </div>
                <a href="https://programozdajovod.hu/" target="_blank"><span class="url"><CallMade /></span></a>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<style>
    /* occupation data */
    .aalto .img {
        background-image: url('../../assets/occupation_icons/aalto.png');
    }
    .aic .img {
        background-image: url('../../assets/occupation_icons/aic.png');
    }
    .pj .img {
        background-image: url('../../assets/occupation_icons/pj.png');
    }

    /* rest */
    .gh {
        background-image: url('../../assets/social_icons/github.png');
    }
    .ln {
        background-image: url('../../assets/social_icons/linkedin.png');
    }
    .button:hover {
        transform: scale(1.1);
    }
    .button {
        width: 24px;
        height: 24px;
        background-color: var(--main-brand-color);
        margin: 8px 8px 0 0;
        display: inline-block;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .2s;
        cursor: pointer;
    }
    .url:hover {
        transform: scale(1.1);
    }
    .url {
        color: rgba(255,255,255,0.8);
        font-size: 22px;
        float: right;
        margin: 11px 8px 0 0;
        cursor: pointer;
        transition: .2s;
    }
    .occupation div p span {
        font-size: 12px;
    }
    .occupation div p {
        position: relative;
        top: -8px;
        margin: 0 0 0 8px;
        line-height: 1;
    }
    .occupation div {
        max-width: 300px;
        display: inline-block;
        height: 48px;
    }
    .time {
        font-size: 12px;
        margin: 6px 0;
    }
    .img {
        width: 48px;
        height: 48px;
        background-color: rgba(255,255,255, 0.8);
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: 50%;
        display: inline-block;
    }
    .current .img {
        background-color: var(--main-brand-color);
    }
    .occupation:hover {
        transform: scale(1.05);
    }
    .occupation {
        border: solid 1px rgba(255,255,255, 0.8);
        height: 48px;
        margin: 8px;
        width: 350px;
        transition: .2s;
    }
    .current.occupation {
        border: solid 1px var(--main-brand-color);
    }
    .about-section-main {
        height: 100vh;
        position: sticky;
        top:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .inner {
        width: 1000px;
        margin-left: calc(50vw - 500px);
        z-index: 10;
        display: flex;
        top: 0;
    }
    .about-wrapper {
        height: 220vh;
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
    @media (max-width: 1000px) {
        .inner {
            display: block;
            width: 100%;
            margin: 0 auto;
            position: relative;
            left: -8px;
        }
        .main-title {
            width: auto;
            height: auto;
            max-width: 600px;
            width: 80vw;
        }
        .main-title h2 {
            float: left;
            margin: 15px 20px;
        }
        .main-desc {
            max-width: 600px;
            margin: 0 auto;
            width: 80vw;
            overflow: hidden;
            border-top: solid 1px var(--main-brand-color);
            border-left: none;
            padding: 15px;
        }
        .occupation {
            width: 100%;
            max-width: 350px;
        }
        .titles {
            margin-top: 20px;
        }
    }
    @media (max-width: 390px) {
        .url {
            display: none;
        }
    }
</style>