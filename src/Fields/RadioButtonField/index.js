import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonField = ({ name, value, checked, required, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      required={required}
      checked={checked}
      onChange={(e) => onChange(name, e.target.value)}
    />
    {value}
  </label>
);

RadioButtonField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioButtonField;
