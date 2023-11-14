<script>
    import viewport from '../useViewportAction'

    export let title = ""
    export let subsections = []
    let inView = false
</script>

<div class="text-section {inView ? "in-view" : "out-view"}"
    use:viewport
    on:enterViewport={() => {inView = true}}
    on:exitViewport={() => {inView = false}}>
    <div class="title"><h3>{title}</h3></div>
    <div class="body">
        <p><slot /></p>
        {#if subsections}
        <div class="subsections">
            {#each subsections as { title, elems}}
                <div class="sub-elem">
                    <h4>{title}</h4>
                    {#each elems as elem}
                        <p>{elem}</p>
                    {/each}
                </div>
            {/each}
        </div>
        {/if}
    </div>
</div>

<style>
    /* subsections */
    .subsections {
        width: 100%;
        display: flex;
        padding: 0 20px 20px 20px;
    }
    .sub-elem h4 {
        font-size: 22px;
        font-weight: bold;
        margin: 0 0 5px 0;
    }
    .sub-elem p {
        padding: 0;
        margin: 0;
        border: none;
    }
    .sub-elem {
        margin: 0 52px 0 0;
        padding: 8px 0 0 0;
        border-top: solid 1px rgba(255,255,255,0.6);
    }

    /* rest */
    .text-section {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 40px 0;
    }
    h3 {
        color: var(--main-brand-color);
        font-size: 22px;
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
        border-left: solid 1px var(--main-brand-color);
    }
    p {
        font-size: 20px;
        line-height: 1.6;
        padding: 16px;
    }
    :global(.out-view) {
        opacity: 0.4;
        filter: grayscale();
        transition: 1s;
    }
    :global(.in-view) {
        opacity: 1;
        transition: 0.5s;
        transition-delay: 0.4s;
    }
    @media (max-width: 1000px) {
        .text-section {
            display: block;
        }
        .title {
            padding: 0 16px 0 16px;
        }
        .title h3 {
            float: left;
            padding: 14px 0;
            margin: 0 0 14px 0;
            border-bottom: solid 1px var(--main-brand-color);
            width: 100%;
        }
        .body {
            border-left: none;
        }
    }
</style>