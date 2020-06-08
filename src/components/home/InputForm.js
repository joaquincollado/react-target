import React from "react";

const InputForm = ({ id, label, type }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input type={type} className="form-control form-input" id={id} />
  </div>
);

export default InputForm;
