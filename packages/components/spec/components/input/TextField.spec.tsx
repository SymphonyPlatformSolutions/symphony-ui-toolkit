import { shallow } from 'enzyme';
import * as React from 'react';
import { TextField } from '../../../src/components';
import { TextComponent, Types } from '../../../src/components/input/TextComponent';
import { vi } from 'vitest';

describe('TextField Component', () => {
  describe('TextField component test suite => ', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const wrapper = shallow(<TextField />);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(TextComponent).length).toBe(1);
      expect(wrapper.find(TextComponent).prop('type')).toEqual(Types.TEXTFIELD);
    });
  });
});
