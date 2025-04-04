import React, { useState } from 'react';

const LocationInput = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onSearch(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="location-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location (city, zip, etc.)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      <button onClick={handleGeolocation}>Use My Location</button>
    </div>
  );
};

export default LocationInput; 