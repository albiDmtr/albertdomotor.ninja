<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import { killLenis, newLenis } from "../helpers"
    import viewport from '../useViewportAction'
    import Close from "svelte-material-icons/Close.svelte"

    export let alt = ''
    export let url = ''

    let inView = false

    const disableCursor = () => {
        document.querySelector(".cursor").style.opacity = 0
    }

    const enableCursor = () => {
        document.querySelector(".cursor").style.opacity = 1
    }

</script>
<div class="main-img-cont"
    use:viewport
    on:enterViewport={() => {inView = true}}
    on:exitViewport={() => {inView = false}}>
    <iframe
        on:mouseenter={disableCursor}
        on:mouseleave={enableCursor}
        class="img"
        src="{url}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    <div class="alt"><p>{alt}</p></div>
</div>
<style>
    :global(.stop-scrolling) {
        height: 100vh !important;
        overflow-y: hidden !important;
    }
    .alt {
        border: solid 1px var(--main-brand-color);
        width: fit-content;
        max-width: 70%;
        position: relative;
        left: -15px;
        background-color: rgba(5,5,46,.35);
        backdrop-filter: blur(16px);
        overflow: hidden;
        padding: 15px;
    }
    .alt p {
        margin: 0;
    }
    .img {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .3s;
        cursor:zoom-in;
    }
    .img:hover {
        transform: scale(1.02);
    }
    .main-img-cont {
        width: 900px;
        height: 500px;
        padding: 30px 60px 30px 60px;
        text-align: center;
        background-color: rgba(5,5,46,.5);
        border: solid 1px var(--main-brand-color);
    }
    p {
        font-family: 'Geist', sans-serif;
        color: white;
        opacity: 0.8;
    }
    :global(.out-view) {
        opacity: 0.2;
        transition: 1s;
    }
    :global(.in-view) {
        opacity: 1;
        transition: opacity 1.2s;
        transition-delay: 0.3s;
    }
    @media (max-width: 1000px) {
        .main-img-cont {
            width: calc(100% - 8px);
            height: 450px;
            padding: 4px;
        }
        .img {
            height: calc(100% - 38px);
        }
        .alt {
            position: relative;
            left: 10px;
        }
        .img:hover {
            transform: none;
        }
    }
</style>