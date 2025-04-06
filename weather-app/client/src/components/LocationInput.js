import React, { useState } from 'react';

const LocationInput = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      setError('');
      onSearch(location);
    }
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Geolocation successful:', { latitude, longitude });
        onSearch(`${latitude},${longitude}`);
        setLoading(false);
      },
      (error) => {
        console.error('Geolocation error:', error);
        setLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Please allow location access to use this feature');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information is unavailable');
            break;
          case error.TIMEOUT:
            setError('Location request timed out');
            break;
          default:
            setError('An error occurred while getting your location');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
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
        <button type="submit" disabled={loading}>Get Weather</button>
      </form>
      <button 
        onClick={handleGeolocation} 
        disabled={loading}
        className={`location-button ${loading ? 'loading' : ''}`}
      >
        {loading ? 'Getting Location...' : 'Use My Location'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LocationInput; 