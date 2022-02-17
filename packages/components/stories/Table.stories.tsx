import * as React from 'react';
import { Checkbox, Table } from '../src/components';
import '../src/styles';
import './stories.scss';

export const SimpleTable1: React.FC = () => {
  const items = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
    },
  ];

  const header = [
    {
      heading: 'company',
      key: 'company',
    },
    {
      heading: 'contact',
      key: 'contact',
    },

    {
      heading: 'country',
      key: 'country',
    },
  ];
  const checkbox = true;
  const rowsPerPage = 2;
  const showSorting = true;
  const showPagination = true;

  return (
    <Table
      items={items}
      header={header}
      checkbox={checkbox}
      rowsPerPage={rowsPerPage}
      showSorting={showSorting}
      showPagination={showPagination}
    />
  );
};

export default {
  title: 'Components/Table',
  component: Table,
};
