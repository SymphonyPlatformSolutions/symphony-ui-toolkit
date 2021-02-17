import { Dropdown } from '../dropdown';
import { HasValidationProps } from '../validation/interfaces';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Keys } from '../common/keyUtils';
import { ErrorMessages } from '../validation/interfaces';
import { DisabledTime } from './interfaces';
import {
  FIELD,
  formatISOTimeToSeconds, formatTimeISO,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getOptions,
  getOptionValue,
  getSteps,
  getTimeFromString,
  getUserFormat,
  isTimeDisabled,
  isTimeSelected,
  isTimeValid,
  Time
} from './utils';

enum STEP {
  MIN_STEP_VALUE = 600,
  MAX_STEP_VALUE = 43200,
}

export const TimePicker: React.FC<TimePickerProps> = ({
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
  onValidationChanged,
}) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // Indicate if the user is navigating with arrow keys in the Dropdown menu
  const [navigationInMenu, setNavigationInMenu] = useState(false);

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

    if (onValidationChanged) {
      onValidationChanged(
        computeError(inputValue, newTime, min, max, disabledTimes)
      );
    }

    // Called onChange prop
    if (onChange) {
      onChange({
        target: {
          value: inputValue,
        },
      });
    }
  }, [inputValue]);

  useEffect(() => {
    // Value prop has changed
    const newTime = getISOTimeFromLocalTime(value); // Without format it will be the ISO format
    if (newTime) {
      setInputValue(getFormattedTime(newTime, format));
    } else {
      setInputValue(value);
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

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const steps = useMemo(() => getSteps(options, disabledTimes), [
    options,
    disabledTimes,
  ]);

  if (step < STEP.MIN_STEP_VALUE) {
    const defaultStepValue = STEP.MIN_STEP_VALUE;
    console.error(
      `Invalid step value: Step value ${step} too small, the value ${defaultStepValue} will be used.`
    );
    step = defaultStepValue;
  } else if (step > STEP.MAX_STEP_VALUE) {
    const defaultStepValue = STEP.MAX_STEP_VALUE;
    console.error(
      `Invalid step value: Step value ${step} too big, the value ${defaultStepValue} will be used.`
    );
    step = defaultStepValue;
  }

  if (!placeholder) {
    placeholder = format ? format : getUserFormat();
  }

  return (
    <Dropdown
      autoScrollToCurrent={true}
      isDisabled={disabled}
      iconName="recent"
      displayArrowIndicator={false}
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
      onChange={(newValue) => {
        const option =
          newValue && newValue.target && newValue.target.value
            ? newValue.target.value
            : null;
        // Called when the user select an option in the Dropdown menu
        setSelectedOption(option);
      }}
      onKeyDown={(event) =>
        handleKeyDown(
          event,
          strict,
          setInputValue,
          options,
          steps,
          format,
          toggleMenu,
          navigationInMenu,
          setNavigationInMenu
        )
      }
      onInputChange={(newValue, metadata) => {
        // Called when the user set a new value in the Input field
        if (metadata.action === 'input-change') {
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
      menuIsOpen={menuIsOpen}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}
      tabSelectsValue={false}
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
  disabledTimes?: DisabledTime | Array<DisabledTime>;
} & HasValidationProps<string>;

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
  onValidationChanged: PropTypes.func,
};

/**
 * Test if the input value raised an error to the Validation component
 * @param value Input value
 * @param time Value parsed in ISO Time
 * @param min Min Time value in ISO format
 * @param max Max Time value in ISO format
 * @param disabledTimes
 */
const computeError = (
  value: string,
  time: Time,
  min: string,
  max: string,
  disabledTimes: DisabledTime | Array<DisabledTime>
): ErrorMessages => {
  if (!value) {
    return null;
  }

  if (!time) {
    return { format: 'The time format is incorrect' };
  } else {
    if (formatTimeISO(time) < min) {
      return { maxTime: 'Time too early' };
    } else if (max < formatTimeISO(time)) {
      return { minTime: 'Time too late' };
    } else if (isTimeDisabled(time, disabledTimes)) {
      return { disabledTime: 'This time is not available' };
    } else {
      return null;
    }
  }
};

/**
 * Handle Keyboard navigation in the input Text field
 *
 * @param event Keyboard event
 * @param setInputValue Callback to update the input value saved in the state
 * @param options Dropdown options
 * @param steps Steps to used when the user presses arrow up/down keys
 */
const handleKeyboardNavigation = (event, setInputValue, options, steps) => {
  const currentValue = event.target.value;

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
  format,
  toggleMenu,
  navigationInMenu,
  setNavigationInMenu
) => {
  if (event.target && event.target.tagName === 'INPUT') {
    if (
      event.key === Keys.ARROW_UP ||
      event.key === Keys.ARROW_DOWN ||
      event.key === Keys.TAB
    ) {
      const currentValue = event.target.value;
      const isInputValid = isTimeValid(currentValue, format);
      setNavigationInMenu(!isInputValid);
      if (isInputValid) {
        // Handle keyboard navigation only if the focus is on the input (not on the icon)
        handleKeyboardNavigation(event, setInputValue, options, steps);
      }
    } else if (event.key === Keys.ENTER) {
      toggleMenu();
      if (
        !navigationInMenu &&
        event.target.value &&
        event.target.value.trim() !== ''
      ) {
        // To prevent the input value from being overwritten by the value of the focused Dropdown option
        event.preventDefault();
      }
      setNavigationInMenu(false);
    } else if (strict) {
      // The user is not allowed to set manually another value
      event.preventDefault();
    }
  }
};

export default TimePicker;
