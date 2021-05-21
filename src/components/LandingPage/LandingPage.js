import React from "react";
import "./LandingPage.css"
import LoginCard from "../Login/LoginCard";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPage__left">
        <p className="LandingPage__left__name">XYZ Library</p>
        <p className="LandingPage__left__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>
      <div className="LandingPage__right">
        <LoginCard />
      </div>
    </div>
  );
}

export default LandingPage;
