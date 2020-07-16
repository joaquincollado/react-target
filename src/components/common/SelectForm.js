import React from "react";

const SelectForm = ({ options, id }) => (
  <select id={id} className="form-select">
    {options.map((option) => (
      <option value={option.value}>{option.text}</option>
    ))}
  </select>
);
export default SelectForm;
