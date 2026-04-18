import React, { useEffect } from "react";

const InputWeather = ({ weatherInput, setWeatherInput, setWeatherData, setError, setLoading }) => {
  const API_KEY = "84b154e4e2759bedf08da136cfd40ed3";

  const fetchData = async (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`;
    
    if (!weatherInput.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError("");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <section className="input-section">
      <input
        type="text"
        placeholder="Enter Your City Name..."
        className="input-weather"
        value={weatherInput}
        onChange={(e) => setWeatherInput(e.target.value)}
      />

      <button onClick={() => fetchData(weatherInput)} className="input-search">
        &#128269;
      </button>
    </section>
  );
};

export default InputWeather;
