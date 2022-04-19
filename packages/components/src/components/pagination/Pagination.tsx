import * as React from 'react';
import { Icon, Dropdown } from '..';

export type PaginationProps = {
  items: { [key: string]: string }[];
  rowsPerPage: number;
  showDropDown?: boolean;
};

export const Pagination: React.FC<PaginationProps> = ({
  items,
  rowsPerPage,
  showDropDown,
}: PaginationProps) => {
  const [data, setData] = React.useState(items);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowNumber, setRowNumber] = React.useState(rowsPerPage);

  const handleRowsPerPageChange = (e) => {
    setCurrentPage(1);
    setRowNumber(e.target.value);
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

  const page = getPage(currentPage, getRowsPerPages(rowNumber), data);
  const totalPages = getTotalPages(getRowsPerPages(rowNumber), data);
  const nextPage = hasNextPage(currentPage, getRowsPerPages(rowNumber), data);

  return (
    <div className="tk-pagination-container">
      {page.map((value, index) => {
        return <div key={index}>{value.text}</div>;
      })}
      <div className="tk-pagination">
        <Icon
          className={
            currentPage === 1
              ? 'tk-pagination-button-disabled'
              : 'tk-pagination-button'
          }
          iconName="chevron-left"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        />
        <Icon
          className={
            currentPage <= 1
              ? 'tk-pagination-button-disabled'
              : 'tk-pagination-button'
          }
          iconName="left"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {showDropDown && (
          <>
            <p>Rows per page: </p>
            <Dropdown
              className="tk-pagination-dropdown"
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
          </>
        )}
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Icon
          className={
            nextPage ? 'tk-pagination-button' : 'tk-pagination-button-disabled'
          }
          iconName="right"
          disabled={!nextPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
        <Icon
          className={
            nextPage ? 'tk-pagination-button' : 'tk-pagination-button-disabled'
          }
          iconName="chevron-right"
          disabled={!nextPage}
          onClick={() => setCurrentPage(totalPages)}
        />
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  showDropDown: false,
  rowsPerPage: 1,
};

export default Pagination;
