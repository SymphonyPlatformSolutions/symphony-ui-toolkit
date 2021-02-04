import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TimePicker from '../../../src/components/time-picker/TimePicker';

import { Keys } from '../../../src/components/date-picker/utils/keyUtils';
import { Dropdown } from '../../../src';
import { FIELD } from '../../../src/components/time-picker/utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TimePicker Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    // jest.restoreAllMocks();
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

  describe('should change value', () => {
    test.each([
      [FIELD.HOURS, 0, Keys.ARROW_UP, '09:00:00 AM', '10:00:00 AM'],
      [FIELD.HOURS, 0, Keys.ARROW_DOWN, '09:00:00 AM', '08:00:00 AM'],
      [FIELD.MINUTES, 3, Keys.ARROW_UP, '09:30:00 AM', '09:45:00 AM'],
      [FIELD.MINUTES, 3, Keys.ARROW_DOWN, '09:30:00 AM', '09:15:00 AM'],
      [FIELD.SECONDS, 6, Keys.ARROW_UP, '09:30:00 AM', '09:30:01 AM'],
      [FIELD.SECONDS, 6, Keys.ARROW_DOWN, '09:30:00 AM', '09:30:59 AM'],
      [FIELD.AMPM, 9, Keys.ARROW_UP, '09:30:00 AM', '09:30:00 PM'],
      [FIELD.AMPM, 9, Keys.ARROW_DOWN, '09:30:00 AM', '09:30:00 PM'],
      [FIELD.HOURS, 0, Keys.ARROW_DOWN, 'string not valid', 'string not valid'],
    ])(
      'on field %p (cursor %p) when key %p is pressed and Input value is %p',
      async (fieldType, cursorPosition, key, value, expected) => {
        const props = createTestProps({ value });
        const wrapper = mount(<TimePicker {...props} />);
        await act(async () => {
          const eventMock = {
            key,
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

          expect(eventMock.target.value).toBe(expected);
        });
        wrapper.unmount();
      }
    );
  });

  describe('should move focus', () => {
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

  describe('should not allowed to edit input on strict mode', () => {
    test.each([
      ['1'], // Key '1'
      ['a'], // Key 'a'
      [Keys.BACKSPACE],
    ])('when key %p is pressed', async (key) => {
      const value = '09:00:00';
      const props = createTestProps({
        value,
        format: 'hh:mm:ss a',
        strict: true,
      });
      const wrapper = mount(<TimePicker {...props} />);
      await act(async () => {
        const eventMock = {
          key,
          target: {
            tagName: 'INPUT',
            value,
            selectionStart: 0,
            setSelectionRange: jest.fn(),
          },
        };
        wrapper
          .find('.tk-select__input')
          .find('input')
          .simulate('keyDown', eventMock);

        // Value not changed
        expect(eventMock.target.value).toBe(value);
        // Cursor not changed
        expect(eventMock.target.setSelectionRange).toHaveBeenCalledTimes(0);
      });
      wrapper.unmount();
    });
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
});
