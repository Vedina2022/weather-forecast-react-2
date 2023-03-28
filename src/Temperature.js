import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  const fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  function changeUnit(event) {
    event.preventDefault();
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  }

  return (
    <div className="temperature">
      <span className="temperature-value">
        {unit === "celsius" ? props.celsius : fahrenheit}
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
  );
}
