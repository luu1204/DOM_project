const ROJO = document.getElementById("rojo")
const VERDE = document.getElementById("verde")
const AZUL = document.getElementById("azul")
const BODY = document.querySelector("body")
const TRANSPARENCIA = document.querySelector("#transparencia")

let red = 0
let blue = 0
let green = 0 
let tr = 0

ROJO.addEventListener("mousemove", (evt)=>{
    red = evt.target.value
    
    BODY.style.backgroundColor = `rgba(${red}, ${green},${blue},${tr})`
    
})

VERDE.addEventListener("mousemove", (evt)=>{
    green= evt.target.value
    
    BODY.style.backgroundColor = `rgba(${red}, ${green},${blue},${tr})`
    
})

AZUL.addEventListener("mousemove", (evt)=>{
    blue = evt.target.value
    
    BODY.style.backgroundColor = `rgba(${red}, ${green},${blue},${tr})`
})

TRANSPARENCIA.addEventListener("mousemove", (evt)=>{
    tr = evt.target.value
    BODY.style.backgroundColor = `rgba(${red}, ${green},${blue},${tr})`
})

BODY.style.backgroundColor = `rgba(${red}, ${green},${blue},${tr})`
