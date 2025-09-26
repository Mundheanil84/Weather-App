import React from 'react'
import { Thermometer, Droplets, Wind, Navigation } from 'lucide-react'
import { WEATHER_ICONS } from '../../utils/constants'
import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
  if (!data) return null

  const { name, sys, main, weather, wind } = data

  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{name}, {sys.country}</h2>
        <div className="weather-main">
          <div className="weather-icon">
            {WEATHER_ICONS[weather[0].icon] || '🌈'}
          </div>
          <div className="temperature">
            {Math.round(main.temp)}°C
          </div>
        </div>
        <p className="weather-description">
          {weather[0].description}
        </p>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <Thermometer className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{Math.round(main.feels_like)}°C</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Droplets className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{main.humidity}%</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Wind className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather