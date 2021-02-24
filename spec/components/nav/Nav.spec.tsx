import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Nav from '../../../src/components/nav';
import '@testing-library/jest-dom/extend-expect';

const onActiveTabChange = jest.fn();

describe('Nav component test suite =>', () => {
  const navProps = {
    items: [],
    onActiveTabChange: null,
  };

  beforeEach(() => {
    navProps.items = [{ label: 'banana', id: 0 }];
    navProps.onActiveTabChange = {};
  });

  describe('when is simple Nav', () => {
    it('should render the Nav component by default', async () => {
      const { getByText } = render(<Nav items={navProps.items} />);
      expect(getByText('banana')).toBeInTheDocument();
    });

    it('should render the Nav component with an active item', async () => {
      render(
        <Nav
          items={navProps.items}
          activeItemId={0}
          onActiveTabChange={onActiveTabChange}
        />
      );
      const item = screen.getByRole('listitem');
      userEvent.click(item);
      expect(item.className).toBe('tk-nav-item tk-nav-item--active');
    });
  });
});
