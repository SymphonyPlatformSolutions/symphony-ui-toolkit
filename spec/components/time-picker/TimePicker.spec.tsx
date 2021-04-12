import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TimePicker from '../../../src/components/time-picker/TimePicker';

import { Keys } from '../../../src/components/common/keyUtils';
import { Dropdown } from '../../../src';
import { FIELD } from '../../../src/components/time-picker/utils';
import {
  render,
  screen,
  fireEvent,
  getDefaultNormalizer,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TimePicker Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  function createTestProps(props) {
    return {
      id: 'id-test',
      label: 'label-test',
      name: 'name-test',
      placeholder: 'placeholder-test',
      min: '08:00:00',
      max: '16:00:00',
      format: 'hh:mm:ss a',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onValidationChanged: jest.fn(),
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

  describe('should move focus', () => {
    test.each([
      ['09', '09:', 3],
      ['09:00', '09:00:', 6],
      ['09:00:00', '09:00:00 ', 9],
    ])(
      'and autofill the input from value %p to %p',
      async (value, expectedValue, expectedCursor) => {
        const props = createTestProps({ format: 'hh:mm:ss a' });
        render(<TimePicker {...props} />);

        const input = screen.getByRole('textbox');

        // Update input value
        fireEvent.change(input, { target: { value: value } });
        expect(screen.getByText(value)).toBeTruthy();

        const eventMock = {
          key: value.charAt(0),
          target: {
            value,
            selectionStart: value.length,
            setSelectionRange: jest.fn(),
          },
        };

        fireEvent.keyUp(input, eventMock);
        expect(
          screen.getByText(expectedValue, {
            // By default, normalization consists of trimming whitespace from the start and end of text
            // so, disabled this default behavior to keep ending space
            normalizer: getDefaultNormalizer({ trim: false }),
          })
        ).toBeTruthy();
        expect(eventMock.target.setSelectionRange).toHaveBeenCalledWith(
          expectedCursor,
          expectedCursor
        );
      }
    );

    test.each([
      [FIELD.HOURS, 0, Keys.TAB, false, '09:00:00 AM', 3, 5],
      [FIELD.HOURS, 0, Keys.TAB, true, '09:00:00 AM', null, null],
      [FIELD.MINUTES, 3, Keys.TAB, false, '09:00:00 AM', 6, 8],
      [FIELD.MINUTES, 3, Keys.TAB, true, '09:00:00 AM', 0, 2],
      [FIELD.SECONDS, 6, Keys.TAB, false, '09:00:00 AM', 9, 11],
      [FIELD.SECONDS, 6, Keys.TAB, true, '09:00:00 AM', 3, 5],
      [FIELD.AMPM, 9, Keys.TAB, false, '09:00:00 AM', null, null],
      [FIELD.AMPM, 9, Keys.TAB, true, '09:00:00 AM', 6, 8],
    ])(
      'from field %p (cursor %p) when key %p is pressed with Shift Key is %p, on value %p',
      async (
        fieldType,
        cursorPosition,
        key,
        shiftKey,
        value,
        cursorStart,
        cursorEnd
      ) => {
        const props = createTestProps({ value, format: 'hh:mm:ss a' });
        const wrapper = mount(<TimePicker {...props} />);
        await act(async () => {
          const eventMock = {
            key,
            shiftKey,
            target: {
              tagName: 'INPUT',
              value,
              selectionStart: cursorPosition,
              setSelectionRange: jest.fn(),
            },
          };
          wrapper
            .find('.tk-select__input')
            .find('input')
            .simulate('keyDown', eventMock);

          if (cursorStart !== null && cursorEnd !== null) {
            expect(eventMock.target.setSelectionRange).toHaveBeenCalledWith(
              cursorStart,
              cursorEnd
            );
          } else {
            expect(eventMock.target.setSelectionRange).toHaveBeenCalledTimes(0);
          }
        });
        wrapper.unmount();
      }
    );
  });

  describe('should select a value', () => {
    it('should select first option', async () => {
      const props = createTestProps({
        value: '09:00:00',
        format: 'HH:mm:ss',
      });
      const { getByText } = render(<TimePicker {...props} />);
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      const option = screen.getByText('10:00:00');
      userEvent.click(option);
      expect(getByText('10:00:00')).toBeTruthy();
    });
  });

  describe('should fallback the default step value', () => {
    test.each([
      [null, '00:00:00', '00:15:00'], // Default fallback value 15 minutes
      [0, '00:00:00', '00:10:00'], // Min fallback value 10 minutes
      [99999, '00:00:00', '12:00:00'], // Max fallback value 12 hours
    ])('when step is %p', (step, min, expected) => {
      jest.spyOn(console, 'error').mockImplementation(() => {
        return;
      });
      const props = createTestProps({
        min,
        step,
      });
      const wrapper = shallow(<TimePicker {...props} />);

      const dropDownProps = wrapper.find(Dropdown).props();
      expect(dropDownProps.options).toBeDefined();
      expect(dropDownProps.options.length).toBeGreaterThan(1);
      const secondOption = dropDownProps.options[1];
      expect(secondOption).toBeDefined();
      expect(secondOption.value).toBe(expected);
    });
  });

  describe('should trigger onValidationChanged', () => {
    test.each([
      ['', null],
    ])('when typing %p on field', async (value, expected) => {
      const props = createTestProps({
        min: '09:00:00',
        max: '19:00:00',
        format: 'hh:mm:ss a',
        disabledTimes: [
          { from: '10:00:00', to: '11:00:00' },
          { time: '15:00:00' },
        ],
      });
      const wrapper = mount(<TimePicker {...props} />);

      expect(props.onValidationChanged).toHaveBeenCalledTimes(0);

      wrapper
        .find('.tk-select__input')
        .find('input')
        .simulate('change', value)

      expect(props.onValidationChanged).toHaveBeenCalledWith(expected);

      wrapper.unmount();
    });
  });
});
