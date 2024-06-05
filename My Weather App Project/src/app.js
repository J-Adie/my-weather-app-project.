let now = new Date();
let currentDate = document.querySelector(".current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartuday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let currentCity = document.querySelector(".current-city");

  currentCity.innerHTML = searchInput.value;
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", showCity);

function showTemperature(response) {
  let currentTemperature = document.querySelector(".current-temperature-value");
  currentTemperature.innerHTML = Math.round(response.data.temperature);

  let currentCity = city;
}

let apiKey = "95783ofe75bc9bb0245016aaae0215ta";
let city = document.querySelector("#search-input").value;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}$unit=metric`;

axios.get(apiUrl).then(showTemperature);