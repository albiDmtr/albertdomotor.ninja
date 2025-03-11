<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import Menu from "svelte-material-icons/Menu.svelte"
    import Close from "svelte-material-icons/Close.svelte"
    import { githubUrl, cvUrl } from "./data"
    import { activeSection } from "./store"
    import { scrollToElem } from "./helpers"
    import ArrowDown from "svelte-material-icons/ArrowDown.svelte"

    let isHamburgerTapped = false
    let isMenuOpened = false
    let onHover = false
    let section = ""
    activeSection.subscribe((value) => {
        section = value
    })

</script>
<div class="main-menu {onHover ? "logoHovered" : ""} {isHamburgerTapped ? isMenuOpened ? "menuOpen" : "menuClosed" : ""}">
    <div class="main-logo" on:click={() => scrollToElem("top")} on:mouseenter={() => {onHover = true}}  on:mouseleave={() => {onHover = false}}></div>
    <button class="hamburger" on:click={() => {isMenuOpened = !isMenuOpened; isHamburgerTapped = true}} >
        {#if isMenuOpened}
            <svg class="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>                  
        {:else}
            <svg class="menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        {/if}
    </button>
    <div class="menu-items">
        <div class="about-button" on:click={() => {isMenuOpened = false}}>
            <a on:click={() => scrollToElem("about")} class="{section =='about' ? 'selected' : ''}">About</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a on:click={() => scrollToElem("work")} class="{section =='work' ? 'selected' : ''}">Work</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a  href="{cvUrl}" target=”_blank”>CV</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a  href="{githubUrl}" target=”_blank”>GitHub</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a on:click={() => scrollToElem("contact")} class="{section =='contact' ? 'selected' : ''}">Contact</a>
        </div>
    </div>
</div>
<div class="arrow-down {section =='' ? 'active' : ''}" on:click={() => scrollToElem("about")}>
    <span>
        <ArrowDown />
    </span>
</div>
<style>
    .arrow-down {
        display: none;
        z-index: 999;
    }
    .hamburger {
        display: none;
        background: var(--main-tr-color);
        backdrop-filter: var(--backdrop-filter);
        width: 40px;
        height: 40px !important;
        color: var(--main-brand-color);
        border: none;
        overflow: hidden;
        transition: .6s;
        padding-inline: 0 !important;
        padding-block: 1 !important;
        padding: 0 !important;
    }
    .menuOpen .hamburger {
        color: black;
        background-color: transparent;
        border-left: solid 2px black;
    }
    .logoHovered .main-logo {
        background-color: rgb(255,255,255)
    }
    .main-menu.logoHovered {
        border: 1px solid rgba(255,255,255,0.8);
    }
    .menu-items {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    div a:hover {
        color: var(--main-brand-color);
        filter: brightness(240%);
        font-size: 15px;
    }
    div a {
        margin: 0;
        padding: 0 17px;
        line-height: 48px;
        color: rgba(255,255,255,.8);
        text-decoration: none;
        font-size: 14px;
        transition: .2s;
    } 
    .main-menu div {
        font-family: 'Geist', sans-serif;
        height: 48px;
    }
    .main-logo {
        width: 50px;
        height: 48px;
        background: var(--main-brand-color);
        background-image: url("../../assets/logo.svg");
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .2s;
        opacity: .8;
    }
    .main-menu {
        display: flex;
        border: 1px solid var(--main-brand-color);
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--main-tr-color);
        position: fixed;
        width: 500px;
        bottom: 20px;
        left: calc(50vw - 250px);
        z-index: 1000;
        transition: .2s;
        cursor: pointer;
        border-radius: var(--main-border-radius);
        overflow: hidden;
        box-shadow: var(--main-shadow);
    }
    .main-menu:hover {
        transform: scale(1.05);
    }
    :global(.selected) {
        color: var(--main-brand-color) !important;
    }

    @media (max-width: 500px) {
        /*mobile*/
        .arrow-down {
            display: block;
            position: fixed;
            bottom: 0;
            right: 0;
            width: 40px;
            height: 40px;
            font-size: 40px;
            background-color: var(--main-brand-color);
            color: black;
            opacity: 0;
            transition: .3s;
        }
        .arrow-down span {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: 4px;
            transform: translate(-50%, -50%);
        }
        .arrow-down.active {
            opacity: 1;
        }
        .hamburger svg {
            animation: iconMoveIn 0.6s ease-in-out 0s 1;
        }
        .main-menu:hover {
            transform: none;
        }
        .main-menu {
            width: auto;
            position: fixed;
            height: 40px;
            bottom: 10px;
            left: 10px;
            backdrop-filter: none;
            overflow: hidden;
            box-sizing: border-box;
        }
        .main-logo {
            width: 40px;
            height: 40px !important;
            z-index: 1002;
            opacity: 1;
            border: none !important;
        }
        .hamburger {
            display: block;
            z-index: 1001;
        }
        .hamburger svg {
            position: absolute;
            top: 50%;
            width: 28px;
            height: 28px;
            margin-top: 0px;
            transform: translate(-50%, -50%);
        }
        .main-menu .menu-items {
            position: fixed;
            bottom: 0;
            left: 0;
            display: block;
            width: 0;
            height: 0;
            background: rgba(255,68,229);
            overflow: hidden;
        }
        .menuOpen .menu-items {
            position: fixed;
            bottom: 0;
            left: 0;
            display: block;
            width: 100vw;
            height: 100vh;
            background: rgba(255,68,229);
            animation: menuOpen 0.6s ease-in-out 0s 1 forwards;
        }
        .menuClosed .menu-items {
            animation: menuClose 0.6s ease-in-out 0s 1 forwards;
        }
        .menu-items div {
            display: block;
            background: var(--main-brand-color);
            width: 100px;
            height: 40px;
            margin-left: 50px;
        }
        /* cause of menu jumping down iOS error */
        .about-button {
            padding-top: 40px !important;
        }
        .menu-items div a {
            font-size: 20px;
            font-weight: 500;
            text-transform: uppercase;
            font-family: 'Geist Mono', monospace;
            color: black;
        }

        @keyframes iconMoveOut {
            0%   {margin-left: 0;}
            100% {margin-left: -40px;}
        }
        @keyframes iconMoveIn {
            0%   {margin-left: -40px;}
            100% {margin-left: 0;}
        }
        @keyframes menuOpen {
            0%   {height: 0; width: 51px;}
            50%   {height: 100vh; width: 51px;}
            100%   {height: 100vh; width: 100vw; position: fixed; top: 0;}
        }
        @keyframes menuClose {
            0%   {height: 100vh; width: 100vw; position: fixed; bottom: 0;}
            50%   {height: 100vh; width: 51px;}
            100%   {height: 0; width: 51px;}
        }

        :global(.selected) {
            color: rgba(0,0,0,0.6) !important;
        }
    }
</style>