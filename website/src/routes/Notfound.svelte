<script>
      import Menu from "../lib/Menu.svelte"
        import Cursor from "../lib/Cursor.svelte"
</script>

<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
<Menu/>
<Cursor />
<div>
    <h1>404</h1>
    <p>Page not found :(</p>
    <a href="/">Go back to main page</a>
</div>
<style>
    h1 {
        font-family: 'Inter', sans-serif;
        color: var(--main-brand-color);
        font-size: 84px;
        margin: 0;
        padding: 0;
    }
    p {
        font-family: 'Inter', sans-serif;
        color: white;
        font-size: 22px;
        opacity: 0.8;
        margin: 0;
        padding: 0;
    }
    a {
        font-family: 'Inter', sans-serif;
        color: var(--main-brand-color);
        font-size: 22px;
        opacity: 0.8;
        margin: 0;
        padding: 0;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        left:0;
        width: 100vw;
        height: 100vh;
    }
</style>