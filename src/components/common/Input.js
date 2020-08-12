import React from "react";
import { func, string, node } from "prop-types";

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
  id: string.isRequired,
  name: string.isRequired,
  label: node.isRequired,
  type: string.isRequired,
  placeholder: string,
  value: string,
  change: func.isRequired,
};
export default Input;
