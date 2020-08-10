import React from "react";
import PropTypes from "prop-types";

const Input = ({ id, name, label, type, placeholder, value, change }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className="form-control form-input"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={change}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func.isRequired,
};
export default Input;
