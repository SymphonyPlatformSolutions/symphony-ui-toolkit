import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Switch } from '../../../src/components';
import SelectionStatus from '../../../src/components/selection/SelectionStatus';

describe('Switch Component', () => {
  describe('Switch component test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const { getByRole, container, getByText } = render(
        <Switch name="default-switch-name"
          value="checked-state-switch-value"
          label="label" />
      );

      expect(container.getElementsByClassName('tk-switch')[0]).toBeInTheDocument();
      expect(getByText('label')).toBeInTheDocument();
      expect(getByRole('checkbox')).toHaveAttribute('name', 'default-switch-name');
      expect(getByRole('checkbox')).toHaveAttribute('value', 'checked-state-switch-value');
    });

    it('with "switched" status', () => {
      const onChangeCallback = jest.fn();
      const { container } = render(
        <Switch
          name="checked-state-switch-name"
          value="checked-state-switch-value"
          status={SelectionStatus.SWITCHED}
          onChange={onChangeCallback}
        />
      );

      expect(container.getElementsByClassName('tk-switch')[0]).toHaveAttribute('data-checked', 'true');
    });

    it('with "unswitched" status', () => {
      const onChangeCallback = jest.fn();
      const { container } = render(
        <Switch
          name="checked-state-switch-name"
          value="checked-state-switch-value"
          status={SelectionStatus.UNSWITCHED}
          onChange={onChangeCallback}
        />
      );

      expect(container.getElementsByClassName('tk-switch')[0]).toHaveAttribute('data-checked', 'false');
    });

    it('with click handler', () => {
      const clickCallback = jest.fn();
      const { getByRole, getByText } = render(
        <Switch
          name="click-switch-name"
          value="click-switch-value"
          onClick={clickCallback}
          label="label"
        />
      );

      userEvent.click(getByText('label')); // Click label

      expect(clickCallback).toHaveBeenCalledTimes(1);

      userEvent.click(getByRole('checkbox')); // Click icon

      expect(clickCallback).toHaveBeenCalledTimes(2);
    });
  });
});
