import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, label, options, onChange }) => {
  if (!(name && label && options && options.length)) return null;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select className="form-control" name={name} id={name} onChange={onChange}>
        {options.map(option => (
          <option>{option}</option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
