<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    import Menu from "../Menu.svelte";
    import Cursor from "../Cursor.svelte";
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte"

    let isHovered = false
</script>
<Cursor/>
<Menu/>
<div class="main-work-page">
    <a href="{window.location.origin}/#work">
    <div class="back {isHovered ? 'hover' : ''}" on:mouseenter={() => {isHovered = true}} on:mouseleave={() => {isHovered = false}}>
        <div class="arrow"><span><ArrowLeft/></span></div><div class="back-txt"><p>Works</p></div>
    </div>
    </a>
    <slot />
</div>

<style>
    p {
        font-family: 'Inter', sans-serif;
        color: rgba(255,255,255,0.8);
        font-size: 14px;
    }
    .back div {
        display: inline-block;
    }
    .arrow {
        width: 50px;
        height: 50px;
        background-color: var(--main-brand-color);
        opacity: 0.8;
        color: black;
        font-size: 34px;
        margin: 0;
        transition: .2s;
    }
    .arrow span {
        position: relative;
        top: 7px;
        left: 7px;
    }
    .back-txt {
        width: 75px;
        height: 50px;
        margin: 0;
        float: right;
        text-align: center;
    }
    .back {
        height: 50px;
        width: 125px;
        border: solid 1px var(--main-brand-color);
        position: fixed;
        top: 20px;
        left: 20px;
        transition: .2s;
        cursor: pointer;
    }
    .hover .arrow {
        background-color: white;
    }
    .back.hover {
        border: solid 1px rgba(255,255,255,0.8);
    }
    .back:hover {
        transform: scale(1.05);
    }
</style>