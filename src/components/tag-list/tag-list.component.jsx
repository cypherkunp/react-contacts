import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const TagList = () => {
    return (
        <button type="button" class="btn btn-secondary">
            <FontAwesomeIcon icon={faTags} /> Labels <span class="badge badge-light">4</span>
        </button>
    );
};

export default TagList;
