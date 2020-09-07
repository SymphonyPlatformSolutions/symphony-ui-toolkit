import { shallow } from 'enzyme';
import React from 'react';
import {
  SelectionInput,
  Types,
} from '../../../src/components/selection/SelectionInput';

describe('SelectionInput Component', () => {
  describe('SelectionInput test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a Checkbox with default props and initial value and test if a input html tag is used', () => {
      const wrapper = shallow(
        <SelectionInput
          type={Types.CHECKBOX}
          name="SelectionInput-test-name"
          value="SelectionInput-test-value"
        ></SelectionInput>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-checkbox')).toBe(true);
      expect(wrapper.find('input.tk-checkbox').length).toBe(1);
      expect(wrapper.find('input.tk-checkbox').prop('name')).toEqual(
        'SelectionInput-test-name'
      );
      expect(wrapper.find('input.tk-checkbox').prop('value')).toEqual(
        'SelectionInput-test-value'
      );
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(
        <SelectionInput
          type={Types.CHECKBOX}
          name="SelectionInput-test-name"
          value="SelectionInput-test-value"
          aria-label={ariaLabel}
        ></SelectionInput>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });
    it('callbacks should be called on value and validation change', async () => {
      const zone = {
        onClick: () => null,
        onChange: () => null,
      };
      const click = jest.spyOn(zone, 'onClick');
      const change = jest.spyOn(zone, 'onChange');
      const wrapper = shallow(
        <SelectionInput
          type={Types.CHECKBOX}
          name="SelectionInput-test-name"
          value="SelectionInput-test-value"
          handleClick={zone.onClick}
          handleChange={zone.onChange}
        ></SelectionInput>
      );
      wrapper.find('input').simulate('click', { target: { value: '' } });
      wrapper.find('input').simulate('change', { target: { value: '' } });
      expect(click).toHaveBeenCalledWith('');
      expect(change).toHaveBeenCalledWith('');
    });
  });
});
