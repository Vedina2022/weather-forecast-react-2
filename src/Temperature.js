import React from "react";

export default function Temperature(props) {
  const fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
  const temperature = props.unit === "celsius" ? props.celsius : fahrenheit;

  return <span>{temperature}</span>;
}
