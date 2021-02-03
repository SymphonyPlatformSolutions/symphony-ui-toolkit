import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TimePicker from '../../../src/components/time-picker/TimePicker';

import { Keys } from '../../../src/components/date-picker/utils/keyUtils';
import * as PropTypes from 'prop-types';
import { Dropdown } from '../../../src';

describe('TimePicker Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  function createTestProps(props) {
    return {
      id: 'id-test',
      label: 'label-test',
      name: 'name-test',
      // value: PropTypes.string,
      placeholder: 'placeholder-test',
      min: '10:00:00',
      max: '16:00:00',
      // step: PropTypes.number,
      format: 'hh:mm:ss a',
      strict: PropTypes.bool,
      // disabled: PropTypes.bool,
      // disabledTimes: PropTypes.array,
      ...props,
    };
  }

  it('should render with default props', () => {
    const wrapper = shallow(<TimePicker />);
    expect(wrapper.length).toEqual(1);
  });
  it('should properly pass props to Dropdown Component', () => {
    const props = createTestProps({});
    const wrapper = shallow(<TimePicker {...props} />);
    const wrapperPicker = wrapper.find(Dropdown);
    expect(wrapperPicker.length).toBe(1);
    expect(wrapperPicker.prop('id')).toBe(props.id);
    expect(wrapperPicker.prop('label')).toBe(props.label);
    expect(wrapperPicker.prop('name')).toBe(props.name);
    expect(wrapperPicker.prop('placeHolder')).toBe(props.placeholder);
  });
  // it('when clicking on inputField', async () => {
  //   const props = createTestProps({ showOverlay: true });
  //   const wrapper = mount(<TimePicker {...props} />);
  //   await act(async () => {
  //     wrapper.find('.tk-select').at(0).simulate('click');
  //     expect(wrapper.find('.tk-select__menu')).toBe(1);
  //   });
  //   wrapper.unmount();
  // });

  // it('should properly pass props to TextField', () => {
  //   const props = createTestProps({});
  //   const wrapper = shallow(<TimePicker {...props} />);
  //   const wrapperField = wrapper.find(TextField);
  //   expect(wrapperField.length).toBe(1);
  //   expect(wrapperField.prop('disabled')).toBe(props.disabled);
  //   expect(wrapperField.prop('label')).toBe(props.label);
  //   expect(wrapperField.prop('placeholder')).toBe(props.placeholder);
  //   expect(wrapperField.prop('tooltip')).toBe(props.tooltip);
  //   expect(wrapperField.prop('name')).toBe(props.name);
  // });
  // it('should update locale when locale props change', () => {
  //   const spy = jest.spyOn(DatePicker.prototype, 'componentDidUpdate');
  //   const props = createTestProps({});
  //   const wrapper = shallow(<DatePicker {...props} />);
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper.setProps({ locale: 'ja' });
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should not pass date if part of disabled date', () => {
  //   const props = createTestProps({
  //     disabledDays: { after: new Date(0, 0, 0) },
  //   });
  //   const wrapper = shallow(<DatePicker {...props} />);
  //   const wrapperPicker = wrapper.find(DayPicker);
  //   const wrapperTextField = wrapper.find(TextField);
  //   expect(wrapperPicker.prop('selectedDays')).toBe(null);
  //   expect(wrapperTextField.prop('value')).toBe('');
  // });
  // describe('should trigger onChange', () => {
  //   it('when typing on field', () => {
  //     const props = createTestProps({});
  //     const wrapper = shallow(<DatePicker {...props} />);
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: '12-06' } });
  //     expect(props.onChange).toHaveBeenCalledTimes(1);
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: '12-06-2020' } });
  //     expect(props.onChange).toHaveBeenCalledTimes(2);
  //   });
  //   it('when clicking on cell', async () => {
  //     const props = createTestProps({ showOverlay: true });
  //     const wrapper = mount(<DatePicker {...props} />);
  //     await act(async () => {
  //       wrapper
  //         .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
  //         .at(0)
  //         .simulate('click');
  //     });
  //
  //     expect(props.onChange).toHaveBeenCalledTimes(1);
  //     wrapper.unmount();
  //   });
  //   it('not when clicking on disabled cell', async () => {
  //     const props = createTestProps({
  //       disabledDays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
  //     });
  //     const wrapper = mount(<DatePicker {...props} />);
  //     await act(async () => {
  //       wrapper
  //         .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
  //         .at(0)
  //         .simulate('click');
  //     });
  //     expect(props.onChange).toHaveBeenCalledTimes(0);
  //     wrapper.unmount();
  //   });
  // });
  // describe('should trigger onValidationChanged', () => {
  //   it('when typing on field', () => {
  //     const props = createTestProps({
  //       disabledDays: [
  //         { daysOfWeek: [0, 1] }, // Disable all Sunday and Monday
  //         { before: new Date('01-01-2020') },
  //         { after: new Date('01-01-2021') },
  //       ],
  //     });
  //     const wrapper = shallow(<DatePicker {...props} />);
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: 'incorrect format' } });
  //     expect(props.onValidationChanged).toHaveBeenCalledWith({
  //       format: 'The date format is incorrect',
  //     });
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: '12-06-2020' } }); // Sunday
  //     expect(props.onValidationChanged).toHaveBeenCalledWith({
  //       disabledDate: 'This date is not available',
  //     });
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: '12-06-2019' } });
  //     expect(props.onValidationChanged).toHaveBeenCalledWith({
  //       minDate: 'Date too far in the past',
  //     });
  //     wrapper
  //       .find(TextField)
  //       .simulate('change', { target: { value: '12-06-2021' } });
  //     expect(props.onValidationChanged).toHaveBeenCalledWith({
  //       maxDate: 'Date too far in the future',
  //     });
  //   });
  // });
  // describe('should change focus', () => {
  //   it('on TAB against icon', async () => {
  //     const wrapper = mount(<DatePicker />);
  //     await act(async () => {
  //       wrapper
  //         .find(TextField)
  //         .find(Icon)
  //         .simulate('keyDown', { key: Keys.TAB });
  //     });
  //     wrapper.update();
  //     wrapper.unmount();
  //   });
  // });
  //
  // describe('should open overlay', () => {
  //   test.each([[Keys.ENTER]])('on %p on TextField', async (key) => {
  //     const wrapper = mount(<DatePicker />);
  //     expect(wrapper.state('showPicker')).toBe(false);
  //     await act(async () => {
  //       wrapper.find('.tk-input').simulate('keyDown', {
  //         key,
  //         preventDefault: jest.fn(),
  //         stopPropagation: jest.fn(),
  //       });
  //     });
  //     wrapper.update();
  //     expect(wrapper.state('showPicker')).toBe(true);
  //     wrapper.unmount();
  //   });
  //   it('on focus TextField', async () => {
  //     const wrapper = mount(<DatePicker />);
  //     expect(wrapper.state('showPicker')).toBe(false);
  //     await act(async () => {
  //       wrapper.find('.tk-input').simulate('focus');
  //     });
  //
  //     wrapper.update();
  //     expect(wrapper.state('showPicker')).toBe(true);
  //     wrapper.unmount();
  //   });
  //   test.each([[Keys.ENTER], [Keys.SPACE], [Keys.SPACEBAR]])(
  //     'on %p on Icon',
  //     async (key) => {
  //       const wrapper = mount(<DatePicker />);
  //       expect(wrapper.state('showPicker')).toBe(false);
  //       await act(async () => {
  //         wrapper
  //           .find(TextField)
  //           .find('.tk-input__icon .tk-icon-calendar')
  //           .simulate('keyDown', { key });
  //       });
  //       wrapper.update();
  //       expect(wrapper.state('showPicker')).toBe(true);
  //       wrapper.unmount();
  //     }
  //   );
  //   it('on icon click', async () => {
  //     const wrapper = mount(<DatePicker />);
  //     expect(wrapper.state('showPicker')).toBe(false);
  //     await act(async () => {
  //       wrapper
  //         .find(TextField)
  //         .find('.tk-input__icon .tk-icon-calendar')
  //         .simulate('click');
  //     });
  //     wrapper.update();
  //     expect(wrapper.state('showPicker')).toBe(true);
  //     wrapper.unmount();
  //   });
  // });
  // describe('should close overlay on ESC', () => {
  //   test.each([[Keys.ESC], [Keys.TAB]])(
  //     'against TextField with %p',
  //     async (key) => {
  //       const wrapper = mount(<DatePicker showOverlay={true} />);
  //       expect(wrapper.state('showPicker')).toBe(true);
  //       await act(async () => {
  //         wrapper.find('.tk-input').simulate('keyDown', { key });
  //       });
  //       wrapper.update();
  //       expect(wrapper.state('showPicker')).toBe(false);
  //       wrapper.unmount();
  //     }
  //   );
  //   it('against Icon', async () => {
  //     const wrapper = mount(<DatePicker showOverlay={true} />);
  //     expect(wrapper.state('showPicker')).toBe(true);
  //     await act(async () => {
  //       wrapper
  //         .find(TextField)
  //         .find('.tk-input__icon .tk-icon-calendar')
  //         .simulate('keyDown', { key: Keys.ESC });
  //     });
  //     wrapper.update();
  //     expect(wrapper.state('showPicker')).toBe(false);
  //     wrapper.unmount();
  //   });
  // });
  // it('should reset date picker', async () => {
  //   const props = createTestProps({});
  //   const wrapper = shallow(<DatePicker {...props} />);
  //
  //   expect(props.onChange).toHaveBeenCalledTimes(0);
  //   (wrapper.instance() as DatePicker).reset(props.date);
  //   expect(props.onChange).toHaveBeenCalledTimes(1);
  // });
});
