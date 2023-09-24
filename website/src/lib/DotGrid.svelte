<script lang="ts">
  import { onMount } from 'svelte'
  import {parallaxElems, handleParallax, resetParallax} from "./Parallax"

    let width = 0
    let height = 0
    export let dotDistance = 30
    export let dotSize = 4
    export let animation = "basic"
    let totalDist = dotDistance + dotSize

    function arrayTo2D(array, n) {
        const result = [];
        for (let i = 0; i < array.length; i += n) {
            result.push(array.slice(i, i + n));
        }
        return result;
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    $: cols = Math.floor(width/(dotDistance+dotSize)+1)
    $: rows = Math.floor(height/(dotDistance+dotSize)+1)
    let dots = []
    $: horizontalRemainder = (width - cols*totalDist) / 2
    $: verticalRemainder = (height - rows*totalDist) / 2
    $: dotCount = cols * rows
    $: dotMatrix = arrayTo2D(dots, rows)

    $: getTop = (index: number) => {
        const nthRow = Math.floor((index+1)/cols)
        return nthRow*totalDist+verticalRemainder
    }

    $: getLeft = (index: number) => {
        return (index % cols)*totalDist-dotSize
    }

    /*for (const [colIndex, col] of dotMatrix.entries()) {
            for (const [dotIndex, dot] of col.entries()) {
                if (colIndex % 2) {
                    dot.setAttribute("class","dot-active")
                }
            }
        }*/
    let currentAnimation
    const generateRandom = () => {
        for (const [colIndex, col] of dotMatrix.entries()) {
            for (const [dotIndex, dot] of col.entries()) {
                if (getRandomInt(8) === 0) {
                    dot.setAttribute("class","dot-active")
                } else {
                    dot.setAttribute("class","dot-inactive")
                }
            }
        }
    }
    $: if (animation === "random" && dotMatrix.length) {
        currentAnimation = setInterval(generateRandom, 100)
    }

onMount(() => {
    const element = document.querySelector(".dotgrid-cont")
    if (element) {
        width = element.clientWidth;
        height = element.clientHeight;
    }
    })
</script>

<div class="dotgrid-cont" data-parallax="-0.5" bind:this="{parallaxElems[0]}">
    {#each Array.from(Array(dotCount-1).keys()) as index}
        <div class="dot" style="width: {dotSize}px; height: {dotSize}px; position: absolute; top: {getTop(index)}px; left: {getLeft(index)}px;" bind:this="{dots[index]}">
        </div>
    {/each}
</div>

<style>
    .dotgrid-cont {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left:0;
        z-index: 0;
    }
    .dot-active {
        background-color: var(--main-brand-color);
        z-index: 0;
    }
    .dot-half-active {
        background-color: rgba(255,68,229,0.5);
        z-index: 0;
    }
    .dot-inactive {
        background-color: rgba(255,255,255,0.1);
        z-index: 0;
    }
</style>