import React from "react";
import { Link } from "react-router-dom";
import "./SignInForm.scss";

const SignInForm = () => (
  <form className="signin-form">
    <div className="form-group">
      <label htmlFor="inputEmail" className="form-label">
        Email
      </label>
      <input type="email" className="form-control form-input" id="inputEmail" />
    </div>
    <div className="form-group">
      <label htmlFor="inputPass" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control form-input"
        id="inputPass"
      />
    </div>
    <button className="form-button" type="submit">
      Sign In
    </button>
    <Link className="form-link" to="">
      Forgot your password?
    </Link>
  </form>
);

export default SignInForm;
