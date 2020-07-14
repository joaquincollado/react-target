import React from "react";

const SelectForm = ({ options }) => (
  <select id="genderSelect" className="form-select">
    {options.map((option) => (
      <option value={option.value}>{option.text}</option>
    ))}
  </select>
);
export default SelectForm;
