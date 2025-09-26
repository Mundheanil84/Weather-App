import React from 'react'
import { WEATHER_ICONS, DAYS_OF_WEEK } from '../../utils/constants'
import './Forecast.css'

const Forecast = ({ data }) => {
  if (!data || !data.list) return null

  // Get forecast for next 5 days (one reading per day)
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0).slice(0, 5)

  return (
    <div className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt * 1000)
          const dayName = index === 0 ? 'Today' : DAYS_OF_WEEK[date.getDay()]
          
          return (
            <div key={day.dt} className="forecast-item">
              <div className="forecast-day">{dayName}</div>
              <div className="forecast-icon">
                {WEATHER_ICONS[day.weather[0].icon] || '🌈'}
              </div>
              <div className="forecast-temps">
                <span className="forecast-max">{Math.round(day.main.temp_max)}°</span>
                <span className="forecast-min">{Math.round(day.main.temp_min)}°</span>
              </div>
              <div className="forecast-desc">
                {day.weather[0].description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast