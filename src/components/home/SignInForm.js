import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const SignInForm = () => (
  <form className="signin-form">
    <InputForm label="Email" type="email" id="inputEmail" />
    <InputForm
      label={<FormattedMessage id="form.password" />}
      type="email"
      id="inputEmail"
    />
    <button className="form-button" type="submit">
      <FormattedMessage id="form.signin" />
    </button>
    <Link className="form-link" to="">
      <FormattedMessage id="form.forgot" />
    </Link>
  </form>
);

export default SignInForm;
