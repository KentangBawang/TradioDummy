import React from "react";
import "./SmallMenu.css";

function SmallMenu(props) {
  return (
    <div className="Parent">
      <div className="Card">
        <div className="PhotoHolder">
          <img src={props.photo} />
        </div>

        <div className="Desc">
          <p className="Category">Broadcaster</p>
          <h1 className="Name">{props.name}</h1>
          <p className="Price">{props.price}</p>
          <p className="Location">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallMenu;
