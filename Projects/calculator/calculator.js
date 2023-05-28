let buttons = document.querySelectorAll(".button")
let result = document.querySelector(".result")
let input = document.querySelector(".input")

let number =""
let result_number =0
buttons.forEach(button=>{
    button.onclick=()=>{
        switch(button.innerText){
            case "=":
                result.innerText=eval(input.innerText)
                break
            case "<":
                if (input.innerText){
                    input.innerText=input.innerText.slice(0,-1)
                }
                break
            default:
                number+=button.innerText
                input.innerText=number
        }
    }
})



// if (operations.includes(button.innerText)){
//     // result_number =0
// }