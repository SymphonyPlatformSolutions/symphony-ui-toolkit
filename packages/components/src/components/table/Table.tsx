import * as React from 'react';
import { Checkbox, Icon, Dropdown } from '..';

export type TableProps = {
  items: { [key: string]: string }[];
  header: { [key: string]: string }[];
  rowsPerPage?: number;
  showSorting?: boolean;
  showPagination?: boolean;
  showCheckbox?: boolean;
};

export const Table: React.FC<TableProps> = ({
  items,
  header,
  showCheckbox,
  rowsPerPage,
  showSorting,
  showPagination,
}: TableProps) => {
  const [data, setData] = React.useState(items);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [select, setSelect] = React.useState(rowsPerPage);
  const [order, setOrder] = React.useState('DSC');
  const [headingKey, setHeadingKey] = React.useState({
    company: true,
    contact: true,
    country: true,
  });

  const renderIcon = (key) => {
    if ([key] && headingKey[key]) {
      return <Icon iconName="drop-down" onClick={() => sortingColumn(key)} />;
    } else {
      return <Icon iconName="drop-up" onClick={() => sortingColumn(key)} />;
    }
  };

  const sortingColumn = (key) => {
    if (key && order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setData(sorted);
      setOrder('DSC');
      setHeadingKey({ ...headingKey, [key]: true });
    } else if (key && order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setData(sorted);
      setOrder('ASC');
      setHeadingKey({ ...headingKey, [key]: false });
    }
  };

  const handleSelectChange = (e) => {
    setCurrentPage(1);
    setSelect(e.target.value);
  };

  const getRowsPerPages = (select) => {
    if (select.value) {
      return select.value;
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
          onChange={handleSelectChange}
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

  const totalEntries = data.length;
  const page = getPage(currentPage, getRowsPerPages(select), data);
  const totalPages = getTotalPages(getRowsPerPages(select), data);
  const nextPage = hasNextPage(currentPage, getRowsPerPages(select), data);

  return (
    <>
      <table className="tk-table">
        <thead>
          <tr>
            <th className="tk-table-checkbox">
              {showCheckbox && <Checkbox label="" name="simple-checkbox" />}
            </th>
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
          {page.map((column, index) => (
            <tr key={index}>
              <td>
                {showCheckbox && <Checkbox label="" name="simple-checkbox" />}
              </td>
              {header.map((columnItem, index) => {
                return <td key={index}>{column[columnItem.key]}</td>;
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

export default Table;
