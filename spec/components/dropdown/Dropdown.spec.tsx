import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Dropdown from '../../../src/components/dropdown';
import { DropdownProps } from '../../../src/components/dropdown/Dropdown';
import '@testing-library/jest-dom/extend-expect';
import { iconData, IconPickerTag } from '../../../src/components/dropdown/CustomRender';

describe('Dropdown component test suite =>', () => {
  const dropdownProps: DropdownProps = {
    options: [],
    id: 'testId'
  };

  beforeEach(() => {
    dropdownProps.options = [ { label: 'banana' }, { label: 'avocado' }, { label: 'orange' } ];
  });

  describe('when is simple Dropdown', () => {
    it('should render the Dropdown component by default', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} />);
      expect(getByText('Select...')).toBeInTheDocument();
    });
    
    it('should show/hide options menu', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} />);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      expect(getByText('banana')).toBeTruthy();
      expect(getByText('avocado')).toBeTruthy();
      expect(getByText('orange')).toBeTruthy();
    });
    
    it('should select first option', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} />);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('banana');
      userEvent.click(option);
      expect(getByText('banana')).toBeTruthy();
    });
    
    it('should render costum render dropdown', async () => {
      const { getByText } = render(
        <Dropdown
          isMultiSelect
          options={iconData}
          optionRenderer={IconPicker}
          displayArrowIndicator
          tagRenderer={IconPicker}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('app');
      userEvent.click(option);
      expect(getByText('app')).toBeTruthy();
    });
  });

  describe('when is Multiselect', () => {

    it('should render the Multiselect component by default', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} isMultiSelect />);
      expect(getByText('Select...')).toBeInTheDocument();
    });
    
    it('should show/hide options menu', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} isMultiSelect />);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      expect(getByText('banana')).toBeTruthy();
      expect(getByText('avocado')).toBeTruthy();
      expect(getByText('orange')).toBeTruthy();
    });
    
    it('should select first option', async () => {
      const { getByText } = render(<Dropdown options={dropdownProps.options} isMultiSelect />);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('banana');
      userEvent.click(option);
      expect(getByText('banana')).toBeTruthy();
    });
    
    it('should render costum render dropdown', async () => {
      const { getByText } = render(
        <Dropdown
          isMultiSelect
          options={iconData}
          optionRenderer={IconPicker}
          displayArrowIndicator
          tagRenderer={IconPicker}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('app');
      userEvent.click(option);
      expect(getByText('app')).toBeTruthy();
    });
  });
});
