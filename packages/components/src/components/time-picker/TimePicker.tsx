import { Dropdown } from '../dropdown';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Keys } from '../common/eventUtils';
import { ErrorMessages } from '../validation/interfaces';
import { DisabledTime, TimePickerOption, TimePickerProps, TimePickerPropTypes } from './interfaces';
import {
  formatTimeISO,
  formatISOTimeToSeconds,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getNextSelectionIndexes,
  getOptions,
  getSteps,
  getUserFormat,
  isTimeDisabled,
  isTimeProposed,
  isTimeSelected,
  Time,
  ISO_TIME_SEPARATOR,
  getDelimiterPosition,
} from './utils';

enum STEP {
  MIN_STEP_VALUE = 600,
  DEFAULT_STEP_VALUE = 900,
  MAX_STEP_VALUE = 43200,
}

export const TimePicker: React.FC<TimePickerProps> = ({
  id,
  disabled,
  disabledTimes,
  format,
  label,
  min,
  max,
  name,
  onChange,
  onCopy,
  onCut,
  onDrag,
  onFocus,
  onValidationChanged,
  placeholder,
  step,
  strict,
  tooltip,
  tooltipCloseLabel,
  showRequired,
  helperText,
  value,
  menuPortalStyles,
  menuPortalTarget,
  menuShouldBlockScroll,
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
      setHours(selectedOption.data.time.hours);
      setMinutes(selectedOption.data.time.minutes);
      setSeconds(selectedOption.data.time.seconds);
      setInputValue(selectedOption.label);
    }
  }, [selectedOption]);

  useEffect(() => {
    let newSelectedOption = options.find(
      (option) =>
        option?.data?.time?.hours === hours &&
        option?.data?.time?.minutes === minutes &&
        option?.data?.time?.seconds === seconds
    );
    if (
      !newSelectedOption ||
      isTimeDisabled(newSelectedOption?.data?.time, disabledTimes)
    ) {
      newSelectedOption = null;
    }
    setSelectedOption(newSelectedOption);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (inputValue !== null && inputValue !== undefined) {
      // Called when the user enters a new date in the input field
      const newISOTime = getISOTimeFromLocalTime(inputValue, format);
      if (newISOTime) {
        setHours(newISOTime.hours);
        setMinutes(newISOTime.minutes);
        setSeconds(newISOTime.seconds);
      } else {
        setHours('');
        setMinutes('');
        setSeconds('');
      }

      if (onValidationChanged) {
        onValidationChanged(
          computeError(
            inputValue,
            newISOTime,
            min,
            max,
            disabledTimes,
            strict,
            options
          )
        );
      }

      // Called onChange prop
      if (onChange) {
        onChange({
          target: {
            value: inputValue === '' ? inputValue : formatTimeISO(newISOTime),
          },
        });
      }
    }
  }, [inputValue]);

  useEffect(() => {
    if (value !== null && value !== undefined) {
      // Value prop has changed
      if (value === '') {
        setInputValue(value);
      } else {
        const newTime = getISOTimeFromLocalTime(value);
        if (newTime) {
          setInputValue(getFormattedTime(newTime, format));
        }
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

  const onFocusWrapped = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event);
    }
    handleFocus(event)
  };

  return (
    <Dropdown<TimePickerOption>
      autoScrollToCurrent={true}
      displayArrowIndicator={false}
      filterFunction={() => true}
      iconName="recent"
      id={id}
      isDisabled={disabled}
      isOptionDisabled={(option: TimePickerOption) => isTimeDisabled(option?.data?.time, disabledTimes)}
      isOptionSelected={(option: TimePickerOption) =>
        isTimeSelected(option?.data?.time, hours, minutes, seconds, disabledTimes)
      }
      inputAlwaysDisplayed={true}
      inputValue={inputValue}
      label={label}
      menuIsOpen={menuIsOpen}
      menuPortalStyles={menuPortalStyles}
      menuPortalTarget={menuPortalTarget}
      menuShouldBlockScroll={menuShouldBlockScroll}
      name={name}
      onMenuClose={() => setMenuIsOpen(false)}
      onMenuOpen={() => setMenuIsOpen(true)}
      options={options}
      onChange={(newValue) => {
        const option =
          newValue && newValue.target && newValue.target.value
            ? newValue.target.value
            : null;
        // Called when the user select an option in the Dropdown menu
        setSelectedOption(option);
      }}
      onCopy={onCopy}
      onCut={onCut}
      onDrag={onDrag}
      onFocus={onFocusWrapped}
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
      onKeyUp={(event) => moveFocusOnNextField(event, setInputValue, format)}
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
      placeHolder={placeholder}
      showRequired={showRequired}
      tabSelectsValue={false}
      tooltip={tooltip}
      tooltipCloseLabel={tooltipCloseLabel}
      value={selectedOption}
      helperText={helperText}
    />
  );
};

TimePicker.propTypes = TimePickerPropTypes;

/**
 * Test if the input value raised an error to the Validation component
 * @param value Input value
 * @param time Value parsed in ISO Time
 * @param min Min Time value in ISO format
 * @param max Max Time value in ISO format
 * @param disabledTimes
 * @param strict
 * @param options
 */
const computeError = (
  value: string,
  time: Time,
  min: string,
  max: string,
  disabledTimes: DisabledTime | Array<DisabledTime>,
  strict: boolean,
  options: Array<TimePickerOption>
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
    } else if (
      isTimeDisabled(time, disabledTimes) ||
      (strict && !isTimeProposed(time, options))
    ) {
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

  if (event.key === Keys.TAB) {
    // Manage Tab and Tab + Shift navigation

    const moveForward = !event.shiftKey;
    const delimiterPositions = getNextSelectionIndexes(
      currentValue,
      cursor,
      moveForward
    );
    if (delimiterPositions) {
      event.target.setSelectionRange(
        delimiterPositions.start,
        delimiterPositions.end
      );
      event.preventDefault();
    }
  }
};

const moveFocusOnNextField = (event, setInputValue, format) => {
  const isValidCharacter = /^[0-9aAmMpP]$/i.test(event.key);
  const cursorPosition = event.target.selectionStart;
  let inputValue = event.target.value;
  if (isValidCharacter) {
    if (
      cursorPosition === inputValue.length && // The input was empty, the user is typing a new value
      getDelimiterPosition(format.substring(cursorPosition)) === 0
    ) {
      // Append a delimiter
      inputValue = `${inputValue}${format.charAt(cursorPosition)}`;
      setInputValue(inputValue);
    }
    const delimiterPositionInInput = getDelimiterPosition(
      inputValue.substring(cursorPosition)
    );
    const delimiterPositionInFormat = getDelimiterPosition(
      format.substring(cursorPosition)
    );
    if (
      delimiterPositionInInput === 0 &&
      // Test if delimiter is at the same position in the format, otherwise it means that the user has not finished the entry
      delimiterPositionInInput === delimiterPositionInFormat
    ) {
      // Move focus selection
      const delimiterPositions = getNextSelectionIndexes(
        inputValue,
        cursorPosition
      );
      if (delimiterPositions) {
        event.target.setSelectionRange(
          delimiterPositions.start,
          delimiterPositions.end
        );
      }
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
      handleKeyboardNavigation(event);
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
      const separatorPosition = currentValue.indexOf(ISO_TIME_SEPARATOR);
      event.target.setSelectionRange(0, separatorPosition);
    }
  }
};

TimePicker.defaultProps = {
  disabledTimes: [],
  format: getUserFormat(),
  max: '23:59:59',
  min: '00:00:00',
  step: STEP.DEFAULT_STEP_VALUE,
  strict: true,
}

export default TimePicker;
