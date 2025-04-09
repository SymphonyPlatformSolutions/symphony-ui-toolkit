import { shallow } from 'enzyme';
import * as React from 'react';
import { TextArea } from '../../../src/components';
import { TextComponent, Types } from '../../../src/components/input/TextComponent';
import { vi } from 'vitest';

describe('TextArea Component', () => {
  describe('TextArea component test suite => ', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('render with default props and initial value', () => {
      const wrapper = shallow(<TextArea />);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(TextComponent).length).toBe(1);
      expect(wrapper.find(TextComponent).prop('type')).toEqual(Types.TEXTAREA);
    });
  });
});
