import React from "react";
import { Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "./Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default Routes;
