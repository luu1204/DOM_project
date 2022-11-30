const INPUT = document.getElementById("input")
const BUTTON = document.getElementById("button")
const SECTION = document.getElementById("section")
const BUTTON_RANDOM = document.getElementById("random")
const SECTION_RANDOM = document.getElementById("section_random")

const api_caller = async (name)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)

    SECTION.insertAdjacentHTML("beforebegin",
    `<article> 
        <img src=${data.sprites.front_default} alt="foto"/>
        <h3>${data.name}</h3>
     </article>`
    )
}

BUTTON.addEventListener("click",()=>{
    let value = INPUT.value
    api_caller(value)
    INPUT.value = ""
})



const all_pokemon = async ()=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
    const data = await response.json()
    let pokemons= data.results
    console.log(pokemons)

    let medida = pokemons.length
    let random = Math.random()*medida
    let redondeo = Math.floor(random)
    let random_pokemon = pokemons[redondeo]
    
    SECTION_RANDOM.insertAdjacentHTML("afterbegin", 
    `<article> 
    <h3>${random_pokemon.name}</h3>
    </article>`)
                
}
BUTTON_RANDOM.addEventListener("click",()=>{
     all_pokemon()
})
