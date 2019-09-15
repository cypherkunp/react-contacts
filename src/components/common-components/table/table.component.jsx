import React from 'react';
import _ from 'lodash';
import './table.styles.css';

const Table = ({ columnData, rowData }) => {
  const renderCell = (row, column) => {
    if (column.content) return column.content(row);

    return _.get(row, column.key);
  };

  const createKey = (id, index) => id + '' + index;

  if (!columnData && rowData) return null;

  return (
    <table className="table table-borderless table-hover">
      <thead>
        <tr>
          {columnData.map((column, columnIndex) => (
            <th scope="col" key={columnIndex}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData
          ? rowData.map(row => (
              <tr key={row._id}>
                {columnData.map((column, columnIndex) => (
                  <td key={createKey(row._id, columnIndex)}>{renderCell(row, column)}</td>
                ))}
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Table;
