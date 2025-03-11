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
    <h2 class="section-title">About</h2>
    </div>
    <div class="main-desc">
        <p>I'm Albert Dömötör, software engineer and third year student at Aalto University.
        I'm mostly familiar with fullstack web development but I'm interested in
        everything that has to do with building things.
        <br/>I currently reside in Espoo, Finland.
        </p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="gh button" on:click={() => window.open(githubUrl, '_blank')}></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="ln button" on:click={() => window.open(linkedinUrl, '_blank')}></div>
        <br/>
        <div class="titles">
            <p class="time">Currently at:</p>
            <div class="current occupation aalto">
                <div class="img"></div>
                <div class="txt">
                    <p>Student<br/><span>Aalto University</span></p>
                </div>
            </div>

            <p class="time">Previously:</p>
            <div class="occupation digitwin">
                <div class="img"></div>
                <div class="txt">
                    <p>Full Stack Developer – Research Assistant<br/><span>DigiTwin Lab - Aalto University</span></p>
                </div>
                <a href="https://www.aalto.fi/en/aiic/digitwin" target="_blank" class="arrow-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>                      
                </a>
            </div>
            <div class="occupation aic">
                <div class="img"></div>
                <div class="txt">
                    <p>Fullstack Software Developer<br/><span>AIContentfy</span></p>
                </div>
                <a href="https://aicontentfy.com/" target="_blank" class="arrow-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
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
    .digitwin .img {
        background-image: url('../../assets/occupation_icons/digitwin.png');
    }
    .aic .img {
        background-image: url('../../assets/occupation_icons/aic.png');
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
        width: 28px;
        height: 28px;
        background-color: var(--main-brand-color);
        margin: 8px 8px 0 0;
        display: inline-block;
        background-size: 55%;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .2s;
        cursor: pointer;
        border-radius: var(--main-border-radius);
    }
    .arrow-link:hover {
        transform: scale(1.1);
    }
    .arrow-link {
        color: rgba(255,255,255,0.8);
        float: right;
        margin: 4px 14px 0 0;
        cursor: pointer;
        transition: .2s;
    }
    .arrow-link svg {
        width: 18px;
        height: 18px;
    }
    .occupation div p span {
        font-size: 12px;
    }
    .occupation div p {
        margin: 0 0 0 8px;
        line-height: 1;
        max-width: calc(100% - 16px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .occupation div {
        height: 48px;
    }
    .occupation .txt {
        flex-shrink: 1;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
    }
    .time {
        font-size: 12px;
        margin: 6px 0;
    }
    .img {
        width: 49px;
        height: 48px;
        background-color: rgba(255,255,255, 0.8);
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: 50%;
        display: inline-block;
        flex-shrink: 0;
        flex-grow: 0;
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
        width: 420px;
        transition: .2s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: var(--main-border-radius);
        overflow: hidden;
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
    @media (max-width: 1000px) {
        .inner {
            display: block;
            width: 100%;
            margin: 0 auto;
        }
        .main-title {
            width: auto;
            height: auto;
            max-width: 600px;
            width: 80vw;
            margin: 0 auto;
        }
        .main-title h2 {
            float: left;
            margin: 15px 0;
        }
        .main-desc {
            max-width: 600px;
            margin: 0 auto;
            width: 80vw;
            overflow: hidden;
            border-top: solid 1px var(--main-brand-color);
            border-left: none;
            padding: 15px 0;
        }
        .occupation {
            width: calc(100% - 16px);
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