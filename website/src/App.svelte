<script>
    import { Route } from "tinro"
    import Home from "./routes/Home.svelte"
    import Work from "./routes/Work.svelte"
    import Aicontentfy from "./routes/Aicontentfy.svelte"
    import XSvalley from "./routes/XSvalley.svelte"
    import Programozdajovod from "./routes/Programozdajovod.svelte"
    import Marvin from "./routes/Marvin.svelte"
    import Visiontranslate from "./routes/Visiontranslate.svelte"
    import Transition from "./lib/Transition.svelte"
    import Notfound from "./routes/Notfound.svelte"
    import Cv from "./routes/CV.svelte";
    import ProjectArchive from "./routes/ProjectArchive.svelte";

</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap" rel="stylesheet">
<div id=app>
  <main>
  <Route>
    <Transition />
    <Route path="/">
        <Home />
    </Route>
    <Route path="/cv">
      <Cv />
    </Route>
    <Route path="/project-archive">
      <ProjectArchive />
    </Route>
    <Route path="/work/*">
        <Route path="/">
            <Work />
        </Route>
        <Route path="/aicontentfy">
            <Aicontentfy />
        </Route>
        <Route path="/xsvalley">
            <XSvalley />
        </Route>
        <Route path="/programozd-a-jovod">
            <Programozdajovod />
        </Route>
        <Route path="/marvin">
            <Marvin />
        </Route>
        <Route path="/vision-translate">
            <Visiontranslate />
        </Route>
    </Route>
    <Route fallback>
      <Notfound />
    </Route>
  </Route>
  </main>
</div>

<!-- Global styles -->
<style>
    :global(:root) {
      --main-brand-color: rgb(255,68,229);
      --main-brand-color-alt: rgb(216, 58, 195);
      --main-border-radius: 5px;
      --dark-border: solid 1px rgba(10, 10, 10, 0.102);
      --main-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
      --main-tr-color: rgba(5,5,46,.35);
      --backdrop-filter: blur(16px);
    }

    :global(h2) {
      font-weight: 550;
      font-size: 22px;
    }

    :global(p, h1, h2, h3, h4, h5, h6) {
      color: rgba(255,255,255, 0.8);
      font-family: 'Geist', sans-serif;
      margin: 0;
    }
    
    :global(.section-title) {
        color: rgba(255,255,255, 0.8);
        font-family: 'Geist Mono', monospace;
        text-transform: uppercase;
        font-weight: 550;
        margin: 0;
        float: right;
    }

    :global(a) {
      color: var(--main-brand-color);
      font-family: 'Geist', sans-serif;
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
  
    :global(body) {
      overflow-x: hidden;
      overflow-y: scroll !important;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility; 
      touch-action: pan-y;
    }
  
    :global(::-webkit-scrollbar){
      width: 3px;
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