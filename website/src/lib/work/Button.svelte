<script>
    import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
    export let url = ""
    export let text = ""

</script>
<a href="{url}" target="_blank">{text}<span><OpenInNew/></span></a>
<style>
    a {
        color: black;
        background-color: var(--main-brand-color);
        padding: 10px 15px 12px 15px;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 4px;
        text-wrap: nowrap;
        text-decoration: none;
        transition: .3s;
        cursor: pointer;
        display: block;
        width: fit-content;
        margin-top: 16px;
    }
    a:hover {
        border: solid 1px white;
        opacity: 0.8;
        background-color: transparent;
        color: white;
    }
    a span {
        font-size: 18px;
        position: relative;
        top: 4px;
        margin-left: 4px;
    }
</style>