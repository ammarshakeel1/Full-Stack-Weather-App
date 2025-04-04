const mongoose = require('mongoose');

const WeatherDataSchema = new mongoose.Schema({
  location: { type: String, required: true },
  dateRange: {
    start: Date,
    end: Date,
  },
  currentWeather: Object,
  forecast: [Object],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WeatherData', WeatherDataSchema); 