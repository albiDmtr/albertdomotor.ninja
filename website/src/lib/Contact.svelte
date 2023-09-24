<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import {emailAddress, phoneNumber, whatsAppUrl, telegramUrl} from "./data"
    import {activeSection} from "./store"
    import viewport from './useViewportAction'
    let contactElem
</script>
<div class="contact-wrapper">
    <div class="contact-section-main notshown" bind:this={contactElem} id="contact"
    use:viewport
    on:enterViewport={() => {activeSection.set("contact"); contactElem.classList.add("shown"); contactElem.classList.remove("notshown");}}
    on:exitViewport={() => {contactElem.classList.remove("shown"); contactElem.classList.add("notshown")}}>
        <div class="inner fading">
            <div class="main-title">
            <h2>Contact</h2>
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
        background-image: url("social_icons/telegram.png");
    }
    .wa {
        background-image: url("social_icons/whatsapp.png");
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
</style>