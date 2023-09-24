<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import Menu from "svelte-material-icons/Menu.svelte"
    import Close from "svelte-material-icons/Close.svelte"
    import { githubUrl, cvUrl } from "./data"
    import { activeSection } from "./store"
    let isMenuOpened = false
    let onHover = false
    let section = ""
    activeSection.subscribe((value) => {
        section = value
        console.log(section)
    })

</script>
<div class="main-menu {onHover ? "logoHovered" : ""} {isMenuOpened ? "menuOpen" : "menuClosed"}">
    <div class="main-logo" on:mouseenter={() => {onHover = true}}  on:mouseleave={() => {onHover = false}}></div>
    <button class="hamburger" on:click={() => {isMenuOpened = !isMenuOpened}} >
        {#if isMenuOpened}
            <span class="close">
                <Close />
            </span>
        {:else}
            <span class="menu">
                <Menu />
            </span>
        {/if}
    </button>
    <div class="menu-items">
        <div class="about-button" on:click={() => {isMenuOpened = false}}>
            <a href="#about" class="{section =='about' ? 'selected' : ''}">About</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a href="#work" class="{section =='work' ? 'selected' : ''}">Work</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a  href="{cvUrl}" target=”_blank”>CV</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a  href="{githubUrl}" target=”_blank”>GitHub</a>
        </div>
        <div  on:click={() => {isMenuOpened = false}}>
            <a  href="#contact" class="{section =='contact' ? 'selected' : ''}">Contact</a>
        </div>
    </div>
</div>

<style>
    .hamburger span {
        margin-top: 7px;
    }
    .hamburger {
        display: none;
        background: var(--main-brand-color);
        font-size: 40px;
        width: 55px;
        height: 55px !important;
        justify-content: center;
        align-items: center;
        color: black;
        border: none;
        overflow: hidden;
        transition: .6s;
    }
    .menuOpen .hamburger {
        color: black;
        background: rgb(250, 250, 250);
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
        font-family: 'Inter', sans-serif;
        height: 48px;
    }
    .main-logo {
        width: 48px;
        height: 48px;
        background: var(--main-brand-color);
        background-image: url("./logo.svg");
        background-size: 90%;
        background-repeat: no-repeat;
        background-position: 50%;
        transition: .2s;
        opacity: .8;
    }
    .main-menu {
        display: flex;
        border: 1px solid var(--main-brand-color);
        backdrop-filter: blur(16px);
        background-color: rgba(5,5,46,.25);
        position: fixed;
        width: 500px;
        bottom: 20px;
        left: calc(50vw - 250px);
        z-index: 1000;
        transition: .2s;
        cursor: pointer;
    }
    .main-menu:hover {
        transform: scale(1.05);
    }
    :global(.selected) {
        color: var(--main-brand-color) !important;
    }

    @media (max-width: 500px) {
        /*mobile*/
        .hamburger span {
            animation: iconMoveIn 0.6s ease-in-out 0s 1;
        }
        .main-menu:hover {
            transform: none;
        }
        .main-menu {
            width: auto;
            position: fixed;
            height: 55px;
            bottom: 0;
            left: 0;
            backdrop-filter: none;
        }
        .main-logo {
            width: 55px;
            height: 55px !important;
            z-index: 1001;
            background-color: rgb(250,250,250);
            opacity: 1;
            border: none !important;
        }
        .hamburger {
            display: flex;
            z-index: 1001;
        }
        .menuOpen .menu-items {
            position: fixed;
            bottom: 0;
            left: 0;
            display: block;
            width: 100vw;
            height: 100vh;
            background: rgba(255,68,229);
            animation: menuOpen 0.6s ease-in-out 0s 1;
            overflow: hidden;
        }
        .menuClosed .menu-items {
            position: fixed;
            bottom: 0;
            left: 0;
            display: block;
            width: 0;
            height: 0;
            background: rgba(255,68,229);
            animation: menuClose 0.6s ease-in-out 0s 1;
            overflow: hidden;
        }
        .menu-items div {
            display: block;
            background: var(--main-brand-color);
            width: 100px;
            height: 55px;
            margin-left: 40px;
        }
        .about-button {
            margin-top: 40px;
        }
        .menu-items div a {
            font-size: 22px;
            font-weight: 500;
        }

        @keyframes iconMoveOut {
            0%   {transform: translateX(0px);}
            100% {transform: translateX(-55px);}
        }
        @keyframes iconMoveIn {
            0%   {transform: translateX(-55px);}
            100% {transform: translateX(0px);}
        }
        @keyframes menuOpen {
            0%   {height: 0; width: 55px;}
            50%   {height: 100vh; width: 55px;}
            100%   {height: 100vh; width: 100vw;}
        }
        @keyframes menuClose {
            0%   {height: 100vh; width: 100vw;}
            50%   {height: 100vh; width: 55px;}
            100%   {height: 0; width: 55px;}
        }
    }
</style>