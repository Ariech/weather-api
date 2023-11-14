const apiKey = "b067ed5c72424299acc131107230311";
const url = "http://api.weatherapi.com/v1";
const apiMethod = "/current.json";

async function callWeatherApi(parameter) {
  try {
    const response = await fetch(
      `${url}${apiMethod}?key=${apiKey}&q=${parameter}`,
    );
    if (!response.error)
      throw new Error("You entered city that does not exist");

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(`${error}`);
  }
}

export { callWeatherApi };
