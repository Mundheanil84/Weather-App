import React, { useState, useEffect } from 'react'
import { Search, MapPin } from 'lucide-react'
import './SearchBar.css'

const SearchBar = ({ onSearch, lastSearchedCity, loading }) => {
  const [city, setCity] = useState('')

  useEffect(() => {
    if (lastSearchedCity) {
      setCity(lastSearchedCity)
    }
  }, [lastSearchedCity])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() && !loading) {
      onSearch(city.trim())
    }
  }

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="search-input"
            disabled={loading}
          />
        </div>
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {lastSearchedCity && (
        <div className="last-searched">
          <MapPin size={16} />
          <span>Last searched: {lastSearchedCity}</span>
        </div>
      )}
    </div>
  )
}

export default SearchBar