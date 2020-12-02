import React from "react";
import "./styleOptions.css";
import { Link } from "react-router-dom";

function Options() {
  return (
    <div>
      <h2 className="foodOpt">Pizza's in Gotham City</h2>
      <div className="boxes">
        <Link to="/Forms" id="box1" className="box">
          Vegetarian
        </Link>
        <Link to="/Forms" id="box2" className="box">
          Meat Lovers
        </Link>
        <Link to="/Forms" id="box3" className="box">
          The Special
        </Link>
        <Link to="/Forms" id="box4" className="box">
          The Italian
        </Link>
        <Link to="/Forms" id="box5" className="box">
          The Cheese Monster
        </Link>
        <Link to="/Forms" id="box6" className="box">
          Catering
        </Link>
      </div>
    </div>
  );
}

export default Options;
