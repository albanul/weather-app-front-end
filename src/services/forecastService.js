import axios from "axios";

const baseUrl = 'https://localhost:5001/api/weather/forecast';

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
