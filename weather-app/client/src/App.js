import React, { useState } from 'react';
import axios from 'axios';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (location) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`${API_URL}/weather`, {
        params: { location }
      });
      setWeatherData(response.data.currentWeather);
      // Extract the list array from the forecast data
      setForecastData(response.data.forecast.list || []);
    } catch (err) {
      setError('Could not fetch weather data. Please check the location and try again.');
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const response = await axios.get(`${API_URL}/weather/export`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'weather-data.json');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Could not export weather data.');
      console.error('Error exporting data:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <button onClick={handleExport} className="export-button">
          Export Data
        </button>
      </header>
      <main>
        <LocationInput onSearch={handleSearch} />
        <ErrorDisplay error={error} />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <WeatherDisplay data={weatherData} />
            <Forecast forecastData={forecastData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
