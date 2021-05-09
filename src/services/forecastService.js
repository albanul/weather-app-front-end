import axios from "axios";

const baseUrl = process.env.VUE_APP_MY_ENV_VARIABLE_WEATHER_API;

const getForecastByCityName = async (cityName) => {
    const response = await axios.get(baseUrl + '?city=' + cityName);
    return response.data;
}

const getForecastByZipCode = async (zipCode) => {
    const response = await axios.get(baseUrl + '?zipCode=' + zipCode);
    return response.data;
}

export default {
    getForecastByCityName,
    getForecastByZipCode
}
