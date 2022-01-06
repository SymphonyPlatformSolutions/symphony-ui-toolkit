import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/button/Button';
import Icon from '../../../src/components/icon/Icon';

describe('Button Component', () => {
  describe('"primary" story', () => {
    it('render with default props does not crash', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-button')).toBe(true);
    });
    it('extra props are forwarded to the button element', () => {
      const ariaLabel = 'close';
      const wrapper = shallow(<Button variant="destructive" aria-label={ariaLabel}>Close me</Button>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('button').prop('aria-label')).toEqual(ariaLabel);
    });
    it('renders iconButton icon', () => {
      const wrapper = shallow(
        <Button iconButton>
          <Icon iconName="more"></Icon>
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
      expect(wrapper.find('i').hasClass('tk-icon-loading')).toBe(true);
      expect(wrapper.text().includes(text)).toBe(true);
    });
  });
});
