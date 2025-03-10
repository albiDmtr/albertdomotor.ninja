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
    <div class="gh-button">
    </div>
    <div class="repo-name-cont">
        <p>{ghName}</p>
    </div>
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
    .gh-button {
        height: 45px;
        width: 45px;
        display: inline-block;
        background-color: var(--main-brand-color);
        background-image: url('../../../assets/social_icons/github.png');
        background-size: 60%;
        background-position: 50%;
        background-repeat: no-repeat;
        transition: .2s;
    }
    .gh-button:hover {
        background-size: 65%;
    }
    .gh-cont {
        height: 45px;
        width: fit-content;
        display: flex;
        vertical-align: middle;
        transition: .2s;
        opacity: 1;
    }
    .repo-name-cont {
        display: inline-block;
        height: 44px;
        width: fit-content;
        color: white;
        padding: 0 14px;
        border: solid 1px var(--main-brand-color);
        border-bottom: none;
        background-color: rgba(5,5,46,.35);
        transition: .2s;
    }
    .repo-name-cont:hover {
        background: var(--main-brand-color);
        color: black !important;
    }
    .repo-name-cont p {
        margin: 0;
        line-height: 44px;
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
        margin-top: 12px;
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
        padding: 0 15px;
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
        padding: 15px 25px;
        border: solid 1px var(--main-brand-color);
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
    @media (max-width: 1000px) {
        .main-md-cont {
            width: calc(100% - 8px);
            padding: 4px;
        }
        .md:hover {
            transform: none;
        }
        :global(.md-inner img) {
            max-width: 100%;
        }
    }
</style>