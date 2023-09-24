<script>
    let mouseX = 0
    let mouseY = 0
    let cursorElem
  
    function handleMouseMove(event) {
      mouseX = event.clientX
      mouseY = event.clientY
      cursorElem.style.top = `${mouseY}px`
      cursorElem.style.left = `${mouseX}px`
    }

  </script>
  
  <svelte:window on:mousemove={handleMouseMove}/>
  <div class="cursor" bind:this="{cursorElem}"></div>

  <style>
    :global(html) {
        cursor: none;
    }
    .cursor {
        pointer-events: none;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 25px;
        height: 25px;
        margin-left: -12.5px;
        margin-top: -12.5px;
        border-radius: 20px;
        backdrop-filter: invert(80%);
        z-index: 10000;
        background: rgba(255,68,229,0.6);
    }
    @media (hover: none){
      .cursor {
        display: none;
      }
    }
  </style>