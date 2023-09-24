export let parallaxElems = []

let mouseX = 0
let mouseY = 0
let floatX = 0
let floatY = 0
let grad = 0
let windowMidX = window.innerHeight/2
let windowMidY = window.innerWidth/2
let parallaxMultiplier = 0.01

export function handleParallax(e) {
mouseX = e.clientX
mouseY = e.clientY
}

function updateParallax() {
    parallaxElems.forEach((elem) => {
        const zIndex = parseFloat(elem.getAttribute("data-parallax"))
        elem.style.transform = `translateX(${(mouseX-windowMidX+floatX)*parallaxMultiplier*zIndex}px) translateY(${(mouseY-windowMidY+floatY)*parallaxMultiplier*zIndex}px)`
    })
    grad += 1 / 240
    floatX = Math.sin(Math.PI * grad)*500
    floatY = Math.cos(Math.PI*grad)*500
}

setInterval(updateParallax, 50);