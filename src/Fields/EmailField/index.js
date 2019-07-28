import React from 'react';
import PropTypes from 'prop-types';

const EmailField = ({ name, placeholder, required, onChange }) => (
  <input
    type="email"
    name={name}
    required={required}
    placeholder={placeholder}
    onChange={(e) => onChange(name, e.target.value)}
  />
);

EmailField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default EmailField;
