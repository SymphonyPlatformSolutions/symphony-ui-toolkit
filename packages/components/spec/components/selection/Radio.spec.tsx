import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { Radio } from '../../../src/components';
import SelectionTypes from '../../../src/components/selection/SelectionTypes';
import { SelectionInput } from '../../../src/components/selection/SelectionInput';
import SelectionStatus from '../../../src/components/selection/SelectionStatus';
import { vi } from 'vitest';

describe('Radio Component', () => {
  describe('Radio component test suite => ', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const wrapper = shallow(
        <Radio name="default-radio-name" value="default-radio-value" />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(
        SelectionTypes.RADIO
      );
      expect(wrapper.find(SelectionInput).prop('name')).toEqual(
        'default-radio-name'
      );
      expect(wrapper.find(SelectionInput).prop('value')).toEqual(
        'default-radio-value'
      );
    });

    it('with "checked" status', () => {
      const onChangeCallback = vi.fn();
      const wrapper = mount(
        <Radio
          name="default-state-radio-name"
          value="default-state-radio-value"
          status={SelectionStatus.CHECKED}
          onChange={onChangeCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(
        SelectionTypes.RADIO
      );
      expect(wrapper.find(SelectionInput).prop('status')).toBe(
        SelectionStatus.CHECKED
      );
      wrapper.unmount();
    });

    it('with click handler', () => {
      const clickCallback = vi.fn();
      const wrapper = shallow(
        <Radio
          name="click-radio-name"
          value="click-radio-value"
          onClick={clickCallback}
        />
      );
      expect(wrapper.length).toEqual(1);
      wrapper.find(SelectionInput).props().onClick(null);
      expect(clickCallback).toBeCalled();
    });
  });
});
