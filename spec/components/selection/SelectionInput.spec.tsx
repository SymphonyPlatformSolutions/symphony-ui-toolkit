import { mount, shallow } from 'enzyme';
import * as React from 'react';
import SelectionTypes from '../../../src/components/selection/SelectionTypes';

import { SelectionInput } from '../../../src/components/selection/SelectionInput';
import { act } from 'react-dom/test-utils';
import { Keys } from '../../../src/components/common/keyUtils';

describe('SelectionInput Component', () => {
  describe('SelectionInput test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a Checkbox with default props and initial value and test if a input html tag is used', () => {
      const wrapper = shallow(
        <SelectionInput
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-test-name"
          value="SelectionInput-test-value"
        />
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
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-test-name2"
          value="SelectionInput-test-value"
          aria-label={ariaLabel}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });

    it('with click handler', () => {
      const clickCallback = jest.fn();
      const changeCallback = jest.fn();
      const wrapper = shallow(
        <SelectionInput
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-action-name"
          value="SelectionInput-action-value"
          onClick={clickCallback}
          onChange={changeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').length).toBe(1);
      wrapper.find('input').simulate('click');
      expect(clickCallback).toBeCalled();
      wrapper.find('input').simulate('change');
      expect(changeCallback).toBeCalled();
    });
    it('should select the checkbox when the "Space" touch is pressed', async () => {
      // Set-up event listener mock
      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const clickCallback = jest.fn();
      const changeCallback = jest.fn();

      const wrapper = mount(
        <SelectionInput
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-action-name"
          value="SelectionInput-action-value"
          onClick={clickCallback}
          onChange={changeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').length).toBe(1);

      act(() => {
        // Set focus on input
        wrapper.find('input').prop('onFocus')(null);
      });

      act(() => {
        // Simulate a click on 'Space' keyboard touch
        map['keydown']({ key: Keys.SPACE, preventDefault: jest.fn() });
      });

      wrapper.update();
      expect(clickCallback).toBeCalled();
    });
    it('should add "focus-visible" CSS class when "Tab" touch is pressed', async () => {
      // Set-up event listener mock
      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const clickCallback = jest.fn();
      const changeCallback = jest.fn();

      const wrapper = mount(
        <SelectionInput
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-action-name"
          value="SelectionInput-action-value"
          onClick={clickCallback}
          onChange={changeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').length).toBe(1);

      // The '...--focus-visible' CSS class should not be present
      expect(wrapper.find('.tk-checkbox--focus-visible').length).toBe(0);
      // Neither the '...-focused' CSS class
      expect(wrapper.find('.tk-checkbox--focused').length).toBe(0);

      act(() => {
        // Set focus on input
        wrapper.find('input').prop('onFocus')(null);
      });

      act(() => {
        // Simulate a click on 'Tab' keyboard touch
        map['keyup']({ key: Keys.TAB });
      });

      wrapper.update();

      // After the keyboard action, the '...--focus-visible' CSS class should be present
      expect(wrapper.find('.tk-checkbox--focus-visible').length).toBe(1);
      expect(wrapper.find('.tk-checkbox--focused').length).toBe(1);
    });
    it('should remove the "focused" CSS class on blur', async () => {
      // Set-up event listener mock
      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const clickCallback = jest.fn();
      const changeCallback = jest.fn();

      const wrapper = mount(
        <SelectionInput
          type={SelectionTypes.CHECKBOX}
          name="SelectionInput-action-name"
          value="SelectionInput-action-value"
          onClick={clickCallback}
          onChange={changeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').length).toBe(1);

      act(() => {
        // Set focus on input
        wrapper.find('input').prop('onFocus')(null);
      });

      wrapper.update();

      expect(wrapper.find('.tk-checkbox--focused').length).toBe(1);

      act(() => {
        // On blur on input
        wrapper.find('input').prop('onBlur')(null);
      });

      wrapper.update();

      expect(wrapper.find('.tk-checkbox--focused').length).toBe(0);
      expect(wrapper.find('.tk-checkbox--focus-visible').length).toBe(0);
    });
  });
});
