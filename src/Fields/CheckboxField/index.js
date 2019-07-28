import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({ name, value, label, checked, required, onChange }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      value={value}
      required={required}
      checked={checked}
      onChange={(e) => onChange(name, e.target.checked ? e.target.value : '')}
    />
    {label}
  </label>
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxField;
