import React from "react";

export default function formattedDate(props) {
  const options = {
    month: "short",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <div className="date">
      Updated: {props.date.toLocaleTimeString("en-US", options)}
    </div>
  );
}
