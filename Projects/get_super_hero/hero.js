let container=document.querySelector(".container")
let HN=document.querySelector(".imagetext")
let btnPowerStats=document.querySelector(".getpowerstats")
let ShowPowerStats=document.querySelector(".show_power_stats")
let input=document.querySelector("#input")


// ****************************  THE BELOW CODE IS IMPORTANT TO UNDERSTAND HOW TO GIVE VARIABLES IN URLS    ***************************
const token='10223569763528853'
const base_url=`https://www.superheroapi.com/api.php/${token}`

const heroimage=()=>{
    id=Math.floor(Math.random() * 732)
    fetch(`${base_url}/${id}`).then(response=>response.json())
    .then(json=>{
        container.innerHTML=`<img src='${json.image.url}' alt="hero image" width=500; height=500>`
        HN.innerHTML=`${json.name}</h2>`
        btnPowerStats.onclick=()=>{
            console.log(json.powerstats)
            let powerstats=json.powerstats
            keys=Object.keys(powerstats)
            for (let i of keys){
                // console.log(i+":"+powerstats[`${i}`])
                ShowPowerStats.innerHTML+=`<p>${i} : ${powerstats[`${i}`]}</p>`
            }
        }
    })
}


const Searchimage=()=>{
    const hero=input.value
    fetch(`${base_url}/search/${hero}`).then(response=>response.json())
    .then(json=>{
        const hero_name=`<h2>${json.results[0].name}</h2>`
        const hero_image=`<img src='${json.results[0].image.url}' alt="hero image" width=500; height=500>`
        container.innerHTML=`${hero_image}`
        HN.innerHTML=`${hero_name}</h2>`
    })
    
}

// btnPowerStats.onclick=()=>{
//     console.log("you click")
// }
