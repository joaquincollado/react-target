import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Input from "components/common/Input";

const SignInForm = () => (
  <form className="signin-form">
    <Input label="Email" type="email" id="inputEmail" name="email" />
    <Input
      label={<FormattedMessage id="form.password" />}
      type="password"
      id="inputPassword"
      name="password"
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
