import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const TagList = () => {
  return (
    <button type="button" className="btn btn-secondary">
      <FontAwesomeIcon icon={faTags} /> Labels <span className="badge badge-light">4</span>
    </button>
  );
};

export default TagList;
