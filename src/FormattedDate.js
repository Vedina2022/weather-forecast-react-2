import React from "react";

export default function formattedDate(props) {
  let options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  let formattedDate = props.date.toLocaleTimeString("en-US", options);
  return formattedDate;
}
