import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import InputForm from "components/home/InputForm";

const SignUp = () => (
  <div className="col-xs-6 signup-section padding-bottom">
    <div className="row justify-content-center">
      <h1 className="h1-target">
        <FormattedMessage id="home.signup" />
      </h1>
    </div>
    <div className="row justify-content-center">
      <form className="signup-form">
        <InputForm
          label={<FormattedMessage id="form.name" />}
          type="text"
          id="inputText"
        />
        <InputForm label="Email" type="email" id="inputEmail" />
        <InputForm
          label={<FormattedMessage id="form.password" />}
          type="password"
          id="inputPassword"
          placeholder={useIntl().formatMessage({ id: "form.placeholder" })}
        />
        <InputForm
          label={<FormattedMessage id="form.confirmPassword" />}
          type="password"
          id="inputConfirmPassword"
        />
        <div className="form-group">
          <label htmlFor="genderSelect" className="form-label">
            <FormattedMessage id="form.gender" />
          </label>
          <select id="genderSelect" className="form-select">
            <option value="male">
              {useIntl().formatMessage({ id: "form.male" })}
            </option>
            <option value="female">
              {useIntl().formatMessage({ id: "form.female" })}
            </option>
            <option value="other">
              {useIntl().formatMessage({ id: "form.other" })}
            </option>
          </select>
        </div>
        <InputForm
          label={<FormattedMessage id="form.gender" />}
          type="text"
          id="inputGender"
        />
        <button className="form-button" type="submit">
          <FormattedMessage id="form.signin" />
        </button>
      </form>
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
