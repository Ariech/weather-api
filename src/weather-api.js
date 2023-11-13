const apiKey = "b067ed5c72424299acc131107230311";
const url = "http://api.weatherapi.com/v1"
const apiMethod = "/current.json"
const parameter = "Paris"

async function callWeatherApi() {
    const response = await fetch(`${url}${apiMethod}?key=${apiKey}&q=${parameter}`);
    const responseData = await response.json();


}


export {callWeatherApi};