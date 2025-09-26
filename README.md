
# ⛅ Weather App

Weather App is a clean and responsive single-page web application that provides real-time weather data and forecasts for cities anywhere in the world. Built with React + Vite and integrated with OpenWeatherMap API, it balances performance, usability, and aesthetics.

![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Vite](https://img.shields.io/badge/Vite-4.2.0-646CFF)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellowgreen)  
![API](https://img.shields.io/badge/OpenWeatherMap-API-orange)

---

## 🔗 Links

- **Live Demo**: [Weather App](https://weather-app-one-zeta-27.vercel.app/)  
- **Repository**: [github.com/Mundheanil84/Weather-App](https://github.com/Mundheanil84/Weather-App)  
- **Documentation (Project PDF / details)**: *(You can add link here later)*  

---

## 🌟 Features

### 📍 Location & City Search
- Automatically detect user’s current geolocation to show weather  
- Search weather by city name  
- Graceful error handling when city not found or network issues  

### 🌡️ Weather Display
- Display of temperature, humidity, pressure, and weather description  
- Weather icons representing conditions (clear, clouds, rain, etc.)  
- Optionally extended forecasts (e.g. 5-day)  

### 📱 User Experience
- Fully responsive — works on desktop, tablet, and mobile  
- Clean minimalist design  
- Loading indicators while data is being fetched  

### 💾 Persistence
- Stores the last searched city in `localStorage`, so the app remembers it after reload  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)  
- npm or yarn  
- Browser that supports Geolocation API  

### Installation

```bash
# Clone the repository
git clone https://github.com/Mundheanil84/Weather-App.git
cd Weather-App

# Install dependencies
npm install

# Run the development server
npm run dev
````

Open [http://localhost:5173](http://localhost:5173) (or the port Vite uses) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
weather-app/
├── public/                     # Static assets; index.html, icons etc.
├── src/
│   ├── components/             # React components
│   │   ├── SearchBar.jsx
│   │   ├── WeatherDisplay.jsx
│   │   ├── Forecast.jsx
│   │   └── Loader.jsx
│   ├── services/               # API service / fetch logic
│   │   └── weatherApi.js
│   ├── utils/                   # Utility/helper functions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

---

## 🧪 Testing

```bash
# Run test suite
npm test

# Run in watch mode
npm run test:watch
```

Test coverage includes:

* Component rendering
* API integration & error handling
* LocalStorage persistence
* User interactions

---

## 🏗️ Tech Stack

* **Frontend:** React
* **Bundler / Build Tool:** Vite
* **Styling:** CSS (you can integrate Tailwind or CSS modules)
* **API:** OpenWeatherMap
* **Geolocation:** Browser Geolocation API

---

## 🎯 How to Use

1. **Allow location access** when prompted to get weather for your current location.
2. Or **search by city name** to see weather of that city.
3. View detailed weather metrics.
4. Use the **same city on reload** thanks to stored persistence.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a Pull Request

Please include tests and update documentation as needed.

---

## 🙏 Acknowledgments

* **OpenWeatherMap** — for providing weather data
* **React & Vite** — for a fast, modern frontend stack
* **Browser Geolocation API** — for location-based weather

---

Made with ❤️ by **Anil Mundhe**
B.Tech in Electrical Engineering, JSPM’s Rajarshi Shahu College of Engineering

