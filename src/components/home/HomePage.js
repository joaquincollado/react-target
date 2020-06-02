import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import logo from "assets/icons/smilies.svg";
import AppStore from "components/common/AppStore";
import SignInForm from "./SignInForm";

const HomePage = () => (
  <div className="home-page">
    <div className="row h-100">
      <div className="col-xs-6 log-section">
        <div className="justify-content-center text-align-center">
          <img className="img-icon" src={logo} alt="smiles logo"></img>
        </div>
        <div className="row justify-content-center">
          <h1 className="h1-target">TARGET MVD</h1>
        </div>
        <div className="row justify-content-center">
          <h2 className="h2-target">
            <FormattedMessage id="home.subtitle" />
          </h2>
        </div>
        <div className="row justify-content-center">
          <p className="p-target text-align-center">
            <FormattedMessage id="home.welcome" />
          </p>
        </div>
        <div className="row justify-content-center">
          <SignInForm />
        </div>
        <div className="row justify-content-center">
          <Link className="home-link border-link" to="">
            <FormattedMessage id="home.facebook" />
          </Link>
        </div>
        <div className="row justify-content-center">
          <Link className="home-link" to="">
            <FormattedMessage id="home.signup" />
          </Link>
        </div>
      </div>
      <AppStore />
    </div>
  </div>
);

export default HomePage;