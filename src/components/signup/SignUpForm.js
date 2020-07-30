import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { connect } from "react-redux";
import { createUser } from "actions/userActions";
import { useState } from "react";
import InputForm from "components/common/InputForm";
import SelectForm from "components/common/SelectForm";

const SignUpForm = (props) => {
  const intl = useIntl();

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
    password_confirmation: "",
    gender: "male",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createUserDispatch({ user }).then(() => {
      history.push("/");
    });
  };

  return (
    <form
      className="signup-form"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <InputForm
        label={<FormattedMessage id="form.name" />}
        type="text"
        id="inputText"
        name="username"
        value={user.username}
        change={handleChange}
      />
      <InputForm
        label="Email"
        type="email"
        id="inputEmail"
        name="email"
        value={user.email}
        change={handleChange}
      />
      <InputForm
        label={<FormattedMessage id="form.password" />}
        type="password"
        id="inputPassword"
        name="password"
        placeholder={intl.formatMessage({ id: "form.placeholder" })}
        value={user.password}
        change={handleChange}
      />
      <InputForm
        label={<FormattedMessage id="form.confirmPassword" />}
        type="password"
        name="password_confirmation"
        id="inputConfirmPassword"
        value={user.password_confirmation}
        change={handleChange}
      />
      <div className="form-group">
        <label htmlFor="genderSelect" className="form-label">
          <FormattedMessage id="form.gender" />
        </label>
        <SelectForm
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

function mapStateToProps(state) {
  return {
    course: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return { createUserDispatch: (user) => dispatch(createUser(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
