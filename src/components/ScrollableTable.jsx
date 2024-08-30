import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import './ScrollableTable.css'; // Import the CSS file for styling

function ScrollableTable({ data, onRowSelect }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title', // Renamed from 'Topic' to 'Title'
        accessor: 'title',
      },
      {
        Header: 'Start Time',
        accessor: 'startTime',
      },
      {
        Header: 'End Time',
        accessor: 'endTime',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.allColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <input
              type="checkbox"
              {...row.getToggleRowSelectedProps()}
              onClick={() => onRowSelect(row.original)}
            />
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => onRowSelect(row.original)}
              className={row.id in selectedRowIds ? 'selected' : ''}
            >
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ScrollableTable;
