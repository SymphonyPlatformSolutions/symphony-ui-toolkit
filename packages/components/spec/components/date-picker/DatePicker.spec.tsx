import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DatePicker from '../../../src/components/date-picker/DatePicker';
import DayPicker from '../../../src/components/date-picker/sub-component/DayPicker';
import TextField from '../../../src/components/input/TextField';
import Icon from '../../../src/components/icon/FontIcon';

import * as eventUtils from '../../../src/components/common/eventUtils';

import { render, screen, fireEvent } from '@testing-library/react';

import { Keys } from '../../../src/components/common/eventUtils';

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
      showRequired: true,
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
      onInit: jest.fn(),
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onValidationChanged: jest.fn(),
      onCalendarOpen: jest.fn(),
      onCalendarClose: jest.fn(),
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
    expect(wrapperField.prop('showRequired')).toBe(props.showRequired);
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
  it('should update locale when locale props change', () => {
    const spy = jest.spyOn(DatePicker.prototype, 'componentDidUpdate');
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.setProps({ locale: 'ja' });
    expect(spy).toHaveBeenCalled();
  });
  it('Should update date when it changes to a valid value and changes date props value', () => {
    const props = createTestProps({ shouldResetInvalidDate: true });
    const wrapper = shallow(<DatePicker {...props} />);
    wrapper
      .find(TextField)
      .simulate('change', { target: { value: '10-02-2024' } });
    expect(wrapper.state('inputValue')).toBe('10-02-2024');
    wrapper.setProps({ date: new Date('10-02-2024') });
    wrapper.setState({ showPicker: false });
    wrapper.update();
    // The value will keep the current value
    expect(wrapper.state('inputValue')).toBe('10-02-2024');
  });
  it('Should not update date when it changes to an invalid value and not changes date props value', () => {
    const props = createTestProps({ shouldResetInvalidDate: true, date: new Date('01-01-2024') });
    const wrapper = shallow(<DatePicker {...props} />);
    wrapper.find(TextField).simulate('change', { target: { value: 'ab' } });
    expect(wrapper.state('inputValue')).toBe('ab');
    wrapper.setState({ showPicker: false });
    wrapper.update();
    // The value will be reset to previous value
    expect(wrapper.state('inputValue')).toBe('01-01-2024');
  });
  it('should show picker when the date changed', () => {
    const props = createTestProps({ shouldResetInvalidDate: true });
    const wrapper = shallow(<DatePicker {...props} />);
    wrapper.find(TextField).simulate('change', { target: { value: '12-ab' } });
    expect(wrapper.state('showPicker')).toBe(true);
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
  describe('should trigger onValidationChanged', () => {
    it('when typing on field', () => {
      const props = createTestProps({
        disabledDays: [
          { daysOfWeek: [0, 1] }, // Disable all Sunday and Monday
          { before: new Date('01-01-2020') },
          { after: new Date('01-01-2021') },
        ],
      });
      const wrapper = shallow(<DatePicker {...props} />);
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: 'incorrect format' } });
      expect(props.onValidationChanged).toHaveBeenCalledWith({
        format: 'The date format is incorrect',
      });
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '12-06-2020' } }); // Sunday
      expect(props.onValidationChanged).toHaveBeenCalledWith({
        disabledDate: 'This date is not available',
      });
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '12-06-2019' } });
      expect(props.onValidationChanged).toHaveBeenCalledWith({
        minDate: 'Date too far in the past',
      });
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '12-06-2021' } });
      expect(props.onValidationChanged).toHaveBeenCalledWith({
        maxDate: 'Date too far in the future',
      });
    });
  });
  describe('when opening the date picker', () => {
    it('should focus to current date if the value is null ', () => {
      const currentDate = new Date().getDate();
      const props = createTestProps({ showOverlay: true, date: null });
      render(<DatePicker {...props} />);
      fireEvent.click(screen.getByRole('textbox'));

      const focusedCell = screen.getByText(`${currentDate}`);
      expect(document.activeElement).toEqual(focusedCell);
    });
    it('should focus to selected date if the value is not null', () => {
      const props = createTestProps({ showOverlay: true });
      render(<DatePicker {...props} />);
      fireEvent.click(screen.getByRole('textbox'));

      const focusedCell = screen.getByText(`${props.date.getDate()}`);
      expect(document.activeElement).toEqual(focusedCell);
    });
    it('should show Date Picker if the selected date was deselected and reopen Date Picker', async () => {
      const props = createTestProps({ showOverlay: true });
      render(<DatePicker {...props} />);

      // Deselected date
      fireEvent.click(screen.getByRole('textbox'));
      fireEvent.click(screen.getByText(`${props.date.getDate()}`));
      fireEvent.click(screen.getByRole('textbox'));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    it('should trigger onCalendarOpen', () => {
      const props = createTestProps({});
      const wrapper = shallow(<DatePicker {...props} />);
      wrapper.setState({ showPicker: true });
      wrapper.update();
      expect(props.onCalendarOpen).toHaveBeenCalledTimes(1);
    });
  });
  describe('should trigger onCalendarClose', () => {
    it('when closing the date picker', () => {
      const props = createTestProps({});
      const wrapper = shallow(<DatePicker {...props} />);
      wrapper
        .find(TextField)
        .simulate('change', { target: { value: '10-02-2024' } });
      wrapper.setState({ showPicker: false });
      wrapper.update();
      expect(props.onCalendarClose).toHaveBeenCalledTimes(1);
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
    test.each([[Keys.ENTER]])('on %p on TextField', async (key) => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper.find('.tk-input').simulate('keyDown', {
          key,
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
        wrapper.find('.tk-input').simulate('click');
      });

      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
    test.each([[Keys.ENTER], [Keys.SPACE], [Keys.SPACEBAR]])(
      'on %p on Icon',
      async (key) => {
        const wrapper = mount(<DatePicker />);
        expect(wrapper.state('showPicker')).toBe(false);
        await act(async () => {
          wrapper
            .find(TextField)
            .find('.tk-input__right-decorators .tk-icon-calendar')
            .simulate('keyDown', { key });
        });
        wrapper.update();
        expect(wrapper.state('showPicker')).toBe(true);
        wrapper.unmount();
      }
    );
    it('on icon click', async () => {
      const wrapper = mount(<DatePicker />);
      expect(wrapper.state('showPicker')).toBe(false);
      await act(async () => {
        wrapper
          .find(TextField)
          .find('.tk-input__right-decorators .tk-icon-calendar')
          .simulate('click');
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(true);
      wrapper.unmount();
    });
  });
  describe('should close overlay on ESC', () => {
    test.each([[Keys.ESC], [Keys.TAB]])(
      'against TextField with %p',
      async (key) => {
        const wrapper = mount(<DatePicker showOverlay={true} />);
        expect(wrapper.state('showPicker')).toBe(true);
        await act(async () => {
          wrapper.find('.tk-input').simulate('keyDown', { key });
        });
        wrapper.update();
        expect(wrapper.state('showPicker')).toBe(false);
        wrapper.unmount();
      }
    );
    it('against Icon', async () => {
      const wrapper = mount(<DatePicker showOverlay={true} />);
      expect(wrapper.state('showPicker')).toBe(true);
      await act(async () => {
        wrapper
          .find(TextField)
          .find('.tk-input__right-decorators .tk-icon-calendar')
          .simulate('keyDown', { key: Keys.ESC });
      });
      wrapper.update();
      expect(wrapper.state('showPicker')).toBe(false);
      wrapper.unmount();
    });
  });
  it('should reset date picker', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DatePicker {...props} />);

    expect(props.onChange).toHaveBeenCalledTimes(0);
    (wrapper.instance() as DatePicker).reset(props.date);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
  describe('should handle TAB event against the icon', () => {
    it('on current day of the month if the value is null', async () => {
      const currentDate = new Date().getDate();
      const props = createTestProps({ showOverlay: true, date: null });
      render(<DatePicker {...props} />);
      const icon = document.querySelector('.tk-icon-calendar');
      fireEvent.keyDown(icon, { key: Keys.TAB });

      const focusedCell = screen.getByText(`${currentDate}`);
      expect(document.activeElement).toEqual(focusedCell);

      fireEvent.keyDown(icon, { key: '1' }); // type something that trigger nothing
      expect(document.activeElement).toEqual(focusedCell);
    });
    it('on value if not null', async () => {
      const props = createTestProps({ showOverlay: true });
      render(<DatePicker {...props} />);
      const icon = document.querySelector('.tk-icon-calendar');
      fireEvent.keyDown(icon, { key: Keys.TAB });

      const focusedCell = screen.getByText(`${props.date.getDate()}`);
      expect(document.activeElement).toEqual(focusedCell);
    });
  });
  it('should handle Enter and default keydown', async () => {
    const props = createTestProps({});
    render(<DatePicker {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: Keys.ENTER });
    fireEvent.keyDown(input, { key: 'a' }); // type something that trigger nothing

    const calendar = screen.getByRole('dialog');
    expect(calendar).toBeTruthy();
  });

  it('should handle a value null event', () => {
    const props = createTestProps({});
    render(<DatePicker {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: null } });
    expect(props.onChange).toHaveBeenCalledWith({ target: { value: null } });
  });
  it('should call onBlur when click outside', () => {
    const props = createTestProps({
      showOverlay: true,
      date: new Date(2020, 0, 1),
    });
    render(
      <>
        <div>outside</div>
        <DatePicker {...props} />
      </>
    );
    expect(props.onBlur).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(screen.getByText('outside'));
    expect(props.onBlur).toHaveBeenCalledTimes(1);
  });

  it('should ignore showOverlay when menuPortalTarget', () => {
    const props = createTestProps({
      showOverlay: true,
      menuPortalTarget: document.body,
    });
    const { container } = render(<DatePicker {...props} />);
    expect(container.querySelector('.DatePickerContainer')).toEqual(null);
  });

  it('should attach block scroll event listener to scroll parent', async () => {
    const wrapper = mount(
      <div className="scroll">
        <DatePicker menuShouldBlockScroll={true} />
      </div>
    );
    jest
      .spyOn(eventUtils, 'getScrollParent')
      .mockReturnValue(wrapper.find('.scroll').getDOMNode()); // spy on getScrollParent

    await act(async () => {
      // mount
      wrapper.find('.tk-input').simulate('keyDown', {
        key: Keys.ENTER,
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      });
    });
    wrapper.update();

    await act(async () => {
      // unmount
      wrapper.find('.tk-input').simulate('keyDown', {
        key: Keys.ESC,
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      });
    });

    wrapper.unmount();
  });
});
