import { useState, useEffect } from "react";
import HeaderWeather from "./Components/HeaderWeather/HeaderWeather";
import InputWeather from "./Components/InputWeather/InputWeather";
import DataWeather from "./Components/DataWeather/DataWeather";
import "./App.css";

function App() {
  const [weatherInput, setWeatherInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isError, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <HeaderWeather 
        title="WEATHER APP"
      />

      <section className="weather-container">
        <div className="app-container">
          <InputWeather 
            weatherInput={weatherInput}
            setWeatherInput={setWeatherInput}
            setWeatherData={setWeatherData}
            setError={setError}
            setLoading={setIsLoading}
          />

          <DataWeather 
            weatherData={weatherData}
            isError={isError}
            loading={isLoading}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
