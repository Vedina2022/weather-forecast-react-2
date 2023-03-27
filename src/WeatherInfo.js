import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>
      <div className="row mt-4">
        <div className="col-6 d-flex">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
