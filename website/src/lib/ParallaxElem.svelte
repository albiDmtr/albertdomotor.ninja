<script>
    export let front = 0
    let me
    let windowMidX = window.innerHeight/2
    let windowMidY = window.innerWidth/2
    let parallaxMultiplier = 0.01

    const handleParallax = (e) => {
        me.style.transform = `translateX(${( e.clientX - windowMidX)*parallaxMultiplier*front}px) translateY(${(e.clientY -windowMidY)*parallaxMultiplier*front}px)`
    }
</script>

<svelte:window on:mousemove={handleParallax} />
<div bind:this={me}>
    <slot />
</div>


<style>
    div {
        z-index: 1;
    }
</style>