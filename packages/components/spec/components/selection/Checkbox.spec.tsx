import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { Checkbox } from '../../../src/components';
import SelectionTypes from '../../../src/components/selection/SelectionTypes';
import { SelectionInput } from '../../../src/components/selection/SelectionInput';
import SelectionStatus from '../../../src/components/selection/SelectionStatus';
import { vi } from 'vitest';

describe('Checkbox Component', () => {
  describe('Checkbox component test suite => ', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const wrapper = shallow(
        <Checkbox name="default-checkbox-name" value="default-checkbox-value" />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(
        SelectionTypes.CHECKBOX
      );
      expect(wrapper.find(SelectionInput).prop('name')).toEqual(
        'default-checkbox-name'
      );
      expect(wrapper.find(SelectionInput).prop('value')).toEqual(
        'default-checkbox-value'
      );
    });

    it('with "checked" status', () => {
      const onChangeCallback = vi.fn();
      const wrapper = mount(
        <Checkbox
          name="checked-state-checkbox-name"
          value="checked-state-checkbox-value"
          status={SelectionStatus.CHECKED}
          onChange={onChangeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(
        SelectionTypes.CHECKBOX
      );
      expect(wrapper.find(SelectionInput).prop('status')).toBe(
        SelectionStatus.CHECKED
      );
      wrapper.unmount();
    });

    it('with "mixed" status', () => {
      const onChangeCallback = vi.fn();
      const wrapper = shallow(
        <Checkbox
          name="mixed-checkbox-name"
          value="mixed-checkbox-value"
          status={SelectionStatus.MIXED}
          onChange={onChangeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(
        SelectionTypes.CHECKBOX
      );
      expect(wrapper.find(SelectionInput).prop('status')).toBe(
        SelectionStatus.MIXED
      );
    });

    it('with click handler', () => {
      const clickCallback = vi.fn();
      const wrapper = shallow(
        <Checkbox
          name="click-checkbox-name"
          value="click-checkbox-value"
          onClick={clickCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      wrapper.find(SelectionInput).props().onClick(null);
      expect(clickCallback).toBeCalled();
    });
  });
});
