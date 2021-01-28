import * as PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Dropdown } from '../index';

import { TimeInput } from '../dropdown/CustomRender';

const formatTimeISO = (time) => {
  return (
    time.hours.toString().padStart(2, '0') +
    ':' +
    time.minutes.toString().padStart(2, '0') +
    ':' +
    time.seconds.toString().padStart(2, '0')
  );
};

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
  const localTime = date.toLocaleTimeString();
  return localTime;
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
  for (let currentTime = min; currentTime <= max; currentTime += step) {
    const time = splitTime(currentTime);
    times.push({
      label: formatTimeToDisplay(time),
      value: time,
      // value: formatTimeISO(time),
    });
  }
  return times;
};

const handleKeyDown = (event) => {
  console.log('handleKeyDown', event.currentTarget, event.keyCode);
  // // TODO : fonctionne
  // // setInputValue('aaaaaa');
  // const seconds = formatISOToSeconds(inputValue);
  // const newValue = seconds + 900;
  // const newTime = formatTimeToDisplay(splitTime(newValue));
  //
  // setInputValue(newTime);
  // event.stopPropagation();
  // event.cancelBubble = true;
};

const isTimeValid = (time) => {
  // TODO Return true if the time is valid, false otherwise
  return true;
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
  console.log('isTimeSelected', option, hours, minutes, seconds, disabledTimes);
  return (
    option.value.hours === hours &&
    option.value.minutes === minutes &&
    option.value.seconds === seconds &&
    !isTimeDisabled(option, disabledTimes)
  );
};

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
  disabledTimes,
  ...otherProps
}) => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [defaultValue, setDefaultValue] = useState({});

  const hoursKeyEvent = (event) => {
    console.log('hoursKeyEvent for Hours', event);
  };

  useEffect(() => {
    setDefaultValue(
      times.find(
        (time) =>
          time.value.hours === hours &&
          time.value.minutes === minutes &&
          time.value.seconds === seconds
      )
    );
    console.log(
      'Select new defaultValue',
      times,
      hours,
      minutes,
      seconds,
      defaultValue
    );
  }, [hours, minutes, seconds]);

  const times = getTimes(
    format,
    formatISOToSeconds(min),
    formatISOToSeconds(max),
    step
  );
  return (
    <div>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
      <Dropdown
        iconName="recent"
        id={id}
        label="TimePicker"
        placeHolder={placeholder}
        options={times}
        value={defaultValue}
        isOptionDisabled={(option) => isTimeDisabled(option, disabledTimes)}
        isOptionSelected={(option) => {
          console.log(
            'isOptionSelected',
            option,
            hours,
            minutes,
            seconds,
            disabledTimes
          );
          return isTimeSelected(option, hours, minutes, seconds, disabledTimes);
        }}
        onChange={(event) => {
          console.log('Select new value:', event);
          setHours(getNumberOn2Digits(event.value.hours));
          setMinutes(getNumberOn2Digits(event.value.minutes));
          setSeconds(getNumberOn2Digits(event.value.seconds));
          setDefaultValue(
            times.find(
              (time) =>
                time.value.hours === hours &&
                time.value.minutes === minutes &&
                time.value.seconds === seconds
            )
          );
          console.log('Select new defaultValue', defaultValue);
        }}
        components={{ Input: TimeInput }}
        hoursKeyEvent={hoursKeyEvent}
        hours={hours}
        setHours={(value) => setHours(getNumberOn2Digits(value))}
        minutes={minutes}
        setMinutes={(value) => setMinutes(getNumberOn2Digits(value))}
        seconds={seconds}
        setSeconds={(value) => setSeconds(getNumberOn2Digits(value))}
        onKeyDown={handleKeyDown}
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
  name: PropTypes.string.isRequired,
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
