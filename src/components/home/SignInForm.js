import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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
        <FormattedMessage id="form.password" />
      </label>
      <input
        type="password"
        className="form-control form-input"
        id="inputPass"
      />
    </div>
    <button className="form-button" type="submit">
      <FormattedMessage id="form.signin" />
    </button>
    <Link className="form-link" to="">
      <FormattedMessage id="form.forgot" />
    </Link>
  </form>
);

export default SignInForm;
