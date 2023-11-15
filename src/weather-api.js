const apiKey = "b067ed5c72424299acc131107230311";
const url = "http://api.weatherapi.com/v1";
const apiMethod = "/current.json";

const processResponse = (weatherData) => {
  const {
    location: { name: city },
    current: {
      temp_c: temperature,
      feelslike_c: feelsLike,
      humidity,
      wind_kph: wind,
    },
  } = weatherData;

  return { city, temperature, feelsLike, humidity, wind };
};

async function callWeatherApi(parameter) {
  try {
    const response = await fetch(
      `${url}${apiMethod}?key=${apiKey}&q=${parameter}`,
    );
    if (!response.ok) alert("You entered the city that does not exist");

    const responseData = processResponse(await response.json());
    return responseData;
  } catch (error) {
    return `${error}`;
  }
}

export default callWeatherApi;
