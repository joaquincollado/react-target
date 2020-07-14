import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import InputForm from "components/home/InputForm";
import SelectForm from "components/signup/SelectForm";

const SignUpForm = () => {
  const intl = useIntl();
  const selectOptions = [
    { value: "male", text: intl.formatMessage({ id: "form.male" }) },
    {
      value: "female",
      text: intl.formatMessage({ id: "form.female" }),
    },
    {
      value: "other",
      text: intl.formatMessage({ id: "form.other" }),
    },
  ];
  return (
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
        <SelectForm options={selectOptions} />
      </div>
      <button className="form-button" type="submit">
        <FormattedMessage id="form.signin" />
      </button>
    </form>
  );
};

export default SignUpForm;
