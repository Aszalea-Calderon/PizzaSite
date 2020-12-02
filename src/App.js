import React from "react";
import { Route, Switch } from "react-router-dom";
import Forms from "./comp/forms/Forms";
import PizzaHome from "./PizzaHome";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PizzaHome}></Route>
        <Route path="/Forms" component={Forms} />
      </Switch>
    </>
  );
};
export default App;
