<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import {emailAddress, phoneNumber, whatsAppUrl, telegramUrl} from "./data"
    import {sectionEnter, sectionLeave} from "./store"
    import viewport from './useViewportAction'
    let contactElem
</script>
<div class="contact-wrapper">
    <div class="contact-section-main notshown" bind:this={contactElem} id="contact"
    use:viewport
    on:enterViewport={() => {sectionEnter("contact"); contactElem.classList.add("shown"); contactElem.classList.remove("notshown");}}
    on:exitViewport={() => {sectionLeave("contact"); contactElem.classList.remove("shown"); contactElem.classList.add("notshown")}}>
        <div class="inner fading">
            <div class="main-title">
            <h2 class="section-title">Contact</h2>
            </div>
            <div class="main-desc">
                <p>Feel free to reach out to me. I'm always open to discuss new projects.</p>
                <br/>
                <p>Email: <a href="mailto:{emailAddress}">{emailAddress}</a></p>
                <p>Phone: <a href="tel:{phoneNumber}">{phoneNumber}</a></p>
                <div class="tg button" on:click={() => window.open(telegramUrl, '_blank')}></div>
                <div class="wa button" on:click={() => window.open(whatsAppUrl, '_blank')}></div>
            </div>
        </div>
    </div>
</div>

<style>
    a {
        color: var(--main-brand-color);
    }
    .tg {
        background-image: url("../../assets/social_icons/telegram.png");
    }
    .wa {
        background-image: url("../../assets/social_icons/whatsapp.png");
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
    .contact-wrapper {
        height: 220vh;
    }
    .contact-section-main {
        height: 100vh;
        position: sticky;
        top:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .inner {
        z-index: 10;
        display: flex;
        width: 1000px;
        margin-left: calc(50vw - 500px);
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
    p {
        color: rgba(255,255,255, 0.8);
        font-family: 'Geist', sans-serif;
        margin: 0;
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
    }
</style>