import "./style.css";
import { callWeatherApi } from "./weather-api";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

async function apiCall() {
  try {
    const data = await callWeatherApi(searchInput.value);
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

searchButton.addEventListener("click", apiCall);
