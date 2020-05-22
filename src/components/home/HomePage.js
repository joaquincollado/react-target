import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/icons/smilies.svg";
import AppStore from "../common/AppStore";
import SignInForm from "./SignInForm";
import "./HomePage.scss";

const HomePage = () => (
  <Router>
    <div className="container mw-100 h-100vh">
      <div className="row h-100">
        <div className="col-6 align-self-center">
          <div className="row justify-content-center">
            <img className="img-icon" src={logo} alt="smiles logo"></img>
          </div>
          <div className="row justify-content-center">
            <h1 className="h1-target">TARGET MVD</h1>
          </div>
          <div className="row justify-content-center">
            <h2 className="h2-target">Find people near you & Connect</h2>
          </div>
          <div className="row justify-content-center">
            <p className="p-target text-justify">
              Create a target wherever on the map, specify your interest:
              Travel, Dating, Music, etc and start conecting with others who
              share your interest.
            </p>
          </div>
          <div className="row justify-content-center">
            <SignInForm />
          </div>
          <div className="row justify-content-center">
            <Link className="home-link border-link" to="">
              CONNECT WITH FACEBOOK
            </Link>
          </div>
          <div className="row justify-content-center">
            <Link className="home-link" to="">
              SIGN UP
            </Link>
          </div>
        </div>
        <AppStore />
      </div>
    </div>
  </Router>
);

export default HomePage;
