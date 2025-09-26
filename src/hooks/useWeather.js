import { useState } from 'react'
import { weatherAPI } from '../services/weatherAPI'

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (city) => {
    if (!city.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const [currentWeather, forecast] = await Promise.all([
        weatherAPI.getCurrentWeather(city),
        weatherAPI.getForecast(city)
      ])
      
      setWeatherData(currentWeather)
      setForecastData(forecast)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
      setForecastData(null)
    } finally {
      setLoading(false)
    }
  }

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchWeather
  }
}