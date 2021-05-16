import React from "react";
import "./PrimaryHeading.css";

function PrimaryHeading({ text }) {
  return (
    <div className="PrimaryHeading">
      <p className="PrimaryHeading__text">{text}</p>
    </div>
  );
}

export default PrimaryHeading;
