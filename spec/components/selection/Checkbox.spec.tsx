import { shallow } from 'enzyme';
import React from 'react';
import { Checkbox } from '../../../src/components';
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
        <Checkbox
          name="test-checkbbox-name"
          value="test-checkbox-value"
        ></Checkbox>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(SelectionInput).length).toBe(1);
      expect(wrapper.find(SelectionInput).prop('type')).toEqual(Types.CHECKBOX);
    });
  });
});
