import React from "react";

const InputForm = ({ id, label, type, placeholder }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className="form-control form-input"
      id={id}
      placeholder={placeholder}
    />
  </div>
);

export default InputForm;
