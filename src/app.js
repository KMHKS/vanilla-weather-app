function displayTemperature (response); {
  let temperatureElement = document.querySelector()
  let cityElement = document.querySelector();
  temperatureElement.innerHTML = Math.round
  (response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}



let apiKey = "d58f3146b0a0fc1ocbt58fad1a6c4e24";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);