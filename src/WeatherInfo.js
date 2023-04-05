import React, { useState } from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import DailyForecast from "./DailyForecast";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState(props.unit);

  function changeUnit(event) {
    event.preventDefault();
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  }

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="weather-info">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
          <p className="text-capitalize">{props.data.description}</p>
          <div className="d-flex main-conditions">
            <WeatherIcon
              code={props.data.iconCode}
              alt={props.data.description}
              size="120"
            />
            <div className="temperature">
              <span className="temperature-value">
                <Temperature celsius={props.data.temperature} unit={unit} />
              </span>
              <span className="unit ms-1">
                <span
                  className={unit === "celsius" ? "active" : "opacity-75"}
                  onClick={changeUnit}
                >
                  °C |
                </span>
                <span
                  className={unit === "fahrenheit" ? "active" : "opacity-75"}
                  onClick={changeUnit}
                >
                  {" "}
                  °F
                </span>
              </span>
            </div>
          </div>

          <div className="weather-description mt-4">
            <span className="weather-details me-4">
              Feels like: {props.data.feelsLike}°
            </span>
            <span className="weather-details me-4">
              Humidity: {props.data.humidity}%{" "}
            </span>
            <span className="weather-details">
              Wind: {props.data.wind} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-5 forecast-section">
        <DailyForecast coordinates={props.data.coordinates} unit={unit} />
      </div>
    </div>
  );
}
