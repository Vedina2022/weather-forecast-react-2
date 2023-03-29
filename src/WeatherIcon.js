import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "few-clouds-day",
    "02n": "few-clouds-night",
    "03d": "scattered-clouds",
    "03n": "scattered-clouds",
    "04d": "broken-clouds",
    "04n": "broken-clouds",
    "09d": "shower-rain",
    "09n": "shower-rain",
    "10d": "rain-day",
    "10n": "rain-night",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  const iconUrl = `icons/${codeMapping[props.code]}.svg`;

  return (
    <img
      src={iconUrl}
      alt={props.alt}
      className="weather-icon"
      width={props.size}
    />
  );
}
