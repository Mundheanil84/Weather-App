import { API_CONFIG } from '../utils/constants'

// Mock data for demonstration (replace with actual API calls)
const mockCurrentWeather = (city) => ({
  name: city,
  sys: { country: 'Country' },
  main: {
    temp: Math.random() * 30 + 5,
    feels_like: Math.random() * 30 + 5,
    humidity: Math.floor(Math.random() * 50) + 30
  },
  weather: [
    {
      main: ['Clear', 'Clouds', 'Rain', 'Snow'][Math.floor(Math.random() * 4)],
      description: 'Weather condition description',
      icon: ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d'][Math.floor(Math.random() * 8)]
    }
  ],
  wind: { speed: Math.random() * 10 + 1 }
})

const mockForecast = () => {
  const forecast = []
  for (let i = 1; i <= 5; i++) {
    forecast.push({
      dt: Date.now() / 1000 + i * 86400,
      main: {
        temp_max: Math.random() * 30 + 5,
        temp_min: Math.random() * 10 + 5
      },
      weather: [
        {
          description: 'Weather description',
          icon: ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d'][Math.floor(Math.random() * 8)]
        }
      ]
    })
  }
  return { list: forecast }
}

export const weatherAPI = {
  async getCurrentWeather(city) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // In a real implementation, you would use:
    // const response = await fetch(
    //   `${API_CONFIG.BASE_URL}/weather?q=${city}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    // )
    // if (!response.ok) throw new Error('City not found')
    // return response.json()
    
    return mockCurrentWeather(city)
  },

  async getForecast(city) {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Real implementation:
    // const response = await fetch(
    //   `${API_CONFIG.BASE_URL}/forecast?q=${city}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    // )
    // if (!response.ok) throw new Error('Forecast not available')
    // return response.json()
    
    return mockForecast()
  }
}