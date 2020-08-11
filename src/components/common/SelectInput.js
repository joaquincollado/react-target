import React from "react";
import { arrayOf, shape, func, string, node } from "prop-types";

const SelectInput = ({ options, id, name, change, value }) => (
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

SelectInput.propTypes = {
  options: arrayOf(
    shape({
      value: string.isRequired,
      text: node,
    })
  ).isRequired,
  id: string.isRequired,
  name: string.isRequired,
  change: func.isRequired,
  value: string.isRequired,
};

export default SelectInput;
