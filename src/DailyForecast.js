import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastDetails from "./DailyForecastDetails";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="daily-forecast ms-3 mt-3 text-center">
        {forecastData.map(function (forecast, index) {
          if (index > 0 && index < 6) {
            return (
              <DailyForecastDetails
                data={forecast}
                key={index}
                unit={props.unit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "8ba8b8217c4a2ce52cbe796f7c063cea";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
