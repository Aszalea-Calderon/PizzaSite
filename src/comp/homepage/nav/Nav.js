import React from "react";
import { Link } from "react-router-dom";

import "./navStyle.css";

function Nav() {
  return (
    <div>
      <nav>
        <h1 className="lambdaEats">Coders Eats</h1>
        <Link to="/PizzaHome" className="navLinks">
          Home
        </Link>
        <Link to="#" className="navLinks" href="#">
          Help
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
