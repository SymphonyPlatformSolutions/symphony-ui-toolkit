import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../../../src/components/table/Table';

describe('Table Component', () => {
  const items = [
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
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
    },
  ];
  const header = [
    {
      heading: 'COMPANY',
      key: 'company',
    },
    {
      heading: 'CONTACT',
      key: 'contact',
    },
    {
      heading: 'COUNTRY',
      key: 'country',
    },
  ];

  it('render with required props ', () => {
    const { getByText } = render(<Table items={items} header={header}></Table>);

    expect(getByText(items[0].company)).toBeInTheDocument();
    expect(getByText(header[0].heading)).toBeInTheDocument();
  });

  it('should render number of rows per page', () => {
    const rowsPerPage = 5;
    const { getByText } = render(
      <Table items={items} header={header} rowsPerPage={rowsPerPage}></Table>
    );

    expect(getByText(5)).toBeInTheDocument();
    expect(5).toEqual(rowsPerPage);
  });

  it('should render rowsPerPage selected', () => {
    const { getByText, queryByText } = render(
      <Table items={items} header={header}></Table>
    );
    const dropdown = document.evaluate(
      '//div[@class="tk-table-pagination"]//div/i',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueDropdown = dropdown.singleNodeValue;

    expect(nodeValueDropdown).toBeInTheDocument();
    expect(queryByText(items[5].company)).not.toBeInTheDocument();
    fireEvent.mouseDown(nodeValueDropdown);
    expect(getByText('10')).toBeInTheDocument();
    fireEvent.click(getByText('10'));
    expect(getByText(items[9].company)).toBeInTheDocument();
  });

  it('should go to the next page when the right chevron is clicked', () => {
    const rowsPerPage = 5;
    const showPagination = true;
    const { getByText } = render(
      <Table
        items={items}
        header={header}
        rowsPerPage={rowsPerPage}
        showPagination={showPagination}
      ></Table>
    );
    const chevronRight = document.evaluate(
      '//div[@class="tk-table-pagination"]/i[contains(@class,"tk-icon-chevron-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueChevronRight = chevronRight.singleNodeValue;
    const right = document.evaluate(
      '//div[@class="tk-table-pagination"]/i[contains(@class,"tk-icon-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRight = right.singleNodeValue;
    const rowOne = document.evaluate(
      '//table[@class="tk-table"]/tbody//tr[1]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRowOne = rowOne.singleNodeValue;

    expect(nodeValueRight).toBeInTheDocument();
    expect(nodeValueRight).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueRowOne).not.toHaveTextContent('Peugeot');
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 3')).toBeInTheDocument();
    expect(nodeValueChevronRight).toBeInTheDocument();
    fireEvent.click(nodeValueChevronRight);
    expect(nodeValueRight).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueRowOne).toHaveTextContent('Peugeot');
    expect(getByText('Page 3 of 3')).toBeInTheDocument();
    fireEvent.click(nodeValueChevronRight);
    expect(getByText('Page 3 of 3')).toBeInTheDocument();
  });

  it('should go to the first page when left chevron is clicked', () => {
    const rowsPerPage = 5;
    const showPagination = true;
    const { getByText } = render(
      <Table
        items={items}
        header={header}
        rowsPerPage={rowsPerPage}
        showPagination={showPagination}
      ></Table>
    );
    const chevronLeft = document.evaluate(
      '//div[@class="tk-table-pagination"]/i[contains(@class,"tk-icon-chevron-left")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueChevronLeft = chevronLeft.singleNodeValue;

    const left = document.evaluate(
      '//div[@class="tk-table-pagination"]/i[contains(@class,"tk-icon-left")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueLeft = left.singleNodeValue;

    const right = document.evaluate(
      '//div[@class="tk-table-pagination"]/i[contains(@class,"tk-icon-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRight = right.singleNodeValue;

    const rowOne = document.evaluate(
      '//table[@class="tk-table"]/tbody//tr',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRowOne = rowOne.singleNodeValue;

    expect(nodeValueChevronLeft).toBeInTheDocument();
    expect(nodeValueLeft).toBeInTheDocument();
    expect(nodeValueLeft).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueChevronLeft).not.toContainHTML('style="cursor: pointer;"');
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 3')).toBeInTheDocument();
    expect(nodeValueLeft).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueChevronLeft).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueRowOne).not.toHaveTextContent('Centro comercial Moctezuma');
    fireEvent.click(nodeValueChevronLeft);
    expect(getByText('Page 1 of 3')).toBeInTheDocument();
    expect(nodeValueRowOne).toHaveTextContent('Centro comercial Moctezuma');
    expect(nodeValueChevronLeft).not.toContainHTML('style="cursor: pointer;"');
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 3')).toBeInTheDocument();
    fireEvent.click(nodeValueLeft);
    expect(getByText('Page 1 of 3')).toBeInTheDocument();
    expect(nodeValueLeft).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueRowOne).toHaveTextContent('Centro comercial Moctezuma');
  });

  it('should sort when icon is clicked', () => {
    const rowsPerPage = 5;
    const showSorting = true;
    render(
      <Table
        items={items}
        header={header}
        rowsPerPage={rowsPerPage}
        showSorting={showSorting}
      ></Table>
    );

    //sort ASC
    const selectDropdown = document.evaluate(
      '//th/h3[contains(text(),"COMPANY")]/i[@class="tk-icon-drop-down"]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValueDropdown = selectDropdown.singleNodeValue;
    const rowOne = document.evaluate(
      '//table[@class="tk-table"]/tbody//tr[1]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValueRowOne = rowOne.singleNodeValue;

    expect(nodeValueRowOne).not.toHaveTextContent('Alfreds Futterkiste');
    fireEvent.click(nodeValueDropdown);
    expect(nodeValueRowOne).toHaveTextContent('Alfreds Futterkiste');

    //sort DSC
    const selectDropup = document.evaluate(
      '//th/h3[contains(text(),"COMPANY")]/i[@class="tk-icon-drop-up"]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValueDropup = selectDropup.singleNodeValue;

    expect(nodeValueDropup).not.toHaveTextContent('Winecellars');
    fireEvent.click(nodeValueDropup);
    expect(nodeValueRowOne).toHaveTextContent('Winecellars');
  });

  it('should not render optionnal props Sort', () => {
    const showSorting = false;
    render(
      <Table items={items} header={header} showSorting={showSorting}></Table>
    );
    const selectSortingASC = document.evaluate(
      '//th/h3[contains(text(),"COMPANY")]/i[@class="tk-icon-drop-down"]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValueASC = selectSortingASC.singleNodeValue;
    const selectSortingDSC = document.evaluate(
      '//th/h3[contains(text(),"COMPANY")]/i[@class="tk-icon-drop-up"]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValueDSC = selectSortingDSC.singleNodeValue;

    expect(nodeValueASC).not.toBeInTheDocument();
    expect(nodeValueDSC).not.toBeInTheDocument();
  });

  it('should render optionnal props Sort with error', () => {
    const showSorting = true;
    const headerError = [
      {
        heading: 'COMPANY',
        key: 'company',
      },
      {
        heading: 'CONTACT',
        key: 'contact',
      },
      {
        heading: 'COUNTRY',
      },
    ];

    render(
      <Table
        items={items}
        header={headerError}
        showSorting={showSorting}
      ></Table>
    );

    const selectCountry = document.evaluate(
      '//th/h3[contains(text(),"COUNTRY")]/i[@class="tk-icon-drop-up"]',
      document,
      null,
      XPathResult.ANY_UNORDERED_NODE_TYPE,
      null
    );
    const nodeValue = selectCountry.singleNodeValue;
    expect(nodeValue).toBeInTheDocument();
    expect(nodeValue).toHaveClass('tk-icon-drop-up');
    fireEvent.click(nodeValue);
    expect(nodeValue).toHaveClass('tk-icon-drop-up');
  });

  it('should render optionnal props Checkbox', () => {
    const showCheckbox = true;
    render(
      <Table items={items} header={header} showCheckbox={showCheckbox}></Table>
    );

    const nodeValueSelectTr = document.querySelector('tbody tr');

    const nodeValueBoxInput = document.querySelector(
      'tbody input[type="checkbox"]'
    );

    expect(nodeValueSelectTr).not.toContainHTML(
      'class="tk-table-checkbox-isChecked'
    );
    fireEvent.click(nodeValueBoxInput);
    expect(nodeValueSelectTr).toContainHTML(
      'class="tk-table-checkbox-isChecked'
    );
  });

  it('should not render optionnal props Pagination', () => {
    const showPagination = false;
    render(
      <Table
        items={items}
        header={header}
        showPagination={showPagination}
      ></Table>
    );

    const selectPagination = document.querySelector('.tk-table-pagination');
    expect(selectPagination).not.toBeInTheDocument();
  });
});
