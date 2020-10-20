import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/components/date-picker/Header';

describe('Header Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  function createTestProps(props) {
    return {
      date: new Date(),
      dir: 'ltr',
      labels: {
        previousYear: 'Previous Year',
        nextYear: 'Next Year',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
      },
      months: ['J', 'F', 'M', 'A'],
      onChange: jest.fn(),
      ...props,
    };
  }

  it('render with default props does not crash', () => {
    const props = createTestProps({});
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.length).toEqual(1);
  });
  it('should render with aria labels', () => {
    const props = createTestProps({});
    const wrapper = shallow(<Header {...props} />);
    expect(
      wrapper.find('.DayPicker-Caption--prevYear').prop('aria-label')
    ).toBe(props.labels.previousYear);
    expect(
      wrapper.find('.DayPicker-Caption--nextYear').prop('aria-label')
    ).toBe(props.labels.nextYear);
    expect(
      wrapper.find('.DayPicker-Caption--prevMonth').prop('aria-label')
    ).toBe(props.labels.previousMonth);
    expect(
      wrapper.find('.DayPicker-Caption--nextMonth').prop('aria-label')
    ).toBe(props.labels.nextMonth);
  });
  it('should handle dir "rtl"', () => {
    const props = createTestProps({ dir: 'rtl' });
    const wrapper = shallow(<Header {...props} />);
    expect(
      wrapper.find('.DayPicker-Caption--prevYear').find('Icon').prop('iconName')
    ).toBe('chevron-right');
    expect(
      wrapper.find('.DayPicker-Caption--nextYear').find('Icon').prop('iconName')
    ).toBe('chevron-left');
    expect(
      wrapper
        .find('.DayPicker-Caption--prevMonth')
        .find('Icon')
        .prop('iconName')
    ).toBe('right');
    expect(
      wrapper
        .find('.DayPicker-Caption--nextMonth')
        .find('Icon')
        .prop('iconName')
    ).toBe('left');
  });
  it('should trigger onChange', () => {
    const props = createTestProps({});
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('.DayPicker-Caption--prevYear').simulate('click');
    wrapper.find('.DayPicker-Caption--nextYear').simulate('click');
    wrapper.find('.DayPicker-Caption--prevMonth').simulate('click');
    wrapper.find('.DayPicker-Caption--nextMonth').simulate('click');
    expect(props.onChange).toHaveBeenCalledTimes(4);
  });
});
