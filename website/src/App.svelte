<script>
    import { Route, router } from "tinro"
    import Home from "./routes/Home.svelte"
    import Work from "./routes/Work.svelte"
    import Aicontentfy from "./routes/Aicontentfy.svelte"
    import Programozdajovod from "./routes/Programozdajovod.svelte"
    import Marvin from "./routes/Marvin.svelte"
    import Visiontranslate from "./routes/Visiontranslate.svelte"
    import Toothsometomato from "./routes/Toothsometomato.svelte"
    import CV from "./routes/CV.svelte"
    import { fade } from 'svelte/transition'
    import Notfound from "./routes/Notfound.svelte"
    import Cv from "./routes/CV.svelte";
    export let url = ""

    router.subscribe( _ => {window.scrollTo(0, 0);})
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<div id=app>
  <main>
    <Route path="/">
        <Home />
    </Route>
    <Route path="/cv">
      <Cv />
    </Route>
    <Route path="/work/*">
        <Route path="/">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Work />
          </div>
        </Route>
        <Route path="/aicontentfy">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Aicontentfy />
          </div>
        </Route>
        <Route path="/programozd-a-jovod">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Programozdajovod />
          </div>
        </Route>
        <Route path="/marvin">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Marvin />
          </div>
        </Route>
        <Route path="/vision-translate">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Visiontranslate />
          </div>
        </Route>
        <Route path="/toothsome-tomato">
          <div in:fade={{duration: 1200}} out:fade={{duration: 500}}>
            <Toothsometomato />
          </div>
        </Route>
    </Route>
    <Route fallback>
      <Notfound />
    </Route>
  </main>
</div>

<!-- Global styles -->
<style>
    :global(p, h1, h2, h3, h4, h5, h6) {
      color: white;
      font-family: 'Inter', sans-serif;
    }
    :global(a) {
      color: var(--main-brand-color);
      font-family: 'Inter', sans-serif;
    }
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
        opacity: 0.6 !important;
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
      --main-brand-color-08: rgba(255,68,229,0.9);
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

</style>