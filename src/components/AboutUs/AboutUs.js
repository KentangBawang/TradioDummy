import React from "react";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div className="Background">
      <h1 className="Judul">Welcome To Telkom Radio</h1>
      <p className="Tagline">Radio Kampus Nomor Satu!</p>
      <div className="Judul">
        <button className="ButtonWhite">Stream Now!</button>
        <button className="ButtonWhite">Get Started</button>
      </div>
    </div>
  );
}

export default AboutUs;
