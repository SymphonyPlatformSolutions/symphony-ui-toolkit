import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/button/Button';

describe('Button Component', () => {
  describe('"primary" story', () => {
    it('render with default props does not crash', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-button')).toBe(true);
    });
    it('extra props are forwarded to the button element', () => {
      const ariaLabel = 'close';
      const wrapper = shallow(<Button aria-label={ariaLabel}>Close me</Button>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('button').prop('aria-label')).toEqual(ariaLabel);
    });
    it('renders iconButton icon', () => {
      const wrapper = shallow(
        <Button iconButton>
          <i className="tk-ic-lock" />
        </Button>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-button--icon')).toBe(true);
    });
    it('renders loading icon', () => {
      const text = 'button text';
      const wrapper = shallow(<Button loading>{text}</Button>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('i').hasClass('animate-spin')).toBe(true);
      expect(wrapper.find('i').hasClass('tk-ic-loading')).toBe(true);
      expect(wrapper.text().includes(text)).toBe(false);
    });
  });
});
