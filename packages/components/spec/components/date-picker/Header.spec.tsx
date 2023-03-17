import * as React from 'react';
import { shallow } from 'enzyme';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import { Keys } from '../../../src/components/common/eventUtils';

import Header from '../../../src/components/date-picker/sub-component/Header';


describe('Header Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  function createRef() {
    const prevMonth = document.createElement('div');
    prevMonth.className = 'tk-daypicker-header--prevMonth';
    const today = document.createElement('div');
    today.className = 'tk-daypicker-today';
    const parent = document.createElement('div');
    parent.appendChild(prevMonth);
    parent.appendChild(today);
    return parent;
  }


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
      parentRef: createRef(),
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
      wrapper.find('.tk-daypicker-header--prevYear').prop('aria-label')
    ).toBe(props.labels.previousYear);
    expect(
      wrapper.find('.tk-daypicker-header--nextYear').prop('aria-label')
    ).toBe(props.labels.nextYear);
    expect(
      wrapper.find('.tk-daypicker-header--prevMonth').prop('aria-label')
    ).toBe(props.labels.previousMonth);
    expect(
      wrapper.find('.tk-daypicker-header--nextMonth').prop('aria-label')
    ).toBe(props.labels.nextMonth);
  });
  it('should handle dir "rtl"', () => {
    const props = createTestProps({ dir: 'rtl' });
    const wrapper = shallow(<Header {...props} />);
    expect(
      wrapper
        .find('.tk-daypicker-header--prevYear')
        .find('FontIcon')
        .prop('iconName')
    ).toBe('chevron-right');
    expect(
      wrapper
        .find('.tk-daypicker-header--nextYear')
        .find('FontIcon')
        .prop('iconName')
    ).toBe('chevron-left');
    expect(
      wrapper
        .find('.tk-daypicker-header--prevMonth')
        .find('FontIcon')
        .prop('iconName')
    ).toBe('right');
    expect(
      wrapper
        .find('.tk-daypicker-header--nextMonth')
        .find('FontIcon')
        .prop('iconName')
    ).toBe('left');
  });

  it('should navigation loop', () => {
    const props = createTestProps({});
    render(<Header {...props} />);
    const prevYearBtn = screen.getByLabelText(props.labels.previousYear)
    fireEvent.keyDown(prevYearBtn, { key: Keys.TAB })
    // expect(document.activeElement).toBe(...);
    fireEvent.keyDown(prevYearBtn, { key: Keys.TAB, shiftKey: true })
    // expect(document.activeElement).toBe(...);
  });

  it('should not crash with no parentRef', () => {
    const props = createTestProps({ parentRef: undefined });
    render(<Header {...props} />);
    const prevYearBtn = screen.getByLabelText(props.labels.previousYear)
    fireEvent.keyDown(prevYearBtn, { key: Keys.TAB })
  });

  it('should trigger onChange', () => {
    const props = createTestProps({});
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('.tk-daypicker-header--prevYear').simulate('click');
    wrapper.find('.tk-daypicker-header--nextYear').simulate('click');
    wrapper.find('.tk-daypicker-header--prevMonth').simulate('click');
    wrapper.find('.tk-daypicker-header--nextMonth').simulate('click');
    expect(props.onChange).toHaveBeenCalledTimes(4);
  });
});
