import * as React from 'react';
import { Table } from '../src/components';
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
    {
      company: 'Berglunds snabbkop',
      contact: 'Paul Mendel',
      country: 'Sweden',
    },
    {
      company: 'North/South',
      contact: 'Paul Wali',
      country: 'UK',
    },
    {
      company: 'Koniglich Essen',
      contact: 'Elia Wendel',
      country: 'Germani',
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Fred Cartoni',
      country: 'Italie',
    },
    {
      company: 'Paris specialites',
      contact: 'Jean Dujardino',
      country: 'France',
    },
    {
      company: 'Island Trading',
      contact: 'Gilles Courant',
      country: 'UK',
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Caribou Lice',
      country: 'Canada',
    },
    {
      company: 'Winecellars',
      contact: 'Angel Chice',
      country: 'Espagna',
    },
    {
      company: 'Peugeot',
      contact: 'Francis Gaumont',
      country: 'France',
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
  const showCheckbox = true;
  const rowsPerPage = 2;
  const showSorting = true;
  const showPagination = true;

  return (
    <Table
      items={items}
      header={header}
      showCheckbox={showCheckbox}
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
