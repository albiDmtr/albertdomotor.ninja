<div class="shadow"></div>
<video autoplay muted loop class="bgVideo">
    <source src="./bg_video.mp4" type="video/mp4">
</video>

<style>
    .shadow {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background: radial-gradient(circle, rgba(255,68,255,0) 0%, rgba(0,0,0,1) 100%);
    }
    .bgVideo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: auto;
        filter: grayscale(100%) invert() brightness(20%);
        z-index: 0;
    }
    @media (max-aspect-ratio: 16/9) {
        /*mobile*/
        .bgVideo {
        position: fixed;
        top: 0;
        left: 0;
        width: auto;
        height: 100vh;
    }
    }
</style>