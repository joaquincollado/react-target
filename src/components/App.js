import React from "react";
import HomePage from "components/home/HomePage";
import AppStore from "components/common/AppStore";
import SignUp from "components/signup/SignUp";
import { Route } from "react-router-dom";
import "styles/styles.scss";
import routes from "../routes.js";

const App = () => (
  <div className="home-page">
    <div className="row h-100">
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.signUp} component={SignUp} />
      <AppStore />
    </div>
  </div>
);

export default App;
