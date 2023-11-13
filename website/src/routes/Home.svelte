<script>
  import Opening from "../lib/Opening.svelte"
  import Menu from "../lib/Menu.svelte"
  import Cursor from "../lib/Cursor.svelte"
  import About from "../lib/About.svelte"
  import Work from "../lib/Work.svelte"
  import Contact from "../lib/Contact.svelte"
  import Footer from "../lib/Footer.svelte"
  import { inject } from '@vercel/analytics'
  import { killLenis, newLenis } from "../lib/helpers"
 
  inject()

  killLenis()
  newLenis(0.1, 3)

</script>
<svelte:head>
  <title>Albert Dömötör – Software Engineer</title>
</svelte:head>
<Cursor />
<Menu />
<Opening />
<About />
<Work />
<Contact />
<Footer />