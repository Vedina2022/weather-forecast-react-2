import React, { useState } from "react";
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
      <div className="col-7">
        <div className="weather-info">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
          <p className="text-capitalize">{props.data.description}</p>
          <div className="d-flex">
            <WeatherIcon
              code={props.data.iconCode}
              alt={props.data.description}
              size="90"
            />
            <div className="temperature">
              <span className="temperature-value">
                <Temperature celsius={props.data.temperature} unit={unit} />
              </span>
              <span className="unit">
                <span
                  className={unit === "celsius" ? "active" : ""}
                  onClick={changeUnit}
                >
                  °C |
                </span>
                <span
                  className={unit === "fahrenheit" ? "active" : ""}
                  onClick={changeUnit}
                >
                  {" "}
                  °F
                </span>
              </span>
            </div>
          </div>
          <span className="me-4">Humidity: {props.data.humidity}% </span>
          <span>Wind: {props.data.wind} km/h</span>
        </div>
      </div>
      <div className="col-5">
        <DailyForecast coordinates={props.data.coordinates} unit={unit} />
      </div>
    </div>
  );
}
