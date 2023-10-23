<script>
    import { fly } from 'svelte/transition';
    export let active = false
    export const toggleFlush = () => {
        active = !active
    }
</script>

<div class="main-flush">

</div>

<style>
    .main-flush {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 900;
        background-color: var(--main-brand-color);
        transition: 0.5s;
   }

</style>