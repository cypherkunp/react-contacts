import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faTag } from '@fortawesome/free-solid-svg-icons';
import './tag-list.styles.css';

const TagList = ({ data: tagListData }) => {
  if (!tagListData) return null;
  const totalLabels = tagListData.length;

  return (
    <React.Fragment>
      <div className="tag-list-header">
        <span className="tag-list-header-group">
          <FontAwesomeIcon icon={faTags} />
        </span>
        <span className="tag-list-header-group">Labels</span>
        <span className="tag-list-header-group badge badge-primary">{totalLabels}</span>
      </div>
      <div className="tag-list-group">
        <ul className="list-group">
          {tagListData.map(tag => (
            <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
              <FontAwesomeIcon icon={faTag} style={{ height: 16, width: 16 }} /> {tag.label}
              <span className="badge badge-primary badge-pill">{tag.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default TagList;
