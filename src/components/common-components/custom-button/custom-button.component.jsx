import React from 'react';
import { PropTypes } from 'prop-types';

const CustomButton = ({ children, type, color, isDisabled }) => {
  return (
    <button className={`btn btn-${color}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

CustomButton.defaultProps = {
  color: 'primary'
};

export default CustomButton;
