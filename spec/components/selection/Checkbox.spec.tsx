import { shallow, mount } from 'enzyme';
import React from 'react';
import { Checkbox } from '../../../src/components';
import CheckboxStates from '../../../src/components/selection/CheckboxStates';
import {
  SelectionInput,
  Types,
} from '../../../src/components/selection/SelectionInput';

describe('Checkbox Component', () => {
  describe('Checkbox component test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const wrapper = shallow(
        <Checkbox name="default-checkbox-name" value="default-checkbox-value" />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(Types.CHECKBOX);
      expect(wrapper.find(SelectionInput).prop('name')).toEqual(
        'default-checkbox-name'
      );
      expect(wrapper.find(SelectionInput).prop('value')).toEqual(
        'default-checkbox-value'
      );
    });

    it('with default selection state', () => {
      const wrapper = mount(
        <Checkbox
          name="default-state-checkbox-name"
          value="default-state-checkbox-value"
          defaultSelectionState={CheckboxStates.CHECKED}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(Types.CHECKBOX);
      expect(wrapper.find(SelectionInput).prop('selectionState')).toBe(
        CheckboxStates.CHECKED
      );
      wrapper.unmount();
    });

    it('with configured selection state', () => {
      const wrapper = shallow(
        <Checkbox
          name="configured-checkbox-name"
          value="configured-checkbox-value"
          selectionState={CheckboxStates.CHECKED}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(Types.CHECKBOX);
      expect(wrapper.find(SelectionInput).prop('selectionState')).toBe(
        CheckboxStates.CHECKED
      );
    });

    it('with click handler', () => {
      const clickCallback = jest.fn();
      const wrapper = shallow(
        <Checkbox
          data-test="toto"
          name="click-checkbox-name"
          value="click-checkbox-value"
          handleClick={clickCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      wrapper.find(SelectionInput).props().handleClick(null);
      expect(clickCallback).toBeCalled();
    });
  });
});
