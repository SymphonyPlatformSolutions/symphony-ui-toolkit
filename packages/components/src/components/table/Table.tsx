import * as React from 'react';
import { Checkbox, Icon, Dropdown } from '..';

export type TableProps = {
  items: any[];
  header: any[];
  checkbox?: boolean;
  className?: string;
  rowsPerPage?: number;
  showSorting?: boolean;
  showPagination?: boolean;
};

export const Table: React.FC<TableProps> = ({
  items,
  header,
  checkbox,
  rowsPerPage,
  className,
  showSorting,
  showPagination,
}: TableProps) => {
  const [data, setData] = React.useState(items);

  const pageNumber = 1;
  const totalPage = 20;

  function hideOrShowCheckbox() {
    if (checkbox) {
      return <Checkbox label="" name="simple-checkbox" value="checkbox-1" />;
    }
  }

  function hideOrShowSorting(value) {
    console.log(value);
    if (showSorting) {
      return showIcon(value.key);
    }
  }

  function hideOrShowPagination() {
    if (showPagination) {
      return (
        <div>
          <Icon
            iconName="chevron-left"
            onClick={() => console.log('gotoPreviousPage')}
          />
          <Icon
            iconName="left"
            onClick={() => console.log('gotoPreviousPage')}
          />
          Rows per page: {rowsPerPage}{' '}
          <Dropdown
            options={[
              {
                label: '1',
                value: '1',
              },
              {
                label: '2',
                value: '2',
              },
              {
                label: '3',
                value: '3',
              },
              {
                label: '4',
                value: '4',
              },
              {
                label: '5',
                value: '5',
              },
            ]}
          />
          {pageNumber} of {totalPage}
          <Icon iconName="right" onClick={() => console.log('gotoNextPage')} />
          <Icon
            iconName="chevron-right"
            onClick={() => console.log('gotoNextPage')}
          />
        </div>
      );
    }
  }

  const [order, setOrder] = React.useState('DSC');
  const [headingKey, setHeadingKey] = React.useState({
    company: true,
    contact: true,
    country: true,
  });

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

  function showIcon(key) {
    if ([key] && headingKey[key]) {
      return <Icon iconName="drop-down" onClick={() => sortingColumn(key)} />;
    } else {
      return <Icon iconName="drop-up" onClick={() => sortingColumn(key)} />;
    }
  }

  function getPage(currentIndex, pageSize, array) {
    const startIndex = (currentIndex - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  }

  function getTotalPages(pageSize, array) {
    const result = array.length / pageSize;
    return Math.ceil(result);
  }

  function hasNextPage(currentPage, pageSize, array) {
    const nextPageIndex = currentPage + pageSize;
    return nextPageIndex < array.length;
  }

  return (
    <>
      <table className="tk-table">
        <thead>
          <tr>
            <th className="tk-table-checkbox-hidden">{hideOrShowCheckbox()}</th>
            {header.map((value, index) => (
              <th key={index}>
                {value.heading.toUpperCase()} {hideOrShowSorting(value)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((column, index) => (
            <tr key={index}>
              <td className="tk-table-checkbox-hidden">
                {hideOrShowCheckbox()}
              </td>
              {header.map((columnItem, index) => {
                const x = [];
                x.push(column[columnItem.key]);
                console.log(x);
                console.log(getPage(1, rowsPerPage, x));
                return <td key={index}>{column[columnItem.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {hideOrShowPagination()}
    </>
  );
};

export default Table;
