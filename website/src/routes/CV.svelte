<script>
    import CV from '../../assets/CV/CV.pdf'
</script>
<svelte:head>
    <title>CV – Albert Dömötör</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
<body>
    <iframe src="{CV}" class="frame"></iframe>
</body>

<style>
    .frame {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left:0;
        border: none;
    }
    body {
      touch-action: pinch-zoom !important;
    }
</style>