import React from "react";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDetails(props) {
  const maxTemperature = Math.round(props.data.temp.max);
  const minTemperature = Math.round(props.data.temp.min);
  const iconCode = props.data.weather[0].icon;

  function FormattedDate() {
    const options = {
      weekday: "short",
    };
    const forecastDate = new Date(props.data.dt * 1000);
    return forecastDate.toLocaleDateString("en-US", options);
  }

  return (
    <div className="daily-forecast-wrapper border-bottom mb-3">
      <span className="forecast-day me-4">{FormattedDate()}</span>
      <WeatherIcon code={iconCode} size="40" />
      <span className="forecast-temperature-max ms-4">
        {" "}
        <Temperature celsius={maxTemperature} unit={props.unit} />°{" "}
      </span>{" "}
      |{" "}
      <span className="forecast-temperature-min opacity-50">
        <Temperature celsius={minTemperature} unit={props.unit} />°
      </span>
    </div>
  );
}
