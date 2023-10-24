<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<script>
    export let src
    export let alt
</script>

<div>
<img src="{src}" alt="{alt}">
</div>

<style>
    img {
        width: 100%;
        height: auto;
        cursor:zoom-in;
        transition: .2s;
    }
    img:hover {
        transform: scale(1.02);
    }
    div {
        width: 900px;
        padding: 25px 55px;
        min-height: 300px;
        max-height: 600px;
        text-align: center;
        background-color: rgba(5,5,46,.5);
        border: solid 1px var(--main-brand-color);
    }
    p {
        font-family: 'Inter', sans-serif;
        color: white;
        opacity: 0.8;
    }
</style>