import React, { useState } from 'react';

const WeatherDisplay = ({ data }) => {
  const [showCelsius, setShowCelsius] = useState(false);

  if (!data) return null;

  const celsiusToFahrenheit = (celsius) => {
    return Math.round((celsius * 9/5) + 32);
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5/9);
  };

  const toggleTemperatureUnit = () => {
    setShowCelsius(!showCelsius);
  };

  const currentTemp = showCelsius ? fahrenheitToCelsius(celsiusToFahrenheit(data.main.temp)) : celsiusToFahrenheit(data.main.temp);
  const feelsLikeTemp = showCelsius ? fahrenheitToCelsius(celsiusToFahrenheit(data.main.feels_like)) : celsiusToFahrenheit(data.main.feels_like);

  return (
    <div className="weather-display">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-main">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
        />
        <div className="temperature">
          <span className="primary">{currentTemp}°{showCelsius ? 'C' : 'F'}</span>
          <span className="secondary"> / {showCelsius ? celsiusToFahrenheit(data.main.temp) : fahrenheitToCelsius(celsiusToFahrenheit(data.main.temp))}°{showCelsius ? 'F' : 'C'}</span>
        </div>
        <p className="description">{data.weather[0].description}</p>
        <button className="temp-toggle" onClick={toggleTemperatureUnit}>
          Switch to {showCelsius ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
      <div className="weather-details">
        <div className="detail">
          <span>Feels like:</span>
          <span>{feelsLikeTemp}°{showCelsius ? 'C' : 'F'}</span>
        </div>
        <div className="detail">
          <span>Humidity:</span>
          <span>{data.main.humidity}%</span>
        </div>
        <div className="detail">
          <span>Wind:</span>
          <span>{Math.round(data.wind.speed)} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay; 