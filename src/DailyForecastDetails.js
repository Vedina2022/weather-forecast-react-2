import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDetails(props) {
  const maxTemperature = Math.round(props.data[0].temp.max);
  const minTemperature = Math.round(props.data[0].temp.min);
  const iconCode = props.data[0].weather[0].icon;

  function FormattedDate() {
    const options = {
      weekday: "short",
    };
    const forecastDate = new Date(props.data[0].dt * 1000);
    return forecastDate.toLocaleDateString("en-US", options);
  }

  return (
    <div className="daily-forecast ms-3 text-center">
      <h4>Daily Forecast</h4>
      <div className="daily-forecast-wrapper border-bottom mb-3">
        <span className="forecast-day me-5">{FormattedDate()}</span>
        <WeatherIcon code={iconCode} size="40" />
        <span className="forecast-temperature-max ms-5">
          {" "}
          {maxTemperature}°{" "}
        </span>{" "}
        |{" "}
        <span className="forecast-temperature-min opacity-50">
          {minTemperature}°
        </span>
      </div>
    </div>
  );
}
