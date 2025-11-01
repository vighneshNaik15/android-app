import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Goa"); // default city
  const [weather, setWeather] = useState(null);

  const API_KEY = "997a2a39c5c0562f0ebbfc00a926efb5"; // ✅ your key

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city name!");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        alert("City not found! Please try again.");
        return;
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert("Error fetching weather data. Please check your connection.");
    }
  };

  // ✅ Automatically fetch weather for Goa on page load
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>🌡️ Temperature: {weather.main.temp} °C</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
