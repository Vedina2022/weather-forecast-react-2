import React from "react";

export default function BackgroundImage(props) {
  const imagesCode = {
    "01d": "clear-sky-day.jpg",
    "01n": "clear-sky-night.jpg",
    "02d": "few-clouds-day.jpg",
    "02n": "few-clouds-night.jpg",
    "03d": "clouds-day.jpg",
    "03n": "clouds-night.jpg",
    "04d": "clouds-day.jpg",
    "04n": "clouds-night.jpg",
    "09d": "shower-rain.jpg",
    "09n": "shower-rain.jpg",
    "10d": "rain.jpg",
    "10n": "rain.jpg",
    "11d": "thunderstorm.jpg",
    "11n": "thunderstorm.jpg",
    "13d": "snow.jpg",
    "13n": "snow.jpg",
    "50d": "mist.jpg",
    "50n": "mist.jpg",
  };
  const imageUrl = `https://my-weather-app-images.s3.us-west-2.amazonaws.com/${
    imagesCode[props.iconCode]
  }`;

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(
       ${imageUrl}
        )`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingTop: "70px",
      }}
    >
      {props.children}
    </div>
  );
}
