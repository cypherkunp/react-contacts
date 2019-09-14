import { ReactComponent as Logo } from '../../assets/phone-book.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './header.styles.css';

const Header = ({ currentUser }) => {
    return (
        <header className="navbar navbar-dark bg-dark app-header">
            <Link className="navbar-brand" to="/">
                <FontAwesomeIcon icon={faAddressBook} style={{ color: 'white', height: 32, width: 32 }} />
            </Link>

            <div className="app-user-info">Welcome, Devvrat Shukla</div>

            <div className="app-user-options">
                {currentUser ? (
                    <React.Fragment>
                        <span>Welcome, Devvrat</span>
                        <button type="button" class="btn btn-grey">
                            Sign Out
                        </button>
                    </React.Fragment>
                ) : (
                    <button type="button" class="btn btn-light">
                        Sign In
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
