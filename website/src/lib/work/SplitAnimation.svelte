<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import { killLenis, newLenis } from "../helpers"
    import viewport from '../useViewportAction'
    import Close from "svelte-material-icons/Close.svelte"
    export let src1
    export let src2
    export let size1
    export let size2
    export let alt

    let inView = false

    function cssVariables(node, variables) {
		setCssVariables(node, variables);
		
		return {
			update(variables) {
				setCssVariables(node, variables);
			}
		}
	}
	function setCssVariables(node, variables) {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	}
</script>

<div class="main-img-cont {inView ? "in-view" : "out-view"}"
    use:viewport
    on:enterViewport={() => {inView = true}}
    on:exitViewport={() => {inView = false}}>
        <video class="img first" use:cssVariables={{size1, size2}} src={src1} autoplay loop muted playsinline>
        </video>
        <video class="img second" use:cssVariables={{size1, size2}} src={src2} autoplay loop muted playsinline>
        </video>
    <div class="alt"><p>{alt}</p></div>
</div>

<style>
    .img.first {
        width: calc((var(--size1) / (var(--size1) + var(--size2)) * 100 - 1) * 1%);
    }
    .img.second {
        width: calc((var(--size2) / (var(--size1) + var(--size2)) * 100 - 1) * 1%);
    }

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
        background-color: var(--main-tr-color);
        color: var(--main-brand-color);
        cursor: pointer;
        transition: .4s;
        display: none;
        opacity: 0;
    }
    .close-btn.shown {
        display: block;
        opacity: 1;
    }
    .close-btn:hover {
        border: solid 1px rgba(255,255,255,0.8);
        color: rgba(255,255,255,0.8) !important;
    }
    .alt {
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        width: fit-content;
        max-width: 70%;
        position: relative;
        top: -24px;
        left: -15px;
        background-color: var(--main-tr-color);
        backdrop-filter: var(--backdrop-filter);
        overflow: hidden;
        padding: 8px 12px;
    }
    .alt p {
        margin: 0;
        font-size: 14px;
        font-family: 'Geist Mono', monospace;
        text-transform: uppercase;

    }
    .img {
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .3s;
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
        box-sizing: border-box;
        padding: 30px 60px 30px 60px;
        text-align: center;
        background-color: rgba(5,5,46,.5);
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
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
        backdrop-filter: var(--backdrop-filter);
    }
    .open * {
        animation: fadeIn 0.3s ease-in-out 0s 1;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
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
            margin: 0 auto;
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
            left: calc(100vw - 55px);
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
        .open .img:hover {
            transform: none;
            background-size: contain;
        }
        .img.first {
            width: 100% !important;
        }
        .img.second {
            display: none;
        }
    }
</style>