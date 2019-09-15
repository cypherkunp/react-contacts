import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './app-header.styles.css';

const AppHeader = ({ currentUser }) => {
  return (
    <div className="navbar navbar-dark bg-primary app-header">
      <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={faAddressBook} style={{ color: 'white', height: 32, width: 32 }} />
      </Link>
      <div className="app-user-options">
        {currentUser ? (
          <React.Fragment>
            <span>Welcome, {currentUser}</span>
            <button type="button" className="btn btn-grey">
              Sign Out
            </button>
          </React.Fragment>
        ) : (
          <button type="button" className="btn btn-light">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
