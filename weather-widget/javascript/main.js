const API_KEY = config.WEATHER_API_KEY;

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
}
    let local_weather_data = data;
    console.log(local_weather_data);

getWeatherData(); // ← actually calling the function
