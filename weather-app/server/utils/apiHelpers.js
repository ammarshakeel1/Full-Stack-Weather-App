const axios = require('axios');

const getWeatherData = async (location) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  
  try {
    console.log('Making request to OpenWeatherMap API:', url);
    const response = await axios.get(url);
    console.log('OpenWeatherMap API response status:', response.status);
    return response.data;
  } catch (error) {
    console.error('Error in getWeatherData:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : 'Error fetching current weather');
  }
};

const getForecastData = async (location) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;
  
  try {
    console.log('Making request to OpenWeatherMap Forecast API:', url);
    const response = await axios.get(url);
    console.log('OpenWeatherMap Forecast API response status:', response.status);
    return response.data;
  } catch (error) {
    console.error('Error in getForecastData:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : 'Error fetching forecast data');
  }
};

module.exports = { getWeatherData, getForecastData }; 