import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../../../src/components/pagination/Pagination';

const items = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet, sem ac maximus posuere, lacus lacus hendrerit est, sed efficitur urna est eu neque. Phasellus in congue arcu, sed facilisis purus. Quisque pellentesque dictum euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at varius metus. Vestibulum vel mollis eros, tempor pretium felis. Sed placerat velit ac justo vestibulum sodales. Vestibulum eu lorem pharetra, tempor mauris in, sodales velit.',
  },
  {
    text:
      'Praesent viverra tempor elementum. Vestibulum cursus gravida malesuada. Duis euismod ullamcorper ligula eu convallis. Curabitur ut sem ultrices, posuere est non, consectetur leo. Sed mollis hendrerit ante, vel tincidunt tellus commodo non. In luctus eros mi. Aliquam sed neque sapien. Maecenas eleifend, nulla eget volutpat interdum, nisi nunc pharetra justo, in euismod nisi velit ac orci. Quisque ac enim ut odio dignissim porttitor fermentum sed nibh.',
  },
  {
    text:
      'Duis varius sed erat sed lobortis. Mauris viverra vehicula ex in elementum. Vivamus vehicula porta diam, nec luctus sem consequat sit amet. Sed fringilla in lectus in congue. Donec accumsan eu lacus nec imperdiet. Ut mollis felis et tempor aliquet. Etiam ullamcorper ut tortor eget ultricies. Etiam a nisl eget odio pretium ullamcorper id eget dui. Nam condimentum euismod mauris a mattis. Quisque at augue sed risus bibendum hendrerit. Morbi ac porta massa. Quisque at ullamcorper nulla. Maecenas posuere urna et libero rutrum hendrerit at ornare elit. Ut laoreet arcu eu massa mattis ullamcorper. Fusce eu commodo justo. Nulla eget tortor id mi finibus egestas.',
  },
  {
    text:
      'Aenean dictum semper quam, eget feugiat velit posuere id. Integer porttitor mollis massa, blandit sollicitudin nisi imperdiet convallis. Integer cursus sem id mattis rutrum. Mauris ac viverra nisi. Cras magna felis, tristique vitae dui sit amet, euismod ullamcorper urna. Vestibulum dapibus feugiat ligula, et euismod quam posuere a. Suspendisse potenti. Nulla scelerisque commodo diam, at dignissim nunc commodo quis. Praesent egestas rutrum diam in luctus. Phasellus eget cursus nisl. Nulla at volutpat neque. Integer eleifend, ipsum nec condimentum tincidunt, ligula libero mollis purus, tristique blandit dui sem a nulla. Nunc tincidunt sapien diam, vel sagittis ipsum fermentum ut.',
  },
  {
    text:
      'Quisque ultrices viverra porta. Pellentesque nec felis sollicitudin, semper ipsum molestie, pellentesque nunc. Quisque non ligula nisl. Integer interdum, felis et varius feugiat, sem lacus porta mauris, eu dignissim nunc ex et tellus. Phasellus sit amet leo sit amet tortor facilisis finibus. Mauris convallis dui ut nisl luctus, cursus semper tortor mattis. Nam non tortor a leo malesuada porta eget sit amet arcu. Fusce facilisis nibh nec mauris gravida, et convallis mauris porta. Proin et accumsan arcu. Ut euismod quam a mattis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla tempus risus non rhoncus. Nullam ut interdum lectus. Donec cursus tellus sem, eget congue sem commodo at. Donec suscipit turpis quis laoreet egestas.',
  },
];

describe('Pagination Component', () => {
  it('render with required props ', () => {
    const rowsPerPage = { label: 'default', value: 1 };
    const { getByText } = render(
      <Pagination items={items} rowsPerPage={rowsPerPage}></Pagination>
    );
    expect(getByText(items[0].text)).toBeInTheDocument();
  });

  it('should render number of rows per page', () => {
    const rowsPerPage = { label: 'default', value: 1 };
    const { getByText } = render(
      <Pagination items={items} rowsPerPage={rowsPerPage}></Pagination>
    );

    expect(getByText(items[0].text)).toBeInTheDocument();
    expect(rowsPerPage.value).toEqual(1);
  });

  it('should render rowsPerPage selected', () => {
    const rowsPerPage = { label: 'default', value: 1 };
    const showDropDown = true;
    const { getByText, queryByText } = render(
      <Pagination
        items={items}
        showDropDown={showDropDown}
        rowsPerPage={rowsPerPage}
      ></Pagination>
    );
    const dropdown = document.evaluate(
      '//div[@class="tk-pagination"]//div/i',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueDropdown = dropdown.singleNodeValue;

    expect(nodeValueDropdown).toBeInTheDocument();
    expect(queryByText(items[1].text)).not.toBeInTheDocument();
    fireEvent.mouseDown(nodeValueDropdown);
    expect(getByText('5')).toBeInTheDocument();
    fireEvent.click(getByText('10'));
    expect(getByText(items[4].text)).toBeInTheDocument();
  });

  it('should go to the next page when the right chevron is clicked', () => {
    const rowsPerPage = { label: 'default', value: 1 };

    const { getByText } = render(
      <Pagination items={items} rowsPerPage={rowsPerPage}></Pagination>
    );
    const chevronRight = document.evaluate(
      '//div[@class="tk-pagination"]/i[contains(@class,"tk-icon-chevron-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueChevronRight = chevronRight.singleNodeValue;
    const right = document.evaluate(
      '//div[@class="tk-pagination"]/i[contains(@class,"tk-icon-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRight = right.singleNodeValue;
    const firstRow = document.evaluate(
      '//div[contains(@class,"tk-pagination-container")]/div[1]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueFirstRow = firstRow.singleNodeValue;

    expect(nodeValueRight).toBeInTheDocument();
    expect(nodeValueRight).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueFirstRow).not.toContainHTML(
      'Praesent viverra tempor elementum'
    );
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 5')).toBeInTheDocument();
    expect(nodeValueChevronRight).toBeInTheDocument();
    fireEvent.click(nodeValueChevronRight);
    expect(nodeValueRight).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueFirstRow).toContainHTML('Quisque ultrices viverra porta');
    expect(getByText('Page 5 of 5')).toBeInTheDocument();
    fireEvent.click(nodeValueChevronRight);
    expect(getByText('Page 5 of 5')).toBeInTheDocument();
  });

  it('should go to the first page when left chevron is clicked', () => {
    const rowsPerPage = { label: 'default', value: 1 };

    const { getByText } = render(
      <Pagination items={items} rowsPerPage={rowsPerPage}></Pagination>
    );
    const chevronLeft = document.evaluate(
      '//div[@class="tk-pagination"]/i[contains(@class,"tk-icon-chevron-left")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueChevronLeft = chevronLeft.singleNodeValue;

    const left = document.evaluate(
      '//div[@class="tk-pagination"]/i[contains(@class,"tk-icon-left")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueLeft = left.singleNodeValue;

    const right = document.evaluate(
      '//div[@class="tk-pagination"]/i[contains(@class,"tk-icon-right")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueRight = right.singleNodeValue;

    const firstRow = document.evaluate(
      '//div[contains(@class,"tk-pagination-container")]/div[1]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const nodeValueFirstRow = firstRow.singleNodeValue;

    expect(nodeValueChevronLeft).toBeInTheDocument();
    expect(nodeValueLeft).toBeInTheDocument();
    expect(nodeValueLeft).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueChevronLeft).not.toContainHTML('style="cursor: pointer;"');
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 5')).toBeInTheDocument();
    expect(nodeValueLeft).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueChevronLeft).toContainHTML('style="cursor: pointer;"');
    expect(nodeValueFirstRow).not.toContainHTML('Lorem ipsum dolor sit amet');
    fireEvent.click(nodeValueChevronLeft);
    expect(getByText('Page 1 of 5')).toBeInTheDocument();
    expect(nodeValueFirstRow).toContainHTML('Lorem ipsum dolor sit amet');
    expect(nodeValueChevronLeft).not.toContainHTML('style="cursor: pointer;"');
    fireEvent.click(nodeValueRight);
    expect(getByText('Page 2 of 5')).toBeInTheDocument();
    fireEvent.click(nodeValueLeft);
    expect(getByText('Page 1 of 5')).toBeInTheDocument();
    expect(nodeValueLeft).not.toContainHTML('style="cursor: pointer;"');
    expect(nodeValueFirstRow).toHaveTextContent('Lorem ipsum dolor sit amet');
  });
});
