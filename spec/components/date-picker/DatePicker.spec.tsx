import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DatePicker from '../../../src/components/date-picker/DatePicker';
import DayPicker from '../../../src/components/date-picker/sub-component/DayPicker';
import TextField from '../../../src/components/input/TextField';
import Icon from '../../../src/components/icon/Icon';

import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

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
      name: 'date-travel',
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
    expect(wrapperField.prop('name')).toBe(props.name);
  });
  it('should properly pass props to React Day Picker', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);
    const wrapperPicker = wrapper.find(DayPicker);
    expect(wrapperPicker.length).toBe(1);
    expect(wrapperPicker.prop('aria-labelledby')).toBe(props.label);
    expect(wrapperPicker.prop('dir')).toBe('ltr');
    expect(wrapperPicker.prop('disabledDays')).toBe(props.disabledDays);
    expect(wrapperPicker.prop('locale')).not.toBeNull();
    expect(wrapperPicker.prop('selectedDays')).toBe(props.date);
    expect(wrapperPicker.prop('todayButton')).toBe('Today');
  });
  it('should not pass date if part of disabled date', () => {
    const props = createTestProps({
      disabledDays: { after: new Date(0, 0, 0) },
    });
    const wrapper = shallow(<DatePicker {...props} />);
    const wrapperPicker = wrapper.find(DayPicker);
    const wrapperTextField = wrapper.find(TextField);
    expect(wrapperPicker.prop('selectedDays')).toBe(null);
    expect(wrapperTextField.prop('value')).toBe('');
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
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .simulate('click');
      });

      expect(props.onChange).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });
    it('not when clicking on disabled cell', async () => {
      const props = createTestProps({
        disabledDays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
      });
      const wrapper = mount(<DatePicker {...props} />);
      await act(async () => {
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .simulate('click');
      });
      expect(props.onChange).toHaveBeenCalledTimes(0);
      wrapper.unmount();
    });
  });
  describe('should change focus', () => {
    it('on TAB against icon', async () => {
      const wrapper = mount(<DatePicker />);
      await act(async () => {
        wrapper
          .find(TextField)
          .find(Icon)
          .simulate('keyDown', { key: Keys.TAB });
      });
      wrapper.update();
      wrapper.unmount();
    });
  });

  describe('should open overlay', () => {
    it('on ENTER on TextField', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper.find('.tk-input').simulate('keyDown', {
          key: Keys.ENTER,
          preventDefault: jest.fn(),
          stopPropagation: jest.fn(),
        });
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
    it('on focus TextField', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper.find('.tk-input').simulate('focus');
      });

      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
    it('on ENTER on Icon', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper
          .find(TextField)
          .find('.tk-input__icon .tk-icon-calendar')
          .simulate('keyDown', { key: Keys.ENTER });
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
    it('on icon click', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper
          .find(TextField)
          .find('.tk-input__icon .tk-icon-calendar')
          .simulate('click');
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
  });
  describe('should close overlay on ESC', () => {
    it('against TextField', async () => {
      const wrapper = mount(<DatePicker showOverlay={true} />);
      expect(wrapper.state('showPicker')).toBe(true);
      await act(async () => {
        wrapper.find('.tk-input').simulate('keyDown', { key: Keys.ESC });
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(false);
      wrapper.unmount();
    });
    it('against Icon', async () => {
      const wrapper = mount(<DatePicker showOverlay={true} />);
      expect(wrapper.state('showPicker')).toBe(true);
      await act(async () => {
        wrapper
          .find(TextField)
          .find('.tk-input__icon .tk-icon-calendar')
          .simulate('keyDown', { key: Keys.ESC });
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(false);
      wrapper.unmount();
    });
  });
});
