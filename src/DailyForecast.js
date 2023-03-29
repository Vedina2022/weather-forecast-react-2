import React, { useState } from "react";
import axios from "axios";
import DailyForecastDetails from "./DailyForecastDetails";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    console.log(response.data.daily);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return <DailyForecastDetails data={forecastData} />;
  } else {
    const apiKey = "8ba8b8217c4a2ce52cbe796f7c063cea";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
