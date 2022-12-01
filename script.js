
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  const doFetch = fetch(fullURL)
  return doFetch.then(response => response.json()) 
}
getWeatherData()

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
    const cityName = document.getElementById("city-name").innerText = weatherData.name
    const weatherType = document.getElementById("weather-type").innerText = weatherData.weather[0].main
    const temp = document.getElementById("temp").innerText = weatherData.main.temp
    const minTemp = document.getElementById("min-temp").innerText = weatherData.main.temp_min
    const maxTemp = document.getElementById("max-temp").innerText = weatherData.main.temp_max
  
}

