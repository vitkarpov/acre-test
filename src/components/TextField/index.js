import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ name, placeholder, required, onChange }) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={(e) => onChange(name, e.target.value)}
  />
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default TextField;
