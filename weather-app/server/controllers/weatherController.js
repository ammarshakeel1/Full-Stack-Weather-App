const WeatherData = require('../models/WeatherData');
const { getWeatherData, getForecastData } = require('../utils/apiHelpers');

const getWeather = async (req, res) => {
  try {
    const { location } = req.query;
    console.log('Fetching weather for location:', location);

    // Get current weather
    const currentWeather = await getWeatherData(location);
    console.log('Current weather data received:', currentWeather);

    // Get forecast
    const forecast = await getForecastData(location);
    console.log('Forecast data received:', forecast);

    // Try to save to MongoDB, but don't fail if it doesn't work
    try {
      const weatherData = new WeatherData({
        location,
        currentWeather,
        forecast,
        timestamp: new Date()
      });
      await weatherData.save();
      console.log('Weather data saved to MongoDB');
    } catch (dbError) {
      console.error('MongoDB save error (non-critical):', dbError.message);
      // Continue execution even if MongoDB save fails
    }

    res.json({
      currentWeather,
      forecast
    });
  } catch (error) {
    console.error('Error in getWeather:', error);
    res.status(500).json({ 
      message: 'Error fetching weather data',
      error: error.message
    });
  }
};

const getSavedWeather = async (req, res, next) => {
  try {
    const data = await WeatherData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in getSavedWeather:', error);
    next(error);
  }
};

const updateWeather = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = await WeatherData.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedData);
  } catch (error) {
    console.error('Error in updateWeather:', error);
    next(error);
  }
};

const deleteWeather = async (req, res, next) => {
  try {
    const { id } = req.params;
    await WeatherData.findByIdAndDelete(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error in deleteWeather:', error);
    next(error);
  }
};

const exportWeatherData = async (req, res) => {
  try {
    const data = await WeatherData.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) {
    console.error('Error exporting weather data:', error);
    res.status(500).json({ 
      message: 'Error exporting weather data',
      error: error.message
    });
  }
};

module.exports = { getWeather, getSavedWeather, updateWeather, deleteWeather, exportWeatherData }; 