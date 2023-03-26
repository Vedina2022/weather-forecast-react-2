import React, { useState } from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    //Displaying the Weather Forecast Data
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control w-100 search-input no-outline"
                placeholder="Search for location"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn">
                {" "}
                <FaSistrix className="search-icon" />
              </button>
            </div>{" "}
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <p>Friday, 10:50</p>
        <p className="text-capitalize">{weatherData.description}</p>
        <div className="row mt-4">
          <div className="col-6 d-flex">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind: {weatherData.wind} km/h</p>
          </div>
        </div>
        <footer>
          This project was coded by Nadiia Kyshinska and is{" "}
          <a href="https://github.com/Vedina2022/weather-forecast-react-2">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    //OpenWeather API call
    const apiKey = "4a3d84f7f5a3938304bb369a18a3daff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <InfinitySpin width="500" color="white" />;
  }
}
