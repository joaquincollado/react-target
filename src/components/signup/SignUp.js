import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import SignUpForm from "components/signup/SignUpForm";

const SignUp = () => (
  <div className="col-xs-6 signup-section padding-bottom">
    <div className="row justify-content-center">
      <h1 className="h1-target">
        <FormattedMessage id="home.signup" />
      </h1>
    </div>
    <div className="row justify-content-center">
      <SignUpForm />
    </div>
    <span className="border-link" />
    <div className="row justify-content-center">
      <Link className="home-link" to="">
        <FormattedMessage id="home.signin" />
      </Link>
    </div>
  </div>
);

export default SignUp;
