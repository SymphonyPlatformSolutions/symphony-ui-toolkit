import { shallow } from 'enzyme';
import * as React from 'react';
import Icon from '../../../src/components/icon';

describe('Icon Component', () => {
  describe('Icon component test suite => ', () => {
    function createTestProps(props) {
      return {
        className: 'my-custom-class',
        iconName: 'calendar',
        tabIndex: 0,
        onClick: jest.fn(),
        onKeyDown: jest.fn(),
        ...props,
      };
    }

    it('render with required props', () => {
      const wrapper = shallow(<Icon iconName="calendar"></Icon>);
      expect(wrapper.length).toEqual(1);
    });
    it('should handle onClick', () => {
      const props = createTestProps({});
      const wrapper = shallow(<Icon {...props}></Icon>);

      wrapper.simulate('click');
      expect(props.onClick).toBeCalled();
    });
    it('should handle onKeyDown', () => {
      const props = createTestProps({});
      const wrapper = shallow(<Icon {...props}></Icon>);

      wrapper.simulate('keyDown', {keyCode: 13});
      expect(props.onKeyDown).toBeCalled();
    });
    it('handle disabled props', () => {
      const props = createTestProps({disabled: true});
      const wrapper = shallow(<Icon {...props}></Icon>);
      expect(wrapper.length).toEqual(1);

      expect(wrapper.prop('onClick')).toBe(null);

      wrapper.simulate('click');
      expect(props.onClick).toBeCalledTimes(0);
      
      expect(wrapper.prop('onKeyDown')).toBe(null);
      wrapper.simulate('keyDown', {keyCode: 13});
      expect(props.onKeyDown).toBeCalledTimes(0);
    });
  });
});
