import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, name, rows, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea className="form-control" id={name} name={name} rows={rows || 0} onChange={onChange}></textarea>
    </>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
