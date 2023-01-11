import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  function On() {
    let audio = document.getElementById("radio");
    audio.play();
    setIsPlayed(!isPlaying);
  }

  function Off() {
    let audio = document.getElementById("radio");
    audio.pause();
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
          {isPlaying ? (
            <button className="Pause" onClick={Off}>
              <img src="pause.png" alt="Pause" />
            </button>
          ) : (
            <button className="Play" onClick={On}>
              <img src="play.png" alt="Pause" />
            </button>
          )}

          <audio id="radio" hidden={!isPlaying} src="https://sukmben.radiogentara.com/radio/8140/stream"></audio>
        </div>

        <div className="Menu">
          <a href="News.js">News</a>
          <a href="apahayo.com">Programs</a>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
