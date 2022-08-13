const API_KEY = '7b1169cde24bcd40dba9a6e5f693c490';

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const icon = data.weather[0].icon;
            weather.innerHTML = `<img src='http://openweathermap.org/img/wn/${icon}.png'>${data.weather[0].main} / ${data.main.temp}˚C`;
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
        });
}
function onGeoError() {
    console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
