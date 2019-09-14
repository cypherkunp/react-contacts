import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Delete = ({ onDelete }) => {
  return <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} onClick={onDelete} />;
};

export default Delete;
