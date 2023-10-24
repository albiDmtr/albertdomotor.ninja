<script>
    import Opening from "../lib/Opening.svelte"
    import Menu from "../lib/Menu.svelte"
    import Cursor from "../lib/Cursor.svelte"
    import About from "../lib/About.svelte"
    import Work from "../lib/Work.svelte"
    import Contact from "../lib/Contact.svelte"
    import Footer from "../lib/Footer.svelte"
    import Loading from "../lib/Loading.svelte"
    import { inject } from '@vercel/analytics';
   
    inject();
  
  </script>
  
  <Loading />
  <Cursor />
  <Menu />
  <Opening />
  <About />
  <Contact />
  <Footer />