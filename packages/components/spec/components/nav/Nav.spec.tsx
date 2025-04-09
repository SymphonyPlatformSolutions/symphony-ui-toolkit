import { render, waitFor } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';
import * as React from 'react';
import Nav from '../../../src/components/nav';
import { vi } from 'vitest';

const onActiveTabChange = vi.fn();
const items = [
  { id: 0, label: 'banana' },
  { id: 1, label: 'peach' },
];

describe('Nav component test suite =>', () => {

  describe('when is simple Nav', () => {

    it('should render a div with a tk-nav class', async () => {
      const { baseElement } = render(
        <Nav items={items} />
      );

      expect(baseElement.getElementsByClassName('tk-nav').length).toBe(1);
    });

    it('should render the Nav component by default', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toBeInTheDocument();
      expect(getByText('peach')).toBeInTheDocument();
      expect(getByText('banana')).toHaveClass('tk-nav-item--active');
      expect(getByText('peach')).not.toHaveClass('tk-nav-item--active');
    });

    it('should activate an item on click', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');

      userEvent.click(getByText('peach'));

      await waitFor(() => {
        expect(getByText('banana')).not.toHaveClass('tk-nav-item--active');
        expect(getByText('peach')).toHaveClass('tk-nav-item--active');
      })

    });

    it('should activate an item on enter', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');

      userEvent.type(getByText('peach'), specialChars.enter);
      

      await waitFor(() => {
        expect(getByText('banana')).not.toHaveClass('tk-nav-item--active');
        expect(getByText('peach')).toHaveClass('tk-nav-item--active');
      })

    });

    it('should activate an item on space', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');

      userEvent.type(getByText('peach'), specialChars.space);
      

      await waitFor(() => {
        expect(getByText('banana')).not.toHaveClass('tk-nav-item--active');
        expect(getByText('peach')).toHaveClass('tk-nav-item--active');
      })

    });

    it('should activate item has focus when first tab', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');

      userEvent.tab();
      
      await waitFor(() => {
        expect(getByText('banana')).toHaveFocus();
      })

    });

    it('should move focus using arrow keys', async () => {
      const { getByText } = render(
        <Nav items={items} />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');

      userEvent.type(getByText('banana'), specialChars.arrowRight);

      await waitFor(() => {
        expect(getByText('peach')).toHaveFocus();
      })

      userEvent.type(getByText('peach'), specialChars.arrowRight);

      await waitFor(() => {
        expect(getByText('banana')).toHaveFocus();
      })

      userEvent.type(getByText('banana'), specialChars.arrowLeft);

      await waitFor(() => {
        expect(getByText('peach')).toHaveFocus();
      })

      userEvent.type(getByText('peach'), specialChars.arrowLeft);

      await waitFor(() => {
        expect(getByText('banana')).toHaveFocus();
      })

    });

    it('should render the Nav component with an active item', async () => {
      const { getByText } = render(
        <Nav
          items={items}
          activeItemId={1}
        />
      );

      expect(getByText('banana')).not.toHaveClass('tk-nav-item--active');
      expect(getByText('peach')).toHaveClass('tk-nav-item--active');
    });

    it('should update the active item when the activeItemId changes', async () => {
      const { getByText, rerender } = render(
        <Nav
          items={items}
          activeItemId={0}
        />
      );

      expect(getByText('banana')).toHaveClass('tk-nav-item--active');
      expect(getByText('peach')).not.toHaveClass('tk-nav-item--active');

      rerender(
        <Nav
          items={items}
          activeItemId={1}
        />
      );

      expect(getByText('banana')).not.toHaveClass('tk-nav-item--active');
      expect(getByText('peach')).toHaveClass('tk-nav-item--active');
    });

    it('should trigger onActiveTabChange when tab is clicked', async () => {
      const { getByText } = render(
        <Nav
          items={items}
          activeItemId={0}
          onActiveTabChange={onActiveTabChange}
        />
      );

      userEvent.click(getByText('peach'));

      await waitFor(() => {
        expect(onActiveTabChange).toHaveBeenCalledWith(items[1]);
      });
    });
  });
});
