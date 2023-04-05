import React, { useState } from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import BackgroundImage from "./BackgroundImage";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [location, setLocation] = useState(props.defaultLocation);

  function search() {
    //OpenWeather API call
    const apiKey = "4a3d84f7f5a3938304bb369a18a3daff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocationSearch(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = "4a3d84f7f5a3938304bb369a18a3daff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    //Displaying the Weather Forecast Data

    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      iconCode: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocationSearch);
  }

  if (weatherData.loaded) {
    return (
      <BackgroundImage iconCode={weatherData.iconCode}>
        <div className="Weather">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row search-form d-table">
                <div className="search-wrap">
                  <div className="col-8 d-table-cell">
                    <input
                      type="search"
                      className="search-input form-control"
                      placeholder="Search for location"
                      onChange={updateLocation}
                    />
                  </div>
                  <div className="col-2 d-table-cell">
                    <button type="submit" className="btn">
                      {" "}
                      <FaSistrix className="search-icon" />
                    </button>
                  </div>
                </div>
                <div className="col-2 d-table-cell">
                  <button
                    type="submit"
                    className="location-btn"
                    title="Weather for a current location"
                    onClick={getCurrentLocation}
                  >
                    {" "}
                    <SlLocationPin />
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} unit="celsius" />
          </div>
          <Footer />
        </div>
      </BackgroundImage>
    );
  } else {
    search();
    return <InfinitySpin width="700" color="white" />;
  }
}
