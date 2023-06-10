leftButton=document.querySelector(".scrollLeft")
rightButton=document.querySelector(".scrollRight")
hourCards=document.querySelector(".wrapper-inside")
search=document.querySelector(".search")
city=document.querySelector("#topinput")
date=document.querySelector("#date")
main=document.querySelector(".main")

const weeks=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
const months=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

leftButton.onclick=()=>{
    let left=document.querySelector(".wrapper-inside")
    left.scrollBy(-375,0)
}

rightButton.onclick=()=>{
    let left=document.querySelector(".wrapper-inside")
    left.scrollBy(375,0)
}

function enter(){
    let CITY=city.value
    let DATE=date.value
    hourCards.innerHTML=``
    var kDate = new Date(DATE);
    actual_date=weeks[kDate.getDay()-1]+","+kDate.getDate()+" "+months[kDate.getMonth()]
    document.querySelector(".showdate").innerText=`${actual_date}`
    get_hourly_weather(CITY,DATE)
}

let get_hourly_weather=async(city,date)=>{
    try {
        let response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b3007fd70b6344e5abe55754230706&q=${city}&days=1&dt=${date}&aqi=no&alerts=no`)
        let result=await response.json()
        console.log(result)
        let hours=result.forecast.forecastday[0].hour
        document.querySelector(".main_image_icon").src=`${result.current.condition.icon}`
        document.querySelector(".main_text_H4").innerText=`${result.current.condition.text}`
        document.querySelector(".main_temp").innerText=`${result.current.temp_c}°`
        document.querySelector(".wind_H4").innerText=`${result.current.wind_kph}`
        document.querySelector(".humidity_H4").innerText=`${result.current.humidity}`
        for (hour of hours){
            const timeString12hr = new Date('1970-01-01T' + hour.time.split(" ")[1] + 'Z').toLocaleTimeString('en-US',{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
            hourCards.innerHTML +=
            `<div class="item">
                <p>${timeString12hr}</p>
                <img src="${hour.condition.icon}" alt="" srcset="">
                <h2>${hour.temp_c}°C</h2>
            </div>`
        }
    } catch (error) {
        console.log(error)
    }
    
}

// <!-- keep the below line to give custom calender the css styles for the below element has been written -->
// let toggle=false
// function calender(calender_icon){
//     toggle=!toggle
//     console
//     if (toggle) {
//         calender_icon.src="./images/cross.png"
//         // search.classList.add("search-before");
//         search.innerHTML+=`<div id="dycalendar"></div>`;
//     } else {
//         calender_icon.src= "./images/calendar.png"
//         // search.classList.remove("search-before");
//         document.getElementById('dycalendar').remove()
//     }
// }