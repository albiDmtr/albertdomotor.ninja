<script>
    export let title = ""
</script>

<div class="text-section">
    <div class="title"><h3>{title}</h3></div>
    <div class="body">
        <p><slot /></p>
    </div>
</div>

<style>
    .text-section {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    h3 {
        color: var(--main-brand-color);
        font-size: 20px;
        font-weight: 800;
        text-wrap: nowrap;
        padding: 16px;
        float: right;
    }
    .title {
        flex-basis: 150px;
    }
    .body {
        flex-grow: 1;
    }
    p {
        font-size: 20px;
        padding: 16px;
        border-left: solid 1px var(--main-brand-color);
    }
</style>