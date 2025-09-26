import React, { useState, useEffect } from 'react';
import { Search, MapPin, Wind, Droplets, Thermometer } from 'lucide-react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastCity, setLastCity] = useState('');

  // Load last searched city from localStorage
  useEffect(() => {
    const savedCity = localStorage.getItem('lastSearchedCity');
    if (savedCity) {
      setLastCity(savedCity);
      setCity(savedCity);
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock weather data
      const mockWeather = {
        city: city,
        country: 'Country',
        temperature: Math.round(Math.random() * 30 + 5),
        feelsLike: Math.round(Math.random() * 30 + 5),
        description: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
        humidity: Math.round(Math.random() * 50 + 30),
        windSpeed: (Math.random() * 10 + 1).toFixed(1),
        icon: '☀️'
      };

      // Mock forecast data
      const mockForecast = [];
      for (let i = 1; i <= 5; i++) {
        mockForecast.push({
          day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][(new Date().getDay() + i) % 7],
          maxTemp: Math.round(Math.random() * 30 + 5),
          minTemp: Math.round(Math.random() * 10 + 5),
          description: ['Sunny', 'Cloudy', 'Rainy'][i % 3],
          icon: ['☀️', '⛅', '🌧️'][i % 3]
        });
      }

      setWeather(mockWeather);
      setForecast(mockForecast);
      setLastCity(city);
      localStorage.setItem('lastSearchedCity', city);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (description) => {
    const icons = {
      'Sunny': '☀️',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Snowy': '❄️'
    };
    return icons[description] || '🌈';
  };

  return (
    <div className="app-container">
      <div className="weather-app">
        <header className="app-header">
          <h1>Weather Forecast</h1>
          <p>Get accurate weather information for any city</p>
        </header>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="search-input"
              disabled={loading}
            />
            <button type="submit" disabled={loading} className="search-btn">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {lastCity && (
          <div className="last-searched">
            <MapPin size={16} />
            Last searched: {lastCity}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {weather && !loading && (
          <div className="weather-content">
            <div className="current-weather">
              <h2>{weather.city}, {weather.country}</h2>
              <div className="weather-main">
                <div className="weather-icon">{getWeatherIcon(weather.description)}</div>
                <div className="temperature">{weather.temperature}°C</div>
              </div>
              <p className="weather-description">{weather.description}</p>
              
              <div className="weather-details">
                <div className="detail-item">
                  <Thermometer size={20} />
                  <span>Feels like: {weather.feelsLike}°C</span>
                </div>
                <div className="detail-item">
                  <Droplets size={20} />
                  <span>Humidity: {weather.humidity}%</span>
                </div>
                <div className="detail-item">
                  <Wind size={20} />
                  <span>Wind: {weather.windSpeed} m/s</span>
                </div>
              </div>
            </div>

            <div className="forecast">
              <h3>5-Day Forecast</h3>
              <div className="forecast-list">
                {forecast.map((day, index) => (
                  <div key={index} className="forecast-item">
                    <div className="forecast-day">{day.day}</div>
                    <div className="forecast-icon">{day.icon}</div>
                    <div className="forecast-temp">
                      <span className="max-temp">{day.maxTemp}°</span>
                      <span className="min-temp">{day.minTemp}°</span>
                    </div>
                    <div className="forecast-desc">{day.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="welcome-message">
            <p>Enter a city name to get current weather and 5-day forecast</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;