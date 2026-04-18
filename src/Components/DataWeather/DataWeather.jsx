import React, { useEffect } from 'react'
import cloudImg from "./WeatherImage/cloud.jpg";
import rainImg from "./WeatherImage/rain.jpg";
import sunImg from "./WeatherImage/sun.jpg";
import drizzleImg from "./WeatherImage/drizzle.jpg";
import thunderStormImg from "./WeatherImage/thunderstorm.jpg";
import snowImg from "./WeatherImage/snow.jpg";
import hazeImg from "./WeatherImage/haze.jpg";

const DataWeather = ({ weatherData, isError, loading }) => {
  let imageData;

  if (loading) return <p className='weather-status'>Loading...</p>
  if (isError || !weatherData || weatherData.cod === "400") return <p className='weather-status'>City not found</p>;
  
  switch (weatherData?.weather?.[0]?.main) {
    case "Clouds" :
      imageData = cloudImg;
      break;
    
    case "Rain" :
      imageData = rainImg;
      break;
    
    case "Clear" :
      imageData = sunImg;
      break;
      
    case "Drizzle" :
      imageData = drizzleImg;
      break;

    case "Thunder Storm" :
      imageData = thunderStormImg;
      break;

    case "Snow" :
      imageData = snowImg;
      break;

    case "Haze" :
      imageData = hazeImg;
      break;
  }

  return (
      <section className='data-weather'>
        <section className="image-section">
          <img src={imageData} alt="" />
        </section>

        <section className="weather-name">
          <h2>Weather Name : {weatherData?.name}</h2>
        </section>

        <h3>Temperature : {Math.round(weatherData?.main?.temp)}°C</h3>
        <h3>Humidity : {weatherData?.main?.humidity}%</h3>
        <h3>Weather Status : {weatherData?.weather?.[0]?.main}</h3>
      </section>
  )
}

export default DataWeather