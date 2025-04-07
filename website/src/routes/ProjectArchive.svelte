<script>
    import { killLenis, newLenis } from "../lib/helpers"
    import Menu from "../lib/Menu.svelte";
    import Cursor from "../lib/Cursor.svelte";
    import { workData } from "../lib/workData"
    import {activeSection} from "../lib/store"
    import { router } from "tinro"


    activeSection.set("");

    let scrollPos = 0
    window.onscroll = () => {
        scrollPos = document.documentElement.scrollTop
    }

    killLenis()
    newLenis(0.05, 1)

    router.subscribe( _ => {window.scrollTo(0, 0);})
</script>
<svelte:head>
    <title>Project Archive - Albert Dömötör</title>
</svelte:head>
<Menu/>
<Cursor/>
<a href="/?section=work"
class="btn-back"
on:click={() => {document.querySelector('body')?.classList.remove("stop-scrolling")}}
data-cooltransition>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
    <span>Works</span>
</a>

<div class="main-page">
    <h1 class="main-title">Project Archive</h1>
    
    <div class="no-projects">
        <p>No archived projects yet.</p>
        <a href="/?section=work"
            class="btn-back go-back">Go back to Works</a>
    </div>

</div>

<style>
    .main-title {
        font-size: 32px;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        color: var(--main-brand-color);
        text-transform: uppercase;
        text-align: center;
        margin-top: 24px;
    }

    .main-page {
        width: 100%;
        max-width: 900px;
        min-height: 100vh;
        margin: 0 auto;
    }

    .btn-back {
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
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        transition: .2s;
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--main-tr-color);
        z-index: 13;
        position: fixed;
        top: 32px;
        left: 32px;
    }
    .btn-back:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }
    .btn-back svg {
        width: 16px;
        height: 16px;
    }


    .go-back {
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
    }
    .no-projects {
        width: 100%;
        max-width: 900px;
        height: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }

    @media (max-width: 500px) {
        .btn-back span {
            display: none;
        }
        .btn-back {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 40px;
            height: 40px;
            padding: 0;
            justify-content: center;
        }
        .btn-back svg {
            width: 28px;
            height: 28px;
        }
    }
</style>