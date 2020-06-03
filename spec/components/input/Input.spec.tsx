import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/button/Button';
import { Input } from '../../../src/components';

describe('Input', () => {
  describe('Input component test suite => ', () => {
    it('render with default props and initial value', () => {
      const wrapper = shallow(<Input value="Test"></Input>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.childAt(1).hasClass('tk-input')).toBe(true);
      expect(wrapper.find('input').prop('value')).toEqual('Test');
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(<Input aria-label={ariaLabel}></Input>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });
  });
});
