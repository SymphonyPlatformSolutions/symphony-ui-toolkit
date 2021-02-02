import * as PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Dropdown } from '../index';
import { components } from 'react-select';

import { Keys } from '../date-picker/utils/keyUtils';

import {
  FIELD,
  TIME_FORMAT,
  formatTimeISO,
  getOptionValue,
} from './utils/timeUtils';

const formatISOToSeconds = (time) => {
  // TODO : Do better (check, algo use Date ?)
  const matches = time.split(':'); // split it at the colons
  return +matches[0] * 60 * 60 + +matches[1] * 60 + +matches[2];
};

/**
 * Return the time formatted with the locale settings of the user
 * @param time
 */
const formatTimeToDisplay = (time) => {
  const date = new Date();
  date.setHours(time.hours, time.minutes, time.seconds);
  return date.toLocaleTimeString();
};

/**
 * Split a time given only in seconds into { hours, minutes, seconds }
 * @param time In seconds
 * @return { hours, minutes, seconds }
 */
const splitTime = (time: number): any => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = time % 60;
  return {
    hours: getNumberOn2Digits(hours),
    minutes: getNumberOn2Digits(minutes),
    seconds: getNumberOn2Digits(seconds),
  };
};

/**
 *
 */
const getTimes = (
  format: string,
  min: number,
  max: number,
  step: number
): Array<any> => {
  const times = [];
  // TODO: use min to calculate initial value of currentTime
  for (
    let currentTime = min, index = 0;
    currentTime <= max;
    currentTime += step, index++
  ) {
    const time = splitTime(currentTime);
    times.push({
      label: formatTimeToDisplay(time),
      value: {
        index, // Save the index of the Option, to easily access to the previous/next option if needed
        ...time,
      },
      // value: formatTimeISO(time),
    });
  }
  return times;
};

/**
 * Split time from a ISO time string
 * @param time Example hh:mm:ss (on 24 hours)
 *
 */
const getTimeFromISO = (time: string) => {
  // TODO : Check if time is valid
  if (!time) {
    return null;
  }

  const matches = time.split(':');

  const hours = matches[0];
  const minutes = matches[1];
  const seconds = matches[2];

  return { hours, minutes, seconds };
};

/**
 * Return the next value to use for hours or minutes or seconds
 * @param value
 * @param increment
 * @param limit
 */
const getNextValue = (value, increment, limit = 59) => {
  const newValue = value + increment;
  if (newValue > limit) return 0;
  if (newValue < 0) return limit;
  return newValue;
};

const handleKeyboardNavigation = (
  event,
  setInputValue,
  selectedOption,
  options
) => {
  const currentValue = event.target.value;
  if (!isTimeValid(currentValue, TIME_FORMAT.HH_MM_SS_24)) {
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

      let newValue = null;

      if (cursor < 3) {
        // Hours
        hours = getOptionValue(
          event.key,
          FIELD.HOURS,
          time,
          selectedOption,
          options
        );
        cursorStart = 0;
        cursorEnd = 2;
      } else if (cursor < 6) {
        // Minutes
        minutes = getOptionValue(
          event.key,
          FIELD.MINUTES,
          time,
          selectedOption,
          options
        );
        cursorStart = 3;
        cursorEnd = 5;
      } else if (cursor < 9) {
        // Seconds
        seconds = getOptionValue(
          event.key,
          FIELD.SECONDS,
          time,
          selectedOption,
          options
        );
        cursorStart = 6;
        cursorEnd = 8;
      }

      newValue = `${getNumberOn2Digits(hours)}:${getNumberOn2Digits(
        minutes
      )}:${getNumberOn2Digits(seconds)}`;

      event.target.value = newValue;
      setInputValue(newValue);
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

const handleKeyDown = (event, setInputValue, selectedOption, options) => {
  if (
    event.key === Keys.ARROW_UP ||
    event.key === Keys.ARROW_DOWN ||
    event.key === Keys.TAB
  ) {
    console.log('handleKeyDown', event.target);

    if (event.target && event.target.tagName === 'INPUT') {
      // Handle keyboard navigation only if the focus is on the focus (not on the icon)
      handleKeyboardNavigation(event, setInputValue, selectedOption, options);
    }
  } else if (event.key === Keys.ENTER) {
    console.log('ENTER !!!!');
    // TODO Close the Dropdown menu if it's open
    // Or forbid this action if 'strict' attribute is set to true
  }
};

const isTimeValid = (time, format = null): boolean => {
  return time.match(format);
};

function matchExactTime(time, matcher): boolean {
  if (!('time' in matcher)) return false;
  return formatTimeISO(time) === matcher.time;
}

function matchTimeInRange(time, matcher): boolean {
  if (!('from' in matcher) || !('to' in matcher)) return false;
  return (
    matcher.from <= formatTimeISO(time) && formatTimeISO(time) <= matcher.to
  );
}

/**
 * Return `true` if the given time matches to a disabled time.
 */
const isTimeDisabled = (time, disabledTimes): boolean => {
  let disabledTimesAsArray;
  if (Array.isArray(disabledTimes)) {
    disabledTimesAsArray = disabledTimes;
  } else {
    disabledTimesAsArray = [disabledTimes];
  }

  return disabledTimesAsArray.some((disabledTime) => {
    return (
      matchExactTime(time.value, disabledTime) ||
      matchTimeInRange(time.value, disabledTime)
    );
  });
};

const isTimeSelected = (
  option,
  hours,
  minutes,
  seconds,
  disabledTimes
): boolean => {
  if (!option) {
    return false;
  }

  console.log('isTimeSelected', option, hours, minutes, seconds, disabledTimes);
  console.log('option.value.hours === hours', option.value.hours === hours);
  console.log(
    'option.value.minutes === minutes',
    option.value.minutes === minutes
  );
  console.log(
    'option.value.seconds === seconds',
    option.value.seconds === seconds
  );
  return (
    option.value.hours === hours &&
    option.value.minutes === minutes &&
    option.value.seconds === seconds &&
    !isTimeDisabled(option, disabledTimes)
  );
};

// Specific Input to fix input not displayed in React-Select
// See https://github.com/JedWatson/react-select/issues/3068
// See https://github.com/JedWatson/react-select/discussions/4302
const TimePickerInput = (props) => (
  <components.Input {...props} isHidden={false} />
);

const getNumberOn2Digits = (number) =>
  number.toLocaleString(undefined, { minimumIntegerDigits: 2 });

const TimePicker: React.FC<TimePickerProps> = ({
  id,
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
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const tmpTime = getTimeFromISO(inputValue);
    if (tmpTime) {
      setHours(tmpTime.hours);
      setHours(tmpTime.minutes);
      setHours(tmpTime.seconds);
    }
  }, [inputValue]);

  useEffect(() => {
    // TODO: Check if the time is valid to the format
    setInputValue(value);
    const tmpTime = getTimeFromISO(value);
    if (tmpTime) {
      setHours(tmpTime.hours);
      setHours(tmpTime.minutes);
      setHours(tmpTime.seconds);
    }
  }, [value]);

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

  if (step < 600 || step > 43200) {
    // Todo : Raised error value not supported
  }

  const options = getTimes(
    format,
    formatISOToSeconds(min),
    formatISOToSeconds(max),
    step
  );

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
        label="TimePicker"
        placeHolder={placeholder}
        options={options}
        value={selectedOption}
        isOptionDisabled={(option) => isTimeDisabled(option, disabledTimes)}
        isOptionSelected={(option) => {
          return isTimeSelected(option, hours, minutes, seconds, disabledTimes);
        }}
        onChange={(option) => {
          console.log('Select new value:', option);
          setHours(getNumberOn2Digits(option.value.hours));
          setMinutes(getNumberOn2Digits(option.value.minutes));
          setSeconds(getNumberOn2Digits(option.value.seconds));
          setInputValue(option.label); // Todo don't use label
        }}
        onKeyDown={(event) =>
          handleKeyDown(event, setInputValue, selectedOption, options)
        }
        components={{ Input: TimePickerInput }}
        onInputChange={(newValue, metadata) => {
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
        filterOption={(option, data) => {
          console.log(option, data);
          return true;
        }}
      />
    </div>
  );
};

export type TimePickerProps = {
  id?: string;
  name: string;
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

export default TimePicker;
