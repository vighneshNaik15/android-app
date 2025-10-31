import React, { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    city: "Goa",
    temperature: "31°C",
    condition: "Sunny ☀️",
    humidity: "60%",
    wind: "12 km/h",
  });

  return (
    <div className="app">
      <h1>🌦 Weather App</h1>
      <div className="card">
        <h2>{weather.city}</h2>
        <h3>{weather.condition}</h3>
        <p>🌡 Temperature: {weather.temperature}</p>
        <p>💧 Humidity: {weather.humidity}</p>
        <p>💨 Wind: {weather.wind}</p>
      </div>
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
        (Offline sample data for project demo)
      </p>
    </div>
  );
}

export default App;
