import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  name,
  onChange,
  value = '',
  placeholder = '',
  required = false
}) => {
  const [currValue, setCurrValue] = useState(value);

  return (
    <input
      type="text"
      name={name}
      value={currValue}
      placeholder={placeholder}
      required={required}
      onChange={(e) => {
        setCurrValue(e.target.value);
        onChange(name, e.target.value)
      }}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default TextField;
