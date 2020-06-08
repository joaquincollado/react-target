import React from "react";
import HomePage from "components/home/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/styles.scss";

const App = () => (
  <Router>
    <HomePage />
  </Router>
);

export default App;
