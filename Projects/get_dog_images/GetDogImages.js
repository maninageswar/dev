let dog_container=document.querySelector(".container")

const getdogimage=()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response=>response.json()).then(json=>dog_container.innerHTML=`<img src='${json.message}' alt="dog image" width=500; height=500>`)   
}
