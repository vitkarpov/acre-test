import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonField = ({ name, label, checked, required, onChange }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      required={required}
      checked={checked}
      onChange={(e) => onChange(name, e.target.checked)}
    />
    {label}
  </label>
);

RadioButtonField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioButtonField;
