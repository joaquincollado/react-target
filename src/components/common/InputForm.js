import React from "react";

const InputForm = ({ id, name, label, type, placeholder, value, change }) => (
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

export default InputForm;
