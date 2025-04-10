import { shallow } from 'enzyme';
import * as React from 'react';
import { SvgIcon } from '../../../src/components/icon';
import { Calendar } from '../../../src/components/icons';
import { vi } from 'vitest';

describe('Icon Component =>', () => {
  
  function createTestProps(props) {
    return {
      className: 'my-custom-class',
      icon: Calendar,
      tabIndex: 0,
      onClick: vi.fn(),
      onKeyDown: vi.fn(),
      ...props,
    };
  }

  it('render with required props', () => {
    const wrapper = shallow(<SvgIcon icon={Calendar}></SvgIcon>);
    expect(wrapper.length).toEqual(1);
  });

  it('should handle onClick', () => {
    const props = createTestProps({});
    const wrapper = shallow(<SvgIcon {...props}></SvgIcon>);

    wrapper.simulate('click');
    expect(props.onClick).toBeCalled();
  });

  it('should handle onKeyDown', () => {
    const props = createTestProps({});
    const wrapper = shallow(<SvgIcon {...props}></SvgIcon>);

    wrapper.simulate('keyDown', {keyCode: 13});
    expect(props.onKeyDown).toBeCalled();
  });

  it('handle disabled props', () => {
    const props = createTestProps({disabled: true});
    const wrapper = shallow(<SvgIcon {...props}></SvgIcon>);
    expect(wrapper.length).toEqual(1);

    expect(wrapper.prop('onClick')).toBe(undefined);

    wrapper.simulate('click');
    expect(props.onClick).toBeCalledTimes(0);
      
    expect(wrapper.prop('onKeyDown')).toBe(undefined);
    wrapper.simulate('keyDown', {keyCode: 13});
    expect(props.onKeyDown).toBeCalledTimes(0);
  });

});
