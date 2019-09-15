import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Table from '../common-components/table/table.component';
import Delete from '../common-components/delete/delete.component';

const ContactsViewTable = ({ data, onDelete }) => {
  if (!(data && data.length)) return null;

  const capitalizeFirstLetter = lowerString => `${lowerString.charAt(0).toUpperCase()}${lowerString.substring(1)}`;
  const [_id, ...columnKeys] = Object.keys(data[0]);

  const columnConfig = [];
  const columnKeysConfig = columnKeys.map(key => {
    let content = null;
    if (key === 'email')
      content = contact => (
        <a href={`mailto:${contact.email}?Subject=Hello`} target="_top">
          {contact.email}
        </a>
      );
    if (key === 'website')
      content = contact => (
        <a
          href={contact.website.includes('https://') ? contact.website : 'https://' + contact.website}
          target="_blank"
          rel="noreferrer noopener"
        >
          {contact.website}
        </a>
      );

    return {
      key,
      label: capitalizeFirstLetter(key),
      content
    };
  });

  columnConfig.push({
    content: () => <FontAwesomeIcon icon={faUser} />
  });
  columnConfig.push(...columnKeysConfig);
  columnConfig.push({
    content: contact => <Delete onDelete={() => onDelete(contact)} />
  });

  return <Table rowData={data} columnData={columnConfig} />;
};

export default ContactsViewTable;
