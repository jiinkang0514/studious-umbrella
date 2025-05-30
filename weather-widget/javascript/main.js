let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");
let image = document.querySelector("img");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

const getWeatherData = (zip) => {
    const API_KEY = config.WEATHER_API_KEY; // Your actual API key (from config.js)
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            let local_weather_data = data;

            // Update city name and temperature
            CITY_NAME.textContent = local_weather_data.name;
            let weather_in_celsius = Math.round(local_weather_data.main.temp - 273.15);
            CITY_TEMP.textContent = weather_in_celsius + " °C";

            // Update weather icon
            let WEATHER_ICON = local_weather_data.weather[0].icon;
            image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`);
        })
        .catch(error => {
            console.error("Failed to fetch weather data:", error);
            CITY_NAME.textContent = "Invalid ZIP code or API issue";
            CITY_TEMP.textContent = "--";
            image.setAttribute('src', ''); // clear the image
        });

    form.reset();
    input.focus();
};

const getZipcode = (e) => {
    e.preventDefault();
    let ZIP_CODE = input.value.trim();
    if (ZIP_CODE) {
        getWeatherData(ZIP_CODE);
    }
};

btn.addEventListener('click', getZipcode);
