<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import { killLenis, newLenis } from "../helpers"
    import viewport from '../useViewportAction'
    import FormatListBulleted from "svelte-material-icons/FormatListBulleted.svelte"
    import Github from "svelte-material-icons/Github.svelte"
    import { onMount } from "svelte"
    import snarkdown from 'snarkdown'

    export let ghName = ''
    export let url = ''
    export let ghUrl = ''

    let inView = false

    const disableCursor = () => {
        document.querySelector(".cursor").style.opacity = 0
    }

    const enableCursor = () => {
        document.querySelector(".cursor").style.opacity = 1
    }

    let innerHtml
    onMount(async () => {
        fetch(url)
        .then(response => response.text().then((res) => innerHtml = snarkdown(res).replace("<em>","_").replace("------------","<hr>")))
        .catch(error => {
            console.log(error)
            return []
        })
    })

</script>
<a class="gh-url" href="{ghUrl}" target="_blank">
<div class="gh-cont">
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.45 11C9.45 11 9.95 11.5 9.95 12.5V15.5M6 11C6 11 5.5 11.5 5.5 12.5V15.5M5 13.5C5 13.5 3.5 13.5 2.5 13C1.5 12.5 1 11.5 1 11.5M9.5 11C9.5 11 12 10.5 13 9.5C14 8.5 14.5 7 14 5.5C13.5 4 13 3.5 13 3.5V2C13 1.5 12.75 1 12.75 1C12.75 1 12.5 1 11.5 1.25C10.5 1.5 10 2 10 2C10 2 8.54311 1.7 7.5 1.7C6.45689 1.7 5.5 2 5.5 2M5.86051 11.005C5.86051 11.005 3.36051 10.505 2.36051 9.50498C1.36051 8.50498 0.86051 7.00498 1.36051 5.50498C1.86051 4.00498 2.36051 3.50498 2.36051 3.50498M2.35 3.5V2C2.35 1.5 2.6 1 2.6 1C2.6 1 2.85 1 3.85 1.25C4.85 1.5 5.35 2 5.35 2" stroke="currentColor" stroke-linecap="round"/>
    </svg>
    <span>{ghName}</span>
</div>
</a>
<div class="main-md-cont"
    use:viewport
    on:enterViewport={() => {inView = true}}
    on:exitViewport={() => {inView = false}}>
    <div class="md">
        <div class="md-head">
            <p class="title">
                <a href="{ghUrl}" target="_blank">
                    <span>
                        <FormatListBulleted />
                    </span>
                </a>
                README.md
            </p>
            <a href="{ghUrl}" target="_blank">
            <p class="gh-txt">
                Open in GitHub
                <span>
                    <Github />
                </span>
            </p>
            </a>
        </div>
        <div class="md-inner">
            {@html innerHtml}
        </div>
    </div>
</div>
<style>
    .gh-cont {
        color: var(--main-brand-color);
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        font-size: 14px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        width: fit-content;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Geist Mono, monospace;
        font-weight: 500;
        transition: .2s;
        -webkit-backdrop-filter: var(--backdrop-filter);
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--main-tr-color);
        position: relative;
        left: 32px;
        bottom: -12px;
    }
    .gh-cont:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }

    .gh-url {
        text-decoration: none;
    }

    .md-head .title span {
    color: rgb(120,120,120);
    font-size: 18px;
    position: relative;
    top: 3px;
    }
    .md-head .gh-txt span {
        font-size: 18px;
        position: relative;
        top: 5px;
        cursor: pointer;
    }
    .md-head .gh-txt {
        color: rgb(120,120,120);
        font-size: 12px;
        float: right;
        display: inline-block;
        padding: 0px 5px 5px 5px;
        border-radius: 5px;
    }
    .md-head .gh-txt:hover {
        background-color: rgb(240,240,240);
    }
    .md-head .title {
        color: black;
        font-weight: 600;
        display: inline-block;
    }
    .md-head {
        border-bottom: solid 1px rgb(220,220,220);
        padding: 10px 15px;
    }
    :global(.md a) {
        color: rgb(9,105,218);
        font-weight: normal;
    }
    .md {
        width: 100%;
        height: auto;
        transition: .3s;
    }
    .md-inner {
        padding: 15px 25px;
    }
    :global(.md h3, .md h4, .md h5) {
        color: black;
    }
    :global(.md h1, .md h2) {
        color: black;
        padding-bottom: 0.3em;
        border-bottom: solid 1px rgb(240,240,240);
    }
    :global(.md strong) {
        font-weight: 600;
    }
    .main-md-cont {
        width: 900px;
        height: auto;
        box-sizing: border-box;
        padding: 22px 32px;
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        background-color: rgba(5,5,46,.40);
    }
    .md {
        width: calc(100%);
        text-align: left;
        background-color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
        border-radius: 5px;
        border: solid 1px rgb(200,200,200);
    }
    :global(.main-md-cont li) {
        margin-top: 0.25em;
    }
    :global(.main-md-cont code) {
        background-color: rgb(240,240,240);
        border-radius: 5px;
        line-height: 1.5;
        padding: 3px;
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

    :global(.md-inner p, .md-inner h1, .md-inner h2, .md-inner h3, .md-inner h4, .md-inner h5, .md-inner h6, .md-inner span) {
        font-family: 'Inter', sans-serif;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }

    @media (max-width: 1000px) {
        .main-md-cont {
            width: calc(100% - 8px);
            padding: 4px;
            margin: 0 auto;
        }
        .md:hover {
            transform: none;
        }
        :global(.md-inner img) {
            max-width: 100%;
        }
    }
</style>