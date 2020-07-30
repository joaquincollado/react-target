import React from "react";

const SelectForm = ({ options, id, name, change, value }) => (
  <select
    name={name}
    value={value}
    id={id}
    onChange={change}
    className="form-select"
  >
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);
export default SelectForm;
