import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({ name, required, onChange }) => (
  <input
    type="date"
    name={name}
    required={required}
    onChange={(e) => onChange(name, e.target.value)}
  />
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default DateField;
