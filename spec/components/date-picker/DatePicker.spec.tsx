import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DayPicker from 'react-day-picker';

import DatePicker from '../../../src/components/date-picker/DatePicker';
import TextField from '../../../src/components/input/TextField';
import Icon from '../../../src/components/icon/Icon';

import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

//TODO: Uncomment expect assertion
describe('DatePicker Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  function createTestProps(props) {
    const date = new Date();
    return {
      date: date,
      disabledDays: null,
      disabled: false,
      dir: 'ltr',
      format: 'MM-dd-yyyy',
      initialMonth: date,
      label: 'Expense',
      labels: {
        previousYear: 'Previous Year',
        nextYear: 'Next Year',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
      },
      placeholder: 'MM-DD-YYYY',
      locale: 'en-US',
      placement: 'bottom',
      todayButton: 'Today',
      tooltip: 'Departure date',
      showOverlay: false,
      onBlur: jest.fn(),
      onChange: jest.fn(),
      ...props,
    };
  }

  it('should render with default props', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper.length).toEqual(1);
  });
  it('should properly pass props to TextField', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);
    const wrapperField = wrapper.find(TextField);
    expect(wrapperField.length).toBe(1);
    expect(wrapperField.prop('disabled')).toBe(props.disabled);
    expect(wrapperField.prop('label')).toBe(props.label);
    expect(wrapperField.prop('placeholder')).toBe(props.placeholder);
    expect(wrapperField.prop('tooltip')).toBe(props.tooltip);
  });
  it('should properly pass props to React Day Picker', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);
    const wrapperPicker = wrapper.find(DayPicker);
    expect(wrapperPicker.length).toBe(1);
    expect(wrapperPicker.prop('aria-labelledby')).toBe(props.label);
    expect(wrapperPicker.prop('dir')).toBe('ltr');
    expect(wrapperPicker.prop('disabledDays')).toBe(props.disabledDays);
    expect(wrapperPicker.prop('locale')).toBe('en-US');
    expect(wrapperPicker.prop('fixedWeeks')).toBe(true);
    expect(wrapperPicker.prop('selectedDays')).toBe(props.date);
    expect(wrapperPicker.prop('todayButton')).toBe('Today');
  });
  describe('should trigger onChange', () => {
    it('when typing on field', () => {
      const props = createTestProps({});
      const wrapper = shallow(<DatePicker {...props} />);
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '12-06' } });
      expect(props.onChange).toHaveBeenCalledTimes(1);
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '12-06-2020' } });
      expect(props.onChange).toHaveBeenCalledTimes(2);
    });
    it('when clicking on cell', async () => {
      const props = createTestProps({ showOverlay: true });
      const wrapper = mount(<DatePicker {...props} />);
      await act(async () => {
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .simulate('click');
      });

      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
    it('not when clicking on disabled cell', async () => {
      const props = createTestProps({
        showOverlay: true,
        disabledDays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
      });
      const wrapper = mount(<DatePicker {...props} />);
      await act(async () => {
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .simulate('click');
      });
      expect(props.onChange).toHaveBeenCalledTimes(0);
    });
  });
  it('should trigger onBlur', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);
    wrapper.find(TextField).simulate('blur');
    expect(props.onBlur).toHaveBeenCalledTimes(1);
  });

  describe('should change month', async () => {
    it('on Header click', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 1)} />
      );
      expect(
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      await act(async () => {
        wrapper.find('.DayPicker-Caption--prevYear').simulate('click');
      });
      // expect(wrapper.find('.DayPicker-Day:not(.DayPicker-Day--outside)').at(0).prop('aria-label')).toEqual("Sun Dec 01 2019");
    });
    it('on PAGE_UP', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 1)} />
      );
      expect(
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      await act(async () => {
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .simulate('keyDown', { key: Keys.PAGE_UP });
      });
      // expect(wrapper.find('.DayPicker-Day:not(.DayPicker-Day--outside)').at(0).prop('aria-label')).toEqual("Sun Dec 01 2019");
    });
    it('on PAGE_DOWN', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 1)} />
      );
      expect(
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      await act(async () => {
        wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0)
          .simulate('keyDown', { key: Keys.PAGE_DOWN });
      });
      // expect(
      //   wrapper
      //     .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
      //     .at(0)
      //     .prop('aria-label')
      // ).toEqual('Sat Feb 01 2020');
    });
  });

  describe('should change focus', async () => {
    it('on TAB', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 8)} />
      );

      await act(async () => {
        const cell = wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0);
        cell.simulate('focus');
        cell.simulate('keyDown', { key: Keys.TAB });
      });
    });
    it('on HOME', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 8)} />
      );

      await act(async () => {
        const cell = wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0);
        cell.simulate('focus');
        cell.simulate('keyDown', { key: Keys.HOME });
      });
      // const cell5 =
      wrapper
        .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
        .at(5);

      // expect(cell5).toEqual(document.activeElement);
    });
    it('on END', async () => {
      const wrapper = mount(
        <DatePicker showOverlay={true} date={new Date(2020, 0, 8)} />
      );

      await act(async () => {
        const cell = wrapper
          .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .at(0);
        cell.simulate('focus');
        cell.simulate('keyDown', { key: Keys.END });
      });
      // const cell11 = 
      wrapper
        .find('.DayPicker-Day:not(.DayPicker-Day--outside)')
        .at(11);
      // expect(cell11).toEqual(document.activeElement);
    });
  });

  describe('should open overlay', () => {
    it('on ENTER on TextField', () => {
      const wrapper = shallow(<DatePicker />);
      expect(wrapper.find('.DayPicker').length).toBe(0);
      wrapper.find(TextField).simulate('keyDown', {
        key: Keys.ENTER,
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      });
      // expect(wrapper.find('.DayPicker').length).toBe(1);
    });
    it('on focus TextField', () => {
      const wrapper = shallow(<DatePicker />);
      expect(wrapper.find('.DayPicker').length).toBe(0);
      wrapper.find(TextField).simulate('focus');
      // expect(wrapper.find('.DayPicker').length).toBe(1);
    });
    it('on ENTER on Icon', () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.find('.DayPicker').length).toBe(0);
      wrapper.find(Icon).simulate('keyDown', { key: Keys.ENTER });
      // expect(wrapper.find('.DayPicker').length).toBe(1);
    });
    it('on icon click', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.find('.DayPicker').length).toBe(0);
      await act(async () => {
        wrapper.find(Icon).simulate('click');
      });
      // expect(wrapper.find('.DayPicker').length).toBe(1);
    });
  });
  it('should close overlay on ESC', async () => {
    const wrapper = mount(<DatePicker showOverlay={true} />);
    expect(wrapper.find('.DayPicker').length).toBe(1);
    await act(async () => {
      wrapper.find(DayPicker).simulate('keyDown', { key: Keys.ESC });
    });
    // expect(wrapper.find('.DayPicker').length).toBe(0);
    await act(async () => {
      wrapper.find(TextField).simulate('keyDown', { key: Keys.ESC });
    });
    // expect(wrapper.find('.DayPicker').length).toBe(0);
  });
});
