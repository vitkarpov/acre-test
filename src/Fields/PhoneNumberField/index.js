import React from 'react';
import PropTypes from 'prop-types';

const PhoneNumberField = ({ name, placeholder, required, onChange }) => (
  <input
    type="tel"
    name={name}
    required={required}
    placeholder={placeholder}
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    onChange={(e) => onChange(name, e.target.value)}
  />
);

PhoneNumberField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default PhoneNumberField;
