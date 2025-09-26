import React from 'react'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast'
import Loading from '../Loading/Loading'
import './WeatherDisplay.css'

const WeatherDisplay = ({ weatherData, forecastData, loading, error, lastSearchedCity }) => {
  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="weather-display error">
        <div className="error-message">
          <h3>City Not Found</h3>
          <p>Please check the city name and try again.</p>
        </div>
      </div>
    )
  }

  if (!weatherData || !forecastData) {
    return (
      <div className="weather-display placeholder">
        <div className="placeholder-message">
          <h3>Welcome to Weather Forecast</h3>
          <p>Enter a city name to get started{lastSearchedCity && `, or check weather for ${lastSearchedCity}`}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="weather-display">
      <CurrentWeather data={weatherData} />
      <Forecast data={forecastData} />
    </div>
  )
}

export default WeatherDisplay