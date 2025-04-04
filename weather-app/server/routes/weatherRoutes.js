const express = require('express');
const router = express.Router();
const {
  getWeather,
  getSavedWeather,
  updateWeather,
  deleteWeather,
  exportWeatherData
} = require('../controllers/weatherController');

router.get('/', getWeather);
router.get('/saved', getSavedWeather);
router.put('/:id', updateWeather);
router.delete('/:id', deleteWeather);
router.get('/export', exportWeatherData);

module.exports = router; 