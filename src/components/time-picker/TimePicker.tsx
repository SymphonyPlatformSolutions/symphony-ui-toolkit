import { Dropdown } from '../dropdown';
import { HasValidationProps } from '../validation/interfaces';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Keys } from '../common/keyUtils';
import { ErrorMessages } from '../validation/interfaces';
import { DisabledTime } from './interfaces';
import {
  formatTimeISO,
  formatISOTimeToSeconds,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getOptions,
  getSteps,
  getTimeFromString,
  getUserFormat,
  isTimeDisabled,
  isTimeSelected,
  isTimeValid,
  Time,
  TIME_SEPARATOR,
} from './utils';

enum STEP {
  MIN_STEP_VALUE = 600,
  DEFAULT_STEP_VALUE = 900,
  MAX_STEP_VALUE = 43200,
}

export const TimePicker: React.FC<TimePickerProps> = ({
  id,
  disabled,
  disabledTimes = [],
  format,
  label,
  min = '00:00:00',
  max = '23:59:59',
  name,
  onChange,
  onValidationChanged,
  placeholder,
  step = STEP.DEFAULT_STEP_VALUE,
  strict = true,
  tooltip,
  tooltipCloseLabel,
  value,
}) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState(undefined);
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
    if (inputValue !== null && inputValue !== undefined) {
      // Called when the user enters a new date in the input field
      const newTime = getISOTimeFromLocalTime(inputValue, format);
      if (newTime) {
        setHours(newTime.hours);
        setMinutes(newTime.minutes);
        setSeconds(newTime.seconds);
      } else {
        setHours('');
        setMinutes('');
        setSeconds('');
      }

      if (onValidationChanged) {
        onValidationChanged(
          computeError(inputValue, newTime, min, max, disabledTimes, strict)
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
    }
  }, [inputValue]);

  useEffect(() => {
    if (value !== null && value !== undefined) {
      // Value prop has changed
      const newTime = getISOTimeFromLocalTime(value); // Without format it will be the ISO format
      if (newTime) {
        setInputValue(getFormattedTime(newTime, format));
      } else {
        setInputValue(value);
      }
    }
  }, [value]);

  const validatedStep = useMemo(() => {
    if (step === null || step === undefined || isNaN(Number(step))) {
      const stepValue = STEP.DEFAULT_STEP_VALUE;
      console.error(
        `Invalid step value: Step value ${step} is not a number, the value ${stepValue} will be used.`
      );
      return stepValue;
    } else if (step < STEP.MIN_STEP_VALUE) {
      const stepValue = STEP.MIN_STEP_VALUE;
      console.error(
        `Invalid step value: Step value ${step} too small, the value ${stepValue} will be used.`
      );
      return stepValue;
    } else if (step > STEP.MAX_STEP_VALUE) {
      const stepValue = STEP.MAX_STEP_VALUE;
      console.error(
        `Invalid step value: Step value ${step} too big, the value ${stepValue} will be used.`
      );
      return stepValue;
    }
    return step;
  }, [step]);

  const options = useMemo(
    () =>
      getOptions(
        format,
        formatISOTimeToSeconds(min),
        formatISOTimeToSeconds(max),
        validatedStep
      ),
    [format, min, max, validatedStep]
  );

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const steps = useMemo(() => getSteps(options, disabledTimes), [
    options,
    disabledTimes,
  ]);

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
      onFocus={handleFocus}
      onKeyDown={(event) =>
        handleKeyDown(
          event,
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
        } else if (metadata.action === 'input-blur') {
          if (inputValue === null || inputValue === undefined) {
            setInputValue(''); // Set to '' to trigger Validation on Blur
          }
        }
        setNavigationInMenu(false);
      }}
      inputValue={inputValue}
      inputAlwaysDisplayed={true}
      filterFunction={() => true}
      menuIsOpen={menuIsOpen}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}
      tabSelectsValue={false}
      tooltip={tooltip}
      tooltipCloseLabel={tooltipCloseLabel}
    />
  );
};

export type TimePickerProps = {
  id?: string;
  disabled?: boolean;
  disabledTimes?: DisabledTime | Array<DisabledTime>;
  format?: string;
  label?: string;
  min?: string;
  max?: string;
  name?: string;
  placeholder?: string;
  step?: number;
  strict?: boolean;
  tooltip?: string;
  tooltipCloseLabel?: string;
  value?: string;
} & HasValidationProps<string>;

TimePicker.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  disabledTimes: PropTypes.array,
  format: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onValidationChanged: PropTypes.func,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  strict: PropTypes.bool,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  value: PropTypes.string,
};

/**
 * Test if the input value raised an error to the Validation component
 * @param value Input value
 * @param time Value parsed in ISO Time
 * @param min Min Time value in ISO format
 * @param max Max Time value in ISO format
 * @param disabledTimes
 * @param strict
 */
const computeError = (
  value: string,
  time: Time,
  min: string,
  max: string,
  disabledTimes: DisabledTime | Array<DisabledTime>,
  strict: boolean
): ErrorMessages => {
  if (!value) {
    return null;
  }

  if (!time) {
    return { format: 'The time format is incorrect' };
  } else {
    if (formatTimeISO(time) < min) {
      return { minTime: 'Time too far in the past' };
    } else if (max < formatTimeISO(time)) {
      return { maxTime: 'Time too far in the future' };
    } else if (strict && isTimeDisabled(time, disabledTimes)) {
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
 */
const handleKeyboardNavigation = (event) => {
  const currentValue = event.target.value;

  // Get cursor position
  const cursor = event.target.selectionStart;
  const time = getTimeFromString(currentValue);

  if (event.key === Keys.TAB) {
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
  setInputValue,
  options,
  steps,
  format,
  toggleMenu,
  navigationInMenu,
  setNavigationInMenu
) => {
  if (event.target && event.target.tagName === 'INPUT') {
    if (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_DOWN) {
      setNavigationInMenu(true);
    } else if (event.key === Keys.TAB) {
      const currentValue = event.target.value;
      const isInputValid = isTimeValid(currentValue, format);
      if (isInputValid) {
        // Handle keyboard navigation only if the focus is on the input (not on the icon)
        handleKeyboardNavigation(event);
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
    }
  }
};

const handleFocus = (event) => {
  if (event && event.target) {
    const currentValue = event.target.value;
    const cursor = event.target.selectionStart;
    if (cursor === 0 && currentValue) {
      // Set focus on hours
      const separatorPosition = currentValue.indexOf(TIME_SEPARATOR);
      event.target.setSelectionRange(0, separatorPosition);
    }
  }
};

export default TimePicker;
