function showTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let temperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let city = searchInputElement.value;

  let apiKey = "94a0dd46893159096ot0afa98ccebd36";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);

// const apiKey = "94a0dd46893159096ot0afa98ccebd36";

// function fetchWeatherData(city) {
//   const url = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(
//     city
//   )}&units=metric&appid=${apiKey}`;

//   axios
//     .get(url)
//     .then((response) => {
//       const cityName = response.data.city.name;
//       const temp = response.data.main.temp;

//       document.getElementById("city").textContent = cityName;
//       document.getElementById("temp").textContent = `${temp}°C`;
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       document.getElementById("error-message").textContent =
//         "Error fetching data. Please try again.";
//     });
// }
