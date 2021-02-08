import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Dropdown from '../../../src/components/dropdown';
import '@testing-library/jest-dom/extend-expect';

const CustomComponent = (props) => {
  if (props.data){
    return (<div>{props?.data?.label}</div>);
  }
}

describe('Dropdown component test suite =>', () => {
  const dropdownProps = {
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
      const { getByText } = render(<Dropdown options={dropdownProps.options} noOptionMessage="no options message"/>);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('banana');
      userEvent.click(option);
      expect(getByText('banana')).toBeTruthy();
      userEvent.type(input, 'zz');
      expect(screen.getByText('no options message')).toBeTruthy();
    });
    
    it('should render costum render dropdown', async () => {
      const { getByText } = render(
        <Dropdown
          isMultiSelect
          options={dropdownProps.options}
          optionRenderer={CustomComponent}
          displayArrowIndicator
          tagRenderer={CustomComponent}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('banana');
      userEvent.click(option);
      expect(getByText('banana')).toBeTruthy();
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
          options={dropdownProps.options}
          optionRenderer={CustomComponent}
          displayArrowIndicator
          tagRenderer={CustomComponent}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('banana');
      userEvent.click(option);
      expect(getByText('banana')).toBeTruthy();
    });
  });
});
