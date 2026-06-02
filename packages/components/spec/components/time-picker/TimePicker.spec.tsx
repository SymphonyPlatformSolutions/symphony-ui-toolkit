import * as React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TimePicker from '../../../src/components/time-picker/TimePicker';

import { Keys } from '../../../src/components/common/eventUtils';
import { FIELD } from '../../../src/components/time-picker/utils';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('TimePicker Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  function createTestProps(props) {
    return {
      id: 'id-test',
      label: 'label-test',
      showRequired: true,
      name: 'name-test',
      placeholder: 'placeholder-test',
      min: '08:00:00',
      max: '16:00:00',
      format: 'hh:mm:ss a',
      onBlur: vi.fn(),
      onChange: vi.fn(),
      onCopy: vi.fn(),
      onCut: vi.fn(),
      onDrag: vi.fn(),
      onValidationChanged: vi.fn(),
      ...props,
    };
  }

  it('should render', () => {
    render(<TimePicker />);
  });

  it('should properly pass props to the underlying Dropdown component', () => {
    render(<TimePicker label="New Label"/>);
    screen.getByText('New Label');
  })

  it('should trigger onFocus', async () => {
    const props = createTestProps({
      value: '09:00:00',
      format: 'HH:mm:ss',
      onFocus: vi.fn(),
    });
    render(<TimePicker {...props} />);
    const input = screen.getByRole('combobox');
    expect(props.onFocus).toHaveBeenCalledTimes(0);
    await userEvent.click(input);
    expect(props.onFocus).toHaveBeenCalledTimes(1);
  });

  describe('should trigger onBlur when click outside', () => {
    test.each([
      [null, ''],
      [undefined, ''],
      ['', ''],
      ['09:00:00', '09:00:00'],
    ])('with %p on field', async (value, expected) => {
      const props = createTestProps({
        value,
        format: 'HH:mm:ss',
        onBlur: vi.fn(),
      });
      render(<><div>outside</div><TimePicker {...props} /></>);
      expect(props.onBlur).toHaveBeenCalledTimes(0);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      expect(props.onBlur).toHaveBeenCalledTimes(0);
      await userEvent.click(screen.getByText('outside'))
      expect(props.onBlur).toHaveBeenCalledWith({ target: { value: expected } });
    });
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

        const input = screen.getByRole('combobox');

        // Update input value
        fireEvent.change(input, { target: { value: value } });
        // react-select v5 keeps the typed text on the input value (rather than
        // rendering it as a separate text node), so assert against the input.
        expect(input).toHaveValue(value);

        const eventMock = {
          key: value.charAt(0),
          target: {
            value,
            selectionStart: value.length,
            setSelectionRange: vi.fn(),
          },
        };

        fireEvent.keyUp(input, eventMock);
        expect(input).toHaveValue(expectedValue);
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
              setSelectionRange: vi.fn(),
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

  it('should open/close menu on "Enter" key pressed', async () => {
    const props = createTestProps({
      min: '08:00:00',
      max: '19:00:00',
      value: '09:00:00',
      format: 'HH:mm:ss',
    });

    render(<TimePicker {...props} />);

    // Menu should be closed
    expect(screen.queryAllByText('08:00:00')).toHaveLength(0);

    const input = screen.getByRole('combobox');

    const eventMock = {
      key: Keys.ENTER,
      target: {
        value: '09:00:00',
      },
    };

    // 'Enter' key on input
    fireEvent.keyDown(input, eventMock);

    // Menu should be opened
    expect(await screen.findAllByText('08:00:00')).toHaveLength(1);

    // 'Enter' key on input
    fireEvent.keyDown(input, eventMock);

    // Menu should be closed
    expect(screen.queryAllByText('08:00:00')).toHaveLength(0);
  });

  describe('should select a value', () => {
    it('should select first option', async () => {
      const props = createTestProps({
        value: '09:00:00',
        format: 'HH:mm:ss',
      });
      render(<TimePicker {...props} />);
      const input = screen.getByRole('combobox');
      await userEvent.click(input);
      const option = screen.getByText('10:00:00');
      await userEvent.click(option);
      // The selected time is reflected on the input value in react-select v5.
      expect(input).toHaveValue('10:00:00');
    });
  });

  describe('should fallback the default step value', () => {
    test.each([
      [null, '00:00:00', '12:15:00 AM'], // Default fallback value 15 minutes
      [0, '00:00:00', '12:10:00 AM'], // Min fallback value 10 minutes
      [99999, '00:00:00', '12:00:00 PM'], // Max fallback value 12 hours
    ])('when step is %p', async (step, min, expected) => {
      vi.spyOn(console, 'error').mockImplementation(() => {
        return;
      });
      const props = createTestProps({
        min,
        step,
      });
      
      render(<TimePicker {...props} />);

      const input = screen.getByRole('combobox');
      await userEvent.click(input);

      const options = screen.getAllByRole('option')
      expect(options[1].textContent).toBe(expected)
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
