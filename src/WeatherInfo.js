import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>

      <div className="d-flex">
        <WeatherIcon
          code={props.data.iconCode}
          alt={props.data.description}
          size="90"
        />
        <Temperature celsius={props.data.temperature} />
      </div>

      <span className="me-4">Humidity: {props.data.humidity}% </span>
      <span>Wind: {props.data.wind} km/h</span>
    </div>
  );
}
