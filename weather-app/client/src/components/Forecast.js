import React, { useState } from 'react';

const Forecast = ({ forecastData }) => {
  const [showCelsius, setShowCelsius] = useState(false);

  if (!forecastData || !Array.isArray(forecastData) || forecastData.length === 0) {
    return null;
  }

  const celsiusToFahrenheit = (celsius) => {
    return Math.round((celsius * 9/5) + 32);
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5/9);
  };

  const toggleTemperatureUnit = () => {
    setShowCelsius(!showCelsius);
  };

  // Group forecast data by day
  const dailyForecasts = forecastData.reduce((acc, item) => {
    if (!item || !item.dt_txt) return acc;
    const date = new Date(item.dt_txt).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <div className="forecast">
      <div className="forecast-header">
        <h2>5-Day Forecast</h2>
        <button className="temp-toggle" onClick={toggleTemperatureUnit}>
          Switch to {showCelsius ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
      <div className="forecast-grid">
        {Object.values(dailyForecasts).map((item, index) => {
          const temp = showCelsius ? fahrenheitToCelsius(celsiusToFahrenheit(item.main.temp)) : celsiusToFahrenheit(item.main.temp);
          return (
            <div key={index} className="forecast-item">
              <p className="date">{new Date(item.dt_txt).toLocaleDateString()}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <div className="temp">
                <span className="primary">{temp}°{showCelsius ? 'C' : 'F'}</span>
                <span className="secondary"> / {showCelsius ? celsiusToFahrenheit(item.main.temp) : fahrenheitToCelsius(celsiusToFahrenheit(item.main.temp))}°{showCelsius ? 'F' : 'C'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast; 