import React from "react";
import Home from "./comp/homepage/banner/Home.js";
import Option from "./comp/homepage/options/Options.js";

import Nav from "./comp/homepage/nav/Nav.js";

const PizzaHome = () => {
  return (
    <>
      <Nav />
      <Home />
      <Option />
    </>
  );
};
export default PizzaHome;
