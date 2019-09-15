import React from 'react';
import PropTypes from 'prop-types';
import './input.styles.css';

const Input = ({ label, name, type, placeholder, onChange, error, ...restProps }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={`form-control ${error ? 'has-error' : ''}`}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default Input;
