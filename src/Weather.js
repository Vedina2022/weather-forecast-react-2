import React from "react";
import "./Weather.css";
import { FaSistrix } from "react-icons/fa";

export default function Weather() {
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
      <h1>Mykolaiv</h1>
      <p>Friday, 10:50</p>
      <p>Sunny</p>
      <div className="row mt-4">
        <div className="col-6 d-flex">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v3/Condition_Card/SunnyDayV3.svg"
            alt="weather-icon"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <p>Humidity: 93%</p>
          <p>Wind: 12 km/h</p>
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
}
