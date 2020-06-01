import React from "react";

const InputForm = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control form-input"
        id={props.id}
      />
    </div>
  );
};

export default InputForm;
