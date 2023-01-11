import React, { useState } from "react";
import "./Header.css";

function News(props) {
  function On() {
    let audio = document.getElementById("radio");
    audio.play();
    setIsPlayed(!isPlaying);
  }

  const [isPlaying, setIsPlayed] = useState(false);

  return (
    <div className="Head">
      <div className="Dalem">
        <img src="redlogo.png" />
        <h1 className="LogoText">Telkom Radio</h1>
        <input className="Search-bar"></input>
        <div>
          <button className="Play" onClick={On}>
            {isPlaying ? <img src="pause.png" alt="Pause" /> : <img src="play2.png" alt="Play" />}
          </button>
          <audio id="radio" hidden={!isPlaying} src="https://sukmben.radiogentara.com/radio/8140/stream"></audio>
        </div>

        <div className="Menu">
          <li href="./News.js">News</li>
          <li href="apahayo.com">Programs</li>
          <li>Contact Us</li>
        </div>
      </div>
    </div>
  );
}

export default News;
