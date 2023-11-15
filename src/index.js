import "./style.css";
import callWeatherApi from "./weather-api";
import displayApiData from "./weather-view";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

async function apiCall() {
  if (searchInput.value === "") return;

  try {
    const proccesedData = await callWeatherApi(searchInput.value);
    displayApiData(proccesedData);
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", apiCall);
