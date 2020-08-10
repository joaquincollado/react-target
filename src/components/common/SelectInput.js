import React from "react";
import PropTypes from "prop-types";

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
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectInput;
