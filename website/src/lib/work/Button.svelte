<script>
    export let url = ""
    export let text = ""

</script>
<a href="{url}" target="_blank">
    <span>{text}</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
</a>
<style>
    a {
        color: var(--main-brand-color);
        border: solid 1px var(--main-brand-color);
        border-radius: var(--main-border-radius);
        font-size: 14px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        width: fit-content;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Geist Mono', monospace;
        font-weight: 500;
        transition: .2s;
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--main-tr-color);
        margin: 14px 0;
    }

    a:hover {
        background-color: white;
        border: solid 1px white;
        color: black;
        opacity: .8;
    }
    a svg {
        width: 16px;
        height: 16px;
        margin-top: -2px;
    }
</style>