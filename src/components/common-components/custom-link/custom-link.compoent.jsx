import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  return (
    <Link to={to} className="btn btn-primary" style={{ marginBottom: 20 }}>
      {children}
    </Link>
  );
};

export default CustomLink;
