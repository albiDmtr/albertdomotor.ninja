<script>
    import {meta, router} from 'tinro';
    const route = meta()

    let loaded = false
    let loadingElem
    document.querySelector("body").style.height = "100vh";
    document.querySelector("body").style.overflowY = "hidden";
    document.addEventListener('DOMContentLoaded', () => {
        loaded = true
    }, false);
    let timePassed = false
    setTimeout(() => {
        timePassed = true
    },1200)
    $: if (loaded && timePassed) {
        setTimeout(() => {
            loadingElem.style.display = "none"
            document.querySelector("body").style.height = "initial";
            document.querySelector("body").style.overflowY = "initial";
        },200)
    }

    // transition
    const transitionTime = 800
    let transition = ""
    router.subscribe( _ => {transition = "out"; setTimeout(() => {transition = ""},transitionTime)})

    const clickHandler = (e) => {
        const href = e.currentTarget.href;
        e.preventDefault()
        setTimeout(() => { router.goto(href);}, transitionTime )
        transition = "in"
    }
    const setListeners = () => {
        const links = document.querySelectorAll('[data-cooltransition]')
        for (var link of links) {
            link.setAttribute("data-tinro-ignore", true)
            link.addEventListener("click", (e) => {clickHandler(e)})
        }
    }
    router.subscribe(() => setTimeout(setListeners,1))

</script>
<div class="transition {transition}"></div>
{#if !route.from}
    <div class="loading {loaded && timePassed ? 'loaded' : ''}" bind:this={loadingElem}>
        <div class="anim1"><img src="../../assets/loading/anim1.svg" width="220px" /></div>
        <div class="anim2"><img src="../../assets/loading/anim2.svg" width="220px" /></div>
    </div>
{/if}

<style>
    .transition {
        position: fixed;
        z-index: 1000000;
        height: 100vh;
        width: 0vw;
        background-color: var(--main-brand-color);
    }
    .in {
        animation: transitionInAnim .8s ease-out 0s 1;
    }
    .out {
        animation: transitionOutAnim .8s ease-out 0s 1;
    }
    @keyframes transitionInAnim {
        0% {position: fixed; top: 0; left: 0; width: 0vw;}
        100% {position: fixed; top: 0; left: 0; width: 100vw;}
    }
    @keyframes transitionOutAnim {
        0% {position: fixed; top: 0; right: 0; width: 100vw;}
        100% {position: fixed; top: 0; right: 0; width: 0vw;}
    }

    .anim1 {
        position: fixed;
        top: calc(50vh - 100px);
        left: calc(50vw - 110px);
        z-index: 1000001;
    }
    .anim2 {
        position: fixed;
        top: calc(50vh - 100px);
        left: calc(50vw - 110px);
        z-index: 1000002;
        transform: translateX(13px) translateY(-12px);
        animation-name: svganim;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier();
        animation-iteration-count: 1;
    }
    @keyframes svganim {
        0% {transform: translateX(0) translateY(0);}
        30% {transform: translateX(0) translateY(0);}
        100% {transform: translateX(13px) translateY(-12px);}
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000000;
        background-color: var(--main-brand-color);
        transition: .2s;
        opacity: 1;
    }
    .loading.loaded {
        opacity: 0;
    }
</style>