const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


function onGeoOk(position){

const lat = position.coords.latitude ;
const lon = position.coords.longitude ;
const API_KEY= "7f29639992950ec6780ad5cba442cc1a";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
console.log(url);

fetch(url)


    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `Today's weater : ${data.weather[0].main} / ${data.main.temp}도`;
});

}

function onGeoError() {

alert("Can't find. No weather for U.");

}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);