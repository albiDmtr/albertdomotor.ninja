export let parallaxElems = []

let interval
export const disableEffect = () => {
    console.log("vau")
    clearInterval(interval)
}
export const enableEffect = () => {
    console.log("active")
    interval = setInterval(updateParallax, 30)
}

let mouseX = 0
let mouseY = 0
let floatX = 0
let floatY = 0
let grad = 0
let windowMidX = window.innerHeight/2
let windowMidY = window.innerWidth/2
let parallaxMultiplier = 0.01

export let handleParallax = (e) => {
mouseX = e.clientX
mouseY = e.clientY
}
export const enableNoFloat = () => {
    handleParallax = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        parallaxElems.forEach((elem) => {
            const zIndex = parseFloat(elem.getAttribute("data-parallax"))
            elem.style.transform = `translateX(${(mouseX-windowMidX)*parallaxMultiplier*zIndex}px) translateY(${(mouseY-windowMidY)*parallaxMultiplier*zIndex}px)`
        })
    }
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