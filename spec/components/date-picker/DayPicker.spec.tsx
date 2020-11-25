import React from 'react';
import { shallow, mount } from 'enzyme';

import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

import DayPicker from '../../../src/components/date-picker/sub-component/DayPicker';
import Header from '../../../src/components/date-picker/sub-component/Header';

describe('DayPicker Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  function createTestProps(props) {
    return {
      selectedDays: new Date(2020, 0, 1),
      dir: 'ltr',
      labels: {
        previousYear: 'Previous Year',
        nextYear: 'Next Year',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
      },
      onDayClick: jest.fn(),
      onClose: jest.fn(),
      ...props,
    };
  }

  function createKeyboardEvent(props) {
    return {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      ...props,
    };
  }

  it('render with default props does not crash', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  describe('should trigger onChange', () => {
    test.each([[Keys.ENTER], [Keys.SPACE]])('on cell with key %p', (key) => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      expect(props.onDayClick).toHaveBeenCalledTimes(0);
      wrapper
        .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
        .at(0)
        .simulate('click');
      expect(props.onDayClick).toHaveBeenCalledTimes(1);
      wrapper
        .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
        .at(0)
        .simulate(
          'keyDown',
          createKeyboardEvent({
            key,
          })
        );
      expect(props.onDayClick).toHaveBeenCalledTimes(2);
    });

    test.each([[Keys.ENTER], [Keys.SPACE]])('on footer with key %p', (key) => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      expect(props.onDayClick).toHaveBeenCalledTimes(0);
      wrapper.find('.tk-daypicker-today').simulate('click');
      expect(props.onDayClick).toHaveBeenCalledTimes(1);
      wrapper.find('.tk-daypicker-today').simulate(
        'keyDown',
        createKeyboardEvent({
          key,
        })
      );
      expect(props.onDayClick).toHaveBeenCalledTimes(2);
    });
  });

  it('should trigger onClose on ESC', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    expect(props.onClose).toHaveBeenCalledTimes(0);
    wrapper.simulate('keyDown', createKeyboardEvent({ key: Keys.ESC }));
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  describe('should change month', () => {
    it('on Header click', async () => {
      const props = createTestProps({});
      const wrapper = mount(<DayPicker {...props} />);
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      wrapper
        .find(Header)
        .find('.tk-daypicker-header--prevYear')
        .simulate('click');
      wrapper.update();
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Tue Jan 01 2019');
    });
    it('on PAGE_UP', async () => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      wrapper
        .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
        .at(0)
        .simulate('keyDown', createKeyboardEvent({ key: Keys.PAGE_UP }));
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Sun Dec 01 2019');
    });
    it('on PAGE_DOWN', async () => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      wrapper
        .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
        .at(0)
        .simulate('keyDown', createKeyboardEvent({ key: Keys.PAGE_DOWN }));
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Sat Feb 01 2020');
    });
  });

  describe('should change focus', () => {
    it('on footer', () => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      wrapper.find('.tk-daypicker-today').simulate(
        'keyDown',
        createKeyboardEvent({
          key: Keys.TAB,
        })
      );
      wrapper.find('.tk-daypicker-today').simulate(
        'keyDown',
        createKeyboardEvent({
          key: Keys.TAB,
          shiftKey: true,
        })
      );
      // expect(document.activeElement).toBe(...);
    });
    it('on ARROWS', async () => {
      const props = createTestProps({});
      const wrapper = shallow(<DayPicker {...props} />);
      const cell = wrapper
        .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
        .at(0);

      cell.simulate('focus');
      cell.simulate('keyDown', createKeyboardEvent({ key: Keys.ARROW_DOWN }));
      // expect(document.activeElement).toBe(...);
      cell.simulate('keyDown', createKeyboardEvent({ key: Keys.ARROW_UP }));
      // expect(document.activeElement).toBe(...);
      cell.simulate('keyDown', createKeyboardEvent({ key: Keys.ARROW_RIGHT }));
      // expect(document.activeElement).toBe(...);
      cell.simulate('keyDown', createKeyboardEvent({ key: Keys.ARROW_LEFT }));
      // expect(document.activeElement).toBe(...);
      wrapper.unmount();
    });
  });
  it('on TAB against day picker', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    const cell = wrapper
      .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
      .at(0);
    cell.simulate('focus');
    cell.simulate('keyDown', createKeyboardEvent({ key: Keys.TAB }));
  });
  it('on HOME', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    const cell = wrapper
      .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
      .at(0);
    cell.simulate('focus');
    cell.simulate('keyDown', createKeyboardEvent({ key: Keys.HOME }));
    // const cell5 =
    wrapper.find('.tk-daypicker-day:not(.tk-daypicker-day--outside)').at(5);
    // expect(document.activeElement).toBe(cell5);
  });
  it('on END', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    const cell = wrapper
      .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
      .at(0);
    cell.simulate('focus');
    cell.simulate('keyDown', createKeyboardEvent({ key: Keys.END }));
    // const cell11 =
    wrapper.find('.tk-daypicker-day:not(.tk-daypicker-day--outside)').at(11);
    // expect(document.activeElement).toBe(cell11);
  });
});
