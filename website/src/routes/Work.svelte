<script>
    import Home from "./Home.svelte"
    import { scrollToElem } from "../lib/helpers"
 
    function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
        }
    }

    docReady(() => {scrollToElem("work");})
</script>

<Home />