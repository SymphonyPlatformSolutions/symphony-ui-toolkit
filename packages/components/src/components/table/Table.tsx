import * as React from 'react';
import { Checkbox, Icon, Dropdown } from '..';
import SelectionStatus from '../selection/SelectionStatus';

export type TableProps = {
  items: { [key: string]: string }[];
  header: { [key: string]: string }[];
  rowsPerPage?: number;
  showSorting?: boolean;
  showPagination?: boolean;
  showCheckbox?: boolean;
  onCustomRenderer?: (
    row: { key: string },
    columnDef: string
  ) => JSX.Element | string;
};

export const Table: React.FC<TableProps> = ({
  items,
  header,
  showCheckbox,
  rowsPerPage,
  showSorting,
  showPagination,
  onCustomRenderer,
}: TableProps) => {
  const [data, setData] = React.useState(items);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowNumber, setRowNumber] = React.useState(rowsPerPage);
  const [order, setOrder] = React.useState('DSC');
  const totalEntries = data.length;
  const [checkedState, setCheckedState] = React.useState(
    new Array(totalEntries).fill(false)
  );
  const [checkedGlobalState, setCheckedGlobalState] = React.useState(false);
  const [headingKey, setHeadingKey] = React.useState({
    company: true,
    contact: true,
    country: true,
  });

  const renderIcon = (key) => {
    if ([key] && headingKey[key]) {
      return <Icon iconName="drop-down" onClick={() => sortColumn(key)} />;
    } else {
      return <Icon iconName="drop-up" onClick={() => sortColumn(key)} />;
    }
  };

  const sortColumn = (key) => {
    if (!key) {
      return;
    }
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setData(sorted);
      setOrder('DSC');
      setHeadingKey({ ...headingKey, [key]: true });
    } else if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setData(sorted);
      setOrder('ASC');
      setHeadingKey({ ...headingKey, [key]: false });
    }
  };

  const handleRowsPerPageChange = (e) => {
    setCurrentPage(1);
    setRowNumber(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const updatedList = [...checkedState];
    updatedList[e.target.value] = e.target.checked;
    setCheckedState(updatedList);
    checkboxRow(updatedList);
  };

  const handleCheckboxHeaderChange = (e) => {
    setCheckedGlobalState(e.target.checked);
  };

  const checkboxRowIsChecked = (index) => {
    if (checkedState[index]) {
      return 'tk-table-checkbox-isChecked';
    }
  };

  const checkboxHeader = () => {
    if (checkedGlobalState) {
      setCheckedState(new Array(totalEntries).fill(false));
    } else {
      setCheckedState(new Array(totalEntries).fill(true));
    }
  };

  const checkboxRow = (updatedList) => {
    const found = updatedList.find((value) => value === true);

    if (found) {
      setCheckedGlobalState(true);
    } else {
      setCheckedGlobalState(false);
    }
  };

  const getRowsPerPages = (row) => {
    if (row.value) {
      return row.value;
    } else {
      return rowsPerPage;
    }
  };

  const getPage = (currentIndex, pageSize, array) => {
    const startIndex = (currentIndex - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const getTotalPages = (pageSize, array) => {
    const result = array.length / pageSize;
    return Math.ceil(result);
  };

  const hasNextPage = (currentPage, pageSize, array) => {
    const nextPageIndex = currentPage * pageSize;
    return nextPageIndex < array.length;
  };

  const GetStartIndexPerPage = (currentPage, pageSize) => {
    return (currentPage - 1) * pageSize;
  };

  const renderPagination = () => {
    return (
      <div className="tk-table-pagination">
        <Icon
          className={
            currentPage === 1 ? 'tk-table-button-disabled' : 'tk-table-button'
          }
          iconName="chevron-left"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        />
        <Icon
          className={
            currentPage <= 1 ? 'tk-table-button-disabled' : 'tk-table-button'
          }
          iconName="left"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        <p>Rows per page: </p>
        <Dropdown
          className="tk-table-dropdown"
          size="small"
          onChange={handleRowsPerPageChange}
          placeHolder={rowsPerPage.toString()}
          options={[
            {
              label: '5',
              value: 5,
            },
            {
              label: '10',
              value: 10,
            },
            {
              label: '25',
              value: 25,
            },
            {
              label: '50',
              value: 50,
            },
            {
              label: '100',
              value: 100,
            },
          ]}
        />
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Icon
          className={nextPage ? 'tk-table-button' : 'tk-table-button-disabled'}
          iconName="right"
          disabled={!nextPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
        <Icon
          className={nextPage ? 'tk-table-button' : 'tk-table-button-disabled'}
          iconName="chevron-right"
          disabled={!nextPage}
          onClick={() => setCurrentPage(totalPages)}
        />
      </div>
    );
  };

  const page = getPage(currentPage, getRowsPerPages(rowNumber), data);
  const totalPages = getTotalPages(getRowsPerPages(rowNumber), data);
  const nextPage = hasNextPage(currentPage, getRowsPerPages(rowNumber), data);
  const startIndexPerPage = GetStartIndexPerPage(
    currentPage,
    getRowsPerPages(rowNumber)
  );

  return (
    <>
      <table className="tk-table">
        <thead>
          <tr>
            {showCheckbox && (
              <th className="tk-table-checkbox">
                <Checkbox
                  name="checkbox-th"
                  status={
                    checkedGlobalState
                      ? SelectionStatus.CHECKED
                      : SelectionStatus.UNCHECKED
                  }
                  onChange={(e) => handleCheckboxHeaderChange(e)}
                  onClick={() => checkboxHeader()}
                  value={'0'}
                />{' '}
              </th>
            )}

            {header.map((value, index) => (
              <th key={index}>
                <h3>
                  {value.heading.toUpperCase()}
                  {showSorting && renderIcon(value.key)}
                </h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {page.map((row, index) => (
            <tr
              key={index}
              className={checkboxRowIsChecked(startIndexPerPage + index)}
            >
              {showCheckbox && (
                <td>
                  <Checkbox
                    name="checkbox-row"
                    status={
                      checkedState[startIndexPerPage + index]
                        ? SelectionStatus.CHECKED
                        : SelectionStatus.UNCHECKED
                    }
                    onChange={(e) => handleCheckboxChange(e)}
                    value={(startIndexPerPage + index).toString()}
                  />
                </td>
              )}

              {header.map((columnDef, index) => {
                if (onCustomRenderer) {
                  return (
                    <td key={index}>{onCustomRenderer(row, columnDef.key)}</td>
                  );
                } else {
                  return <td key={index}>{row[columnDef.key]}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {showPagination && renderPagination()}
      <div>Total entries: {totalEntries}</div>
    </>
  );
};

Table.defaultProps = {
  showCheckbox: true,
  rowsPerPage: 2,
  showSorting: true,
  showPagination: true,
};

export default Table;
