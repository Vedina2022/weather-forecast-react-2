import React, { useState } from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";

import { InfinitySpin } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [location, setLocation] = useState(props.defaultLocation);

  function search() {
    //OpenWeather API call
    const apiKey = "4a3d84f7f5a3938304bb369a18a3daff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    //Displaying the Weather Forecast Data
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control w-100 search-input no-outline"
                placeholder="Search for location"
                onChange={updateLocation}
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

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <InfinitySpin width="700" color="white" />;
  }
}
