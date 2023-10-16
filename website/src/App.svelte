<script>
    import { Router, Link, Route } from "svelte-routing"
    import Home from "./routes/Home.svelte"
    import Aicontentfy from "./routes/Aicontentfy.svelte"
    import Programozdajovod from "./routes/Programozdajovod.svelte"
    import Marvin from "./routes/Marvin.svelte"
    import Visiontranslate from "./routes/Visiontranslate.svelte"
    import Toothsometomato from "./routes/Toothsometomato.svelte"
    import Notfound from "./routes/Notfound.svelte"
    export let url = "";
</script>
  
<Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/works/aicontentfy" component={Aicontentfy} />
    <Route path="/works/programozd-a-jovod" component={Programozdajovod} />
    <Route path="/works/marvin" component={Marvin} />
    <Route path="/works/vision-translate" component={Visiontranslate} />
    <Route path="/works/toothsome-tomato" component={Toothsometomato} />
    <Route component={Notfound} />
</Router>

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
    @media (pointer:coarse) {
      :global(.notshown) {
        opacity: 1 !important;
      }
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
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility; 
      touch-action: pan-y;
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