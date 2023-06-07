leftButton=document.querySelector(".scrollLeft")
rightButton=document.querySelector(".scrollRight")
hourCards=document.querySelector(".wrapper-inside")



leftButton.onclick=()=>{
    let left=document.querySelector(".wrapper-inside")
    left.scrollBy(-375,0)
}

rightButton.onclick=()=>{
    let left=document.querySelector(".wrapper-inside")
    left.scrollBy(375,0)
}

for (i=5;i<11;i++){
    hourCards.innerHTML +=`<div class="item">item${i}</div>`
}


