import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { signUp } from "store/actions/userActions";
import { useState } from "react";
import Input from "components/common/Input";
import SelectInput from "components/common/SelectInput";

const SignUpForm = (props) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const selectOptions = [
    {
      value: "male",
      text: intl.formatMessage({ id: "form.male" }),
    },
    {
      value: "female",
      text: intl.formatMessage({ id: "form.female" }),
    },
    {
      value: "other",
      text: intl.formatMessage({ id: "form.other" }),
    },
  ];

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    gender: "male",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp({ user })).then(() => {
      window.location = "/";
    });
  };

  return (
    <form
      className="signup-form"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Input
        label={<FormattedMessage id="form.name" />}
        type="text"
        id="inputText"
        name="username"
        value={user.username}
        change={handleChange}
      />
      <Input
        label="Email"
        type="email"
        id="inputEmail"
        name="email"
        value={user.email}
        change={handleChange}
      />
      <Input
        label={<FormattedMessage id="form.password" />}
        type="password"
        id="inputPassword"
        name="password"
        placeholder={intl.formatMessage({ id: "form.placeholder" })}
        value={user.password}
        change={handleChange}
      />
      <Input
        label={<FormattedMessage id="form.confirmPassword" />}
        type="password"
        name="passwordConfirmation"
        id="inputConfirmPassword"
        value={user.passwordConfirmation}
        change={handleChange}
      />
      <div className="form-group">
        <label htmlFor="genderSelect" className="form-label">
          <FormattedMessage id="form.gender" />
        </label>
        <SelectInput
          options={selectOptions}
          change={handleChange}
          id="genderSelect"
          name="gender"
          value={user.gender}
        />
      </div>
      <button className="form-button" type="submit">
        <FormattedMessage id="form.signin" />
      </button>
    </form>
  );
};

export default SignUpForm;
