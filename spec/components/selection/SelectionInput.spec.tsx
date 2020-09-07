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
      expect(wrapper.find('.tk-checkbox').length).toBe(1);
      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('input').prop('name')).toEqual(
        'SelectionInput-test-name'
      );
      expect(wrapper.find('input').prop('value')).toEqual(
        'SelectionInput-test-value'
      );
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(
        <SelectionInput
          type={Types.CHECKBOX}
          name="SelectionInput-test-name2"
          value="SelectionInput-test-value"
          aria-label={ariaLabel}
        ></SelectionInput>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });

    it('with click handler', () => {
      const clickCallback = jest.fn();
      const changeCallback = jest.fn();
      const wrapper = shallow(
        <SelectionInput
          type={Types.CHECKBOX}
          name="SelectionInput-action-name"
          value="SelectionInput-action-value"
          handleClick={clickCallback}
          handleChange={changeCallback}
        ></SelectionInput>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').length).toBe(1);
      wrapper.find('input').simulate('click');
      expect(clickCallback).toBeCalled();
      wrapper.find('input').simulate('change');
      expect(changeCallback).toBeCalled();
    });
  });
});
