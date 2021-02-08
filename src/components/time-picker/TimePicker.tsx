import * as PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import { Dropdown } from '../index';

import { Keys } from '../common/keyUtils';

import {
  FIELD,
  formatTimeISO,
  formatISOTimeToSeconds,
  getOptions,
  getISOTimeFromLocalTime,
  getTimeFromString,
  isTimeDisabled,
  isTimeSelected,
  isTimeValid,
  getOptionValue,
  getSteps,
  getUserFormat,
  getFormattedTime,
} from './utils';

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
  onChange,
}) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Called when the user select an option in the Dropdown menu
    if (selectedOption) {
      setHours(selectedOption.data.hours);
      setMinutes(selectedOption.data.minutes);
      setSeconds(selectedOption.data.seconds);
      setInputValue(selectedOption.label);
    }
  }, [selectedOption]);

  useEffect(() => {
    let newSelectedOption = options.find(
      (option) =>
        option.data.hours === hours &&
        option.data.minutes === minutes &&
        option.data.seconds === seconds
    );
    if (
      !newSelectedOption ||
      isTimeDisabled(newSelectedOption.data, disabledTimes)
    ) {
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

    // Called onChange prop
    if (onChange) {
      const data = {
        target: {
          value: {
            input: inputValue,
            iso: formatTimeISO(newTime),
          },
        },
      };
      onChange(data);
    }
  }, [inputValue]);

  useEffect(() => {
    // Value prop has changed
    const newTime = getISOTimeFromLocalTime(value); // Without format it will be the ISO format
    if (newTime) {
      setInputValue(getFormattedTime(newTime, format));
    } else {
      setInputValue('');
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

  const steps = useMemo(() => getSteps(options, disabledTimes), [options, disabledTimes]);

  if (step < 600 || step > 43200) {
    // Todo : Raised error value not supported
  }

  if (!placeholder) {
    placeholder = format ? format : getUserFormat();
  }

  return (
    <Dropdown
      isDisabled={disabled}
      iconName="recent"
      id={id}
      name={name}
      label={label}
      placeHolder={placeholder}
      options={options}
      value={selectedOption}
      isOptionDisabled={(time) => isTimeDisabled(time, disabledTimes)}
      isOptionSelected={(time) =>
        isTimeSelected(time, hours, minutes, seconds, disabledTimes)
      }
      onChange={(option) => {
        // Called when the user select an option in the Dropdown menu
        setSelectedOption(option);
      }}
      onKeyDown={(event) =>
        handleKeyDown(event, strict, setInputValue, options, steps, format)
      }
      onInputChange={(newValue, metadata) => {
        // Called when the user set a new value in the Input field
        if (
          metadata.action === 'set-value' ||
          metadata.action === 'input-change'
        ) {
          setInputValue(newValue);
          // Remove selected hours/minutes/seconds
          setHours('');
          setMinutes('');
          setSeconds('');
        }
      }}
      inputValue={inputValue}
      inputAlwaysDisplayed={true}
      filterFunction={() => true}
    />
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
  onChange?: (event) => void;
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
  onChange: PropTypes.func,
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
  const time = getTimeFromString(currentValue);

  if (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_DOWN) {
    // Set 'defaultPrevented' to true otherwise the navigation is enable in the Dropdown menu
    event.preventDefault();

    let cursorStart = null;
    let cursorEnd = null;

    if (time) {
      let hours = time.hours;
      let minutes = time.minutes;
      let seconds = time.seconds;
      let ampm = time.ampm;

      if (hours && cursor < 3) {
        // Hours
        hours = getOptionValue(event.key, FIELD.HOURS, time, options, steps);
        cursorStart = 0;
        cursorEnd = 2;
      } else if (minutes && cursor < 6) {
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
      } else if (seconds && cursor < 9) {
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
      } else if (ampm) {
        ampm = getOptionValue(event.key, FIELD.AMPM, time, options, steps);
        cursorStart = 9;
        cursorEnd = 11;
      }

      // Update value in the Input text field
      let newValue = `${hours}:${minutes}`;
      if (seconds) {
        newValue += `:${seconds}`;
      }
      if (ampm) {
        newValue += ` ${ampm}`;
      }
      event.target.value = newValue;
      setInputValue(newValue);

      // Update cursor selection
      event.target.selectionStart = cursor;
      event.target.setSelectionRange(cursorStart, cursorEnd);
    }
  } else if (event.key === Keys.TAB) {
    // Manage Tab and Tab + Shift navigation
    let start = null;
    let end = null;
    if (cursor < 3) {
      if (event.shiftKey) {
        // Go to previous component
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
      } else if (time.seconds || time.ampm) {
        // Select seconds or ampm
        start = 6;
        end = 8;
      }
    } else if (cursor < 9) {
      if (event.shiftKey) {
        // Select minutes
        start = 3;
        end = 5;
      } else if (time.seconds && time.ampm) {
        // Select ampm
        start = 9;
        end = 11;
      }
    } else {
      if (event.shiftKey) {
        // Select seconds
        start = 6;
        end = 8;
      }
    }

    if (start != null && end != null) {
      event.target.setSelectionRange(start, end);
      event.preventDefault();
    }
  }
};

const handleKeyDown = (
  event,
  strict,
  setInputValue,
  options,
  steps,
  format
) => {
  // debugger;
  if (event.target && event.target.tagName === 'INPUT') {
    if (
      event.key === Keys.ARROW_UP ||
      event.key === Keys.ARROW_DOWN ||
      event.key === Keys.TAB
    ) {
      // Handle keyboard navigation only if the focus is on the focus (not on the icon)
      handleKeyboardNavigation(event, setInputValue, options, steps, format);
    } else if (strict) {
      // The user is not allowed to set manually another value
      event.preventDefault();
    }
  }
};

export default TimePicker;
