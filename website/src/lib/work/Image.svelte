<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import { killLenis, newLenis } from "../helpers"
    import viewport from '../useViewportAction'
    import Close from "svelte-material-icons/Close.svelte"
    export let src
    export let alt

    let inView = false
    let img
    let imgOpen = false

    const onKeyDown = (e) => {
        if (e.keyCode == 27) {
            imgOpen = false
        }
    }

    let offsetX
    let offsetY
    let screenWidth = window.innerWidth

    const handleZoom = (e) => {
        const height = img.offsetHeight
        const width = img.offsetWidth
        const relativeX = e.clientX - img.offsetLeft
        const relativeY = e.clientY - img.offsetTop
        img.style.backgroundPosition = `${relativeX / width * 100}% ${relativeY / height * 100}%`
    }
    const handleLeave = () => {
        img.style.backgroundPosition = "50%"
    }

    $: {
        if (imgOpen) {
            document.querySelector('body')?.classList.add("stop-scrolling")
            killLenis()
        } else {
            document.querySelector('body')?.classList.remove("stop-scrolling")
            newLenis(0.05, 1)
        }
    }
</script>
<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="main-img-cont {imgOpen ? 'open' : 'closed'} {inView ? "in-view" : "out-view"}"
    on:click={() => {screenWidth > 1000 ? imgOpen = !imgOpen : !imgOpen ? imgOpen = true : ''}}
    use:viewport
    on:enterViewport={() => {inView = true}}
    on:exitViewport={() => {inView = false}}>
    <button class="close-btn"
        on:click={() => {screenWidth > 1000 ? '' : imgOpen = false}}>
        <span>
            <Close />
        </span>
    </button>
    <div class="img" style="background-image: url('{src}');"
    bind:this={img} on:mousemove={(e) => {imgOpen && screenWidth > 1000 ? handleZoom(e) : ''}}
    on:mouseleave={handleLeave}>
    </div>
    <div class="alt"><p>{alt}</p></div>
</div>

<style>
    :global(.stop-scrolling) {
        height: 100vh !important;
        overflow-y: hidden !important;
    }
    .close-btn span {
        font-size: 24px;
        position: relative;
        top: 2px;
    }

    .close-btn {
        z-index: 100000001;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border: solid 1px var(--main-brand-color);
        background-color: rgba(5,5,46,.35);
        color: var(--main-brand-color);
        cursor: pointer;
        transition: .4s;
        display: none;
        opacity: 0;
    }
    .open .close-btn {
        display: block;
        opacity: 1;
    }
    .close-btn:hover {
        border: solid 1px rgba(255,255,255,0.8);
        color: rgba(255,255,255,0.8) !important;
    }
    .alt {
        border: solid 1px var(--main-brand-color);
        width: fit-content;
        max-width: 70%;
        position: relative;
        top: -34px;
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
    .open .img:hover {
        transform: none;
        background-size: cover;
    }
    .open .alt {
        border: none;
        background-color: transparent;
        backdrop-filter: none;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 100%;
    }
    .open .img {
        height: calc(100% - 60px );
        width: 80%;
        transition: 0s !important;
        margin-left: 10%;
    }
    .main-img-cont {
        width: 900px;
        height: 500px;
        padding: 30px 60px 30px 60px;
        text-align: center;
        background-color: rgba(5,5,46,.5);
        border: solid 1px var(--main-brand-color);
    }
    .open {
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        width: calc(100vw - 120px);
        height: calc(100vh - 30px);
        max-width: none;
        max-height: none;
        border: none;
        backdrop-filter: blur(16px);
    }
    .open * {
        animation: fadeIn 0.3s ease-in-out 0s 1;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    p {
        font-family: 'Inter', sans-serif;
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
        .alt {
            position: relative;
            left: 10px;
        }
        .img:hover {
            transform: none;
        }
        .open {
            width: 100vw;
            height: 100vh;
            z-index: 12;
        }
        .open .alt {
            padding: 8px 0 0 0;
        }
        .close-btn {
            position: fixed;
            top: 0;
            right: 10px;
            width: 55px;
            height: 55px;
            background-color: var(--main-brand-color);
        }
        .close-btn span {
            font-size: 30px;
            color: black;
        }
        .open .img {
            height: calc(100% - 200px);
            width: calc(100% - 8px );
            margin-left: 0;
            margin-top: 86px;
        }
    }
</style>