import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <from>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city.."
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>{" "}
        </div>
      </from>
      <h1>Mykolaiv</h1>
      <p>Friday, 10:50</p>
      <p>Sunny</p>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v3/Condition_Card/SunnyDayV3.svg"
            alt="weather-icon"
          />
          -4°C
        </div>
        <div className="col-6">
          <p>Humidity: 93%</p>
          <p>Wind: 12 km/h</p>
        </div>
      </div>
    </div>
  );
}
