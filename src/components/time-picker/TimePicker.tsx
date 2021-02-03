import * as PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import { Dropdown } from '../index';
import { components } from 'react-select';

import { Keys } from '../date-picker/utils/keyUtils';

import {
  FIELD,
  TIME_FORMAT,
  formatISOTimeToSeconds,
  getOptions,
  getISOTimeFromLocalTime,
  isOptionDisabled,
  isOptionSelected,
  isTimeValid,
  getOptionValue,
  getSteps,
} from './utils/timeUtils';

// Specific Input to fix input not displayed in React-Select
// See https://github.com/JedWatson/react-select/issues/3068
// See https://github.com/JedWatson/react-select/discussions/4302
const TimePickerInput = (props) => (
  <components.Input {...props} isHidden={false} />
);

const TimePicker: React.FC<TimePickerProps> = ({
  id,
  label,
  name,
  value,
  placeholder,
  min = '00:00:00',
  max = '23:59:59',
  step = 900,
  format,
  strict,
  disabled,
  disabledTimes = [],
}) => {
  // const [time, setTime] = useState(null);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Called when the user select an option in the Dropdown menu
    if (selectedOption) {
      setHours(selectedOption.value.hours);
      setMinutes(selectedOption.value.minutes);
      setSeconds(selectedOption.value.seconds);
      setInputValue(selectedOption.label);
    }
  }, [selectedOption]);

  useEffect(() => {
    let newSelectedOption = options.find(
      (time) =>
        time.value.hours === hours &&
        time.value.minutes === minutes &&
        time.value.seconds === seconds
    );
    if (!newSelectedOption) {
      newSelectedOption = null;
    }
    setSelectedOption(newSelectedOption);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    // Called when the user enters a new date in the input field
    const newTime = getISOTimeFromLocalTime(inputValue, format);
    if (newTime) {
      setHours(newTime.hours);
      setMinutes(newTime.minutes);
      setSeconds(newTime.seconds);
    }
  }, [inputValue]);

  useEffect(() => {
    // Value prop has changed
    setInputValue(value);
    const newTime = getISOTimeFromLocalTime(value); // Without format it will be the ISO format
    if (newTime) {
      setHours(newTime.hours);
      setHours(newTime.minutes);
      setHours(newTime.seconds);
    }
  }, [value]);

  const options = useMemo(
    () =>
      getOptions(
        format,
        formatISOTimeToSeconds(min),
        formatISOTimeToSeconds(max),
        step
      ),
    [format, min, max, step]
  );

  const steps = useMemo(() => getSteps(options), [options]);

  if (step < 600 || step > 43200) {
    // Todo : Raised error value not supported
  }

  return (
    <div>
      <span>SelectedOption--{JSON.stringify(selectedOption)}--</span>
      <br />
      <span>Input value--{inputValue}--</span>
      <br />
      <span>
        Clock--{hours}:{minutes}:{seconds}--
      </span>
      <Dropdown
        isDisabled={disabled}
        iconName="recent"
        id={id}
        name={name}
        label={label}
        placeHolder={placeholder}
        options={options}
        value={selectedOption}
        isOptionDisabled={(option) => isOptionDisabled(option, disabledTimes)}
        isOptionSelected={(option) =>
          isOptionSelected(option, hours, minutes, seconds, disabledTimes)
        }
        onChange={(option) => {
          // Called when the user select an option in the Dropdown menu
          console.log('Select new value:', option);
          setSelectedOption(option);
        }}
        onKeyDown={(event) =>
          handleKeyDown(event, setInputValue, options, steps, format)
        }
        components={{ Input: TimePickerInput }}
        onInputChange={(newValue, metadata) => {
          // Called when the user set a new value in the Input field
          console.log('onInputChange', newValue, metadata);
          if (
            metadata.action === 'set-value' ||
            metadata.action === 'input-change'
          ) {
            console.log('--> setInputValue', newValue);
            setInputValue(newValue);
            // Remove selected hours/minutes/seconds
            setHours('');
            setMinutes('');
            setSeconds('');
          }
        }}
        inputValue={inputValue}
        filterOption={(option, data) => true}
      />
    </div>
  );
};

export type TimePickerProps = {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  step?: number;
  format?: string;
  strict?: boolean;
  disabled?: boolean;
  disabledTimes?: any;
};

TimePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.number,
  format: PropTypes.string,
  strict: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledTimes: PropTypes.array,
};

/**
 * Handle Keyboard navigation in the input Text field
 *
 * @param event Keyboard event
 * @param setInputValue Callback to update the input value saved in the state
 * @param options Dropdown options
 * @param steps Steps to used when the user presses arrow up/down keys
 * @param format (optional) Format to parse the input, if not provided it will use the local user settings
 */
const handleKeyboardNavigation = (
  event,
  setInputValue,
  options,
  steps,
  format
) => {
  const currentValue = event.target.value;
  if (!isTimeValid(currentValue, format)) {
    // If the time is not valid, let the default keyboard navigation
    // to use the dropdown menu
    return;
  }

  // Get cursor position
  const cursor = event.target.selectionStart;
  if (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_DOWN) {
    // Set 'defaultPrevented' to true otherwise the navigation is enable in the Dropdown menu
    event.preventDefault();

    let cursorStart = null;
    let cursorEnd = null;

    const matches = currentValue.split(':');
    if (matches.length === 3) {
      let hours = matches[0];
      let minutes = matches[1];
      let seconds = matches[2];
      const time = {
        hours,
        minutes,
        seconds,
      };

      if (cursor < 3) {
        // Hours
        hours = getOptionValue(event.key, FIELD.HOURS, time, options, steps);
        cursorStart = 0;
        cursorEnd = 2;
      } else if (cursor < 6) {
        // Minutes
        minutes = getOptionValue(
          event.key,
          FIELD.MINUTES,
          time,
          options,
          steps
        );
        cursorStart = 3;
        cursorEnd = 5;
      } else if (cursor < 9) {
        // Seconds
        seconds = getOptionValue(
          event.key,
          FIELD.SECONDS,
          time,
          options,
          steps
        );
        cursorStart = 6;
        cursorEnd = 8;
      }

      // Update value in the Input text field
      const newValue = `${hours}:${minutes}:${seconds}`;
      event.target.value = newValue;
      setInputValue(newValue);

      // Update cursor selection
      event.target.selectionStart = cursor;
      event.target.setSelectionRange(cursorStart, cursorEnd); // TODO : Select minutes / hours / seconds
    }
  } else if (event.key === Keys.TAB) {
    // Manage Tab and Tab + Shift navigation
    let start = null;
    let end = null;
    if (cursor < 3) {
      if (event.shiftKey) {
        // Got to previous component
      } else {
        // Select minutes
        start = 3;
        end = 5;
      }
    } else if (cursor < 6) {
      if (event.shiftKey) {
        // Select hours
        start = 0;
        end = 2;
      } else {
        // Select seconds
        start = 6;
        end = 8;
      }
    } else if (cursor < 9) {
      if (event.shiftKey) {
        // Select minutes
        start = 3;
        end = 5;
      } else {
        // Got to next component
      }
    }
    // TODO : Manage AM/PM and format

    if (start != null && end != null) {
      event.target.setSelectionRange(start, end);
      event.preventDefault();
    }
  }
};

const handleKeyDown = (event, setInputValue, options, steps, format) => {
  if (
    event.key === Keys.ARROW_UP ||
    event.key === Keys.ARROW_DOWN ||
    event.key === Keys.TAB
  ) {
    if (event.target && event.target.tagName === 'INPUT') {
      // Handle keyboard navigation only if the focus is on the focus (not on the icon)
      handleKeyboardNavigation(event, setInputValue, options, steps, format);
    }
  } else if (event.key === Keys.ENTER) {
    console.log('ENTER !!!!');
    // TODO Close the Dropdown menu if it's open
    // Or forbid this action if 'strict' attribute is set to true
  }
};

export default TimePicker;
