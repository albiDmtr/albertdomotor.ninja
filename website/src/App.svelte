<script>
  import Opening from "./lib/Opening.svelte"
  import Menu from "./lib/Menu.svelte"
  import Cursor from "./lib/Cursor.svelte"
  import About from "./lib/About.svelte"
  import Work from "./lib/Work.svelte"
  import Contact from "./lib/Contact.svelte"
  import Footer from "./lib/Footer.svelte"
  import Loading from "./lib/Loading.svelte"
  import Lenis from '@studio-freight/lenis'
  import { inject } from '@vercel/analytics';
 
  inject();

  const lenis = new Lenis({
        lerp: 0.05,
        smooth: true,
        direction: "vertical",
        wheelMultiplier: 3
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
</script>

<svelte:window />
<!-- <DotGrid dotDistance={40} dotSize={4} animation={"random"}/> -->

<Loading />
<Cursor />
<Menu />
<Opening />
<About />
<Work />
<Contact />
<Footer />

<!-- Global styles -->
<style>
  :global(.notshown) {
    transition: 2s;
    opacity: 0;
  }
  :global(.shown) {
    transition: 2s;
    opacity: 1;
  }

  :global(.focusin) {
    opacity: 1;
    transition: .5s;
  }
  :global(.focusout) {
    opacity: 0;
    transition: .5s;
  }

  :global(:nth-child(1)) { --nth-child: 1 }
  :global(:nth-child(2)) { --nth-child: 2 }
  :global(:nth-child(3)) { --nth-child: 3 }
  :global(:nth-child(4)) { --nth-child: 4 }
  :global(:nth-child(5)) { --nth-child: 5 }
  :global(:nth-child(6)) { --nth-child: 6 }
  :global(:nth-child(7)) { --nth-child: 7 }
  :global(:nth-child(8)) { --nth-child: 8 }
  :global(:nth-child(9)) { --nth-child: 9 }
  :global(:nth-child(10)) { --nth-child: 10 }

  :global(:root) {
    --main-brand-color: rgb(255,68,229);
  }
  :global(body) {
    width: 100vw;
    overflow-x: hidden;
  }


  :global(::-webkit-scrollbar){
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #000;
  }
 
  :global(::-webkit-scrollbar-thumb) {
    background: var(--main-brand-color);
    transition: .2s;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: rgba(255,255,255,0.8)
  }

  :global(html) {
    background-color: #000;
  }
  
  :global(*) {
        opacity: 1;
  }

  :global(.inactive) {
        transition: 0.3s !important;
        transition-timing-function: ease-out;
        opacity: 0 !important;
  }

  /* Dot grid */
  :global(.dot-active) {
        background-color: var(--main-brand-color);
        z-index: 0;
        transition: .5s;
  }
  :global(.dot-half-active) {
        background-color: rgba(255,68,229,0.5);
        z-index: 0;
        transition: .5s;
  }
  :global(.dot-inactive) {
      background-color: rgba(255,255,255,0.1);
      z-index: 0;
      transition: .5s;
  }
</style>