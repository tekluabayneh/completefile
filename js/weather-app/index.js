const apikey = "85d09cc8cc3939b9ff5dfc78b7d6a3ea";

const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const weatherContainer = document.querySelector(".weaether-icon");
const errorContainer = document.querySelector(".error");

async function checkweather(setcity) {
  const response = await fetch(apiurl + setcity + `&appid=${apikey}`);
  if (response.status == 404 || response.status == "") {
    errorContainer.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  const data = await response.json();

  const temp = data.main.temp;
  const city = data.name;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const weather = data.weather[0].main;

  if (weather == "Clouds") {
    weatherContainer.src = "images/clouds.png";
  } else if (weather == "Rain") {
    weatherContainer.src = "images/rain.png";
  } else if (weather == "Clear") {
    weatherContainer.src = "images/clear.png";
  } else if (weather == "Snow") {
    weatherContainer.src = "images/snow.png";
  } else if (weather == "wind") {
    weatherContainer.src = "images/wind.png";
  } else if (weather == "dizzele") {
    weatherContainer.src = "images/drizzle.png";
  }

  const getcity = (document.querySelector(".city").innerHTML = city);
  const gettemp = (document.querySelector(".temp").innerHTML =
    Math.round(temp) + "°C");

  const gethumidity = (document.querySelector(
    ".humidity"
  ).innerHTML = `${humidity}%`);
  const getwind = (document.querySelector(".wind").innerHTML = wind);
}

searchButton.addEventListener("click", () => {
  console.log("search btn clicked");
  checkweather(searchInput.value);
  weatherContainer.parentElement.classList.add("weaetherdisplay");
  document.querySelector(".weather").style.display = "block";
  errorContainer.style.display = "none";
});
