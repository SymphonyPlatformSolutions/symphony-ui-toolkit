import { format as formatTime, parse as parseTime, isValid } from 'date-fns';

import Time from './Time';
import { DisabledTime, TimePickerOption } from '../interfaces';

export const TIME_REGEXPR = {
  HH_MM_SS_12: /^(0[0-9]|1[0-2]):([0-5][0-9]):?([0-5][0-9])?\s+([AaPp][Mm])?$/,
  HH_MM_SS_24: /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):?([0-5][0-9])?$/,
};

export const ISO_TIME_SEPARATOR = ':';
export const REGEXP_TIME_SEPARATOR = '[:\\s]';

export enum TIME_FORMAT {
  HH_MM_A_12 = 'hh:mm a',
  HH_MM_SS_A_12 = 'hh:mm:ss a',
  HH_MM_24 = 'HH:mm',
  HH_MM_SS_24 = 'HH:mm:ss',
}

export enum FIELD {
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds',
  AMPM = 'ampm',
}

/**
 * Detects browser's locale 24h time preference
 * It works by checking whether hour output contains a space ('1 AM' or '01')
 */
const isBrowserLocale24h = () =>
  !new Intl.DateTimeFormat(undefined, { hour: 'numeric' })
    .format(0)
    .match(/AM/);

/**
 * Return the position of the first found delimiter (':', ' ') in the string given in parameter
 * Example: '20:00:00' will return 2
 * @param time
 */
export const getDelimiterPosition = (time: string): number => {
  if (time) {
    const regExpr = new RegExp(REGEXP_TIME_SEPARATOR, 'g');
    const match = regExpr.exec(time);
    if (match) {
      // Return 1st match
      return match.index;
    }
  }
  return null;
};

/**
 * Return the position of the last found delimiter (':', ' ') in the string given in parameter
 * Example: '20:00:00' will return 5
 * @param time
 */
export const getLastDelimiterPosition = (time: string): number => {
  if (time) {
    const regExpr = new RegExp(REGEXP_TIME_SEPARATOR, 'g');
    let lastIndex = null;
    let match;
    while ((match = regExpr.exec(time))) {
      lastIndex = match.index;
    }
    return lastIndex;
  }
  return null;
};

/**
 * Returns the position of the next field in the string given in parameter.
 * Example:
 * ('08:00:00', 0, true) => returns {start: 3, end: 5}
 * ('08:00:00', 4, true) => returns {start: 6, end: 8}
 *
 * @param value
 * @param cursorPosition
 * @param searchForward 'true' if the search is forward, 'false' if is backward
 */
export const getNextSelectionIndexes = (
  value: string,
  cursorPosition: number,
  searchForward = true
): { start: number; end: number } => {
  const positions = { start: null, end: null };
  if (searchForward) {
    const start = getDelimiterPosition(value.substring(cursorPosition));
    let end = null;
    if (start !== null) {
      positions.start = cursorPosition + start + 1; // + 1 to take into account the delimiter
      end = getDelimiterPosition(value.substring(positions.start));
    } else {
      // 'start' position not found
      return null;
    }
    if (end !== null) {
      positions.end = positions.start + end;
    }
    if ((positions.start && !positions.end) || positions.end > value.length) {
      positions.end = value.length;
    }
  } else {
    const end = getLastDelimiterPosition(value.substring(0, cursorPosition));
    let start = null;
    if (end !== null) {
      positions.end = end;
      start = getLastDelimiterPosition(value.substring(0, positions.end));
    } else {
      // 'end' position not found
      return null;
    }
    if (start !== null) {
      positions.start = start + 1; // + 1 to take into account the delimiter
    }
    if (!positions.start && positions.end) {
      positions.start = 0;
    }
  }
  return positions;
};

/**
 * Return The user format depending on 12/24 hours
 */
export const getUserFormat = (): string => {
  return isBrowserLocale24h()
    ? TIME_FORMAT.HH_MM_SS_24
    : TIME_FORMAT.HH_MM_SS_A_12;
};

/**
 * Return true if the time is valid to the format given in parameter.
 *
 * @param time
 * @param format
 */
export const isTimeValid = (time: string, format: string = null): boolean => {
  if (!time) {
    return false;
  }

  if (format === null) {
    format = isBrowserLocale24h
      ? TIME_FORMAT.HH_MM_SS_24
      : TIME_FORMAT.HH_MM_A_12;
  }

  const date = parseTime(time, format, new Date());

  // If parsing failed, Invalid Date will be returned.
  // Invalid Date is a Date, whose time value is NaN.
  // Time value of Date: http://es5.github.io/#x15.9.1.1
  return !isNaN(date.getTime());
};

/**
 * Format time in ISO time format 'HH:MM:SS' on 24 hours
 * @param time Time {hours, minutes, seconds}
 */
export const formatTimeISO = (time: Time): string => {
  if (
    !time ||
    time.hours === '' ||
    time.minutes === '' ||
    isNaN(Number(time.hours)) ||
    isNaN(Number(time.minutes))
  ) {
    return null;
  }

  return (
    time.hours.toString().padStart(2, '0') +
    ISO_TIME_SEPARATOR +
    time.minutes.toString().padStart(2, '0') +
    ISO_TIME_SEPARATOR +
    time.seconds.toString().padStart(2, '0')
  );
};

/**
 * Convert ISO time to seconds
 *
 * @param time A string compliant to the format HH:MM:ss (on 24 hours)
 */
export const formatISOTimeToSeconds = (time: string): number => {
  const date = parseTime(time, TIME_FORMAT.HH_MM_SS_24, 0);
  if (isNaN(date.getTime())) {
    //Invalid Time
    return null;
  }
  return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
};

/**
 * Return the number in a string with 2 digits
 * Examples: '01', '23', '00', ...
 * @param number
 */
export const getNumberOn2Digits = (number: number): string =>
  number.toLocaleString(undefined, { minimumIntegerDigits: 2 });

/**
 * Return the options to use in the DropDown menu
 *
 * @param format Format used to display the time
 * @param min Minimum value
 * @param max Maximum value
 * @param step Step in seconds
 */
export const getOptions = (
  format: string,
  min: number,
  max: number,
  step: number
): Array<TimePickerOption> => {
  const options: Array<TimePickerOption> = [];
  for (
    let currentTime = min, index = 0;
    currentTime <= max;
    currentTime += step, index++
  ) {
    const time = getTimeFromSeconds(currentTime);
    options.push({
      label: getFormattedTime(time, format),
      value: formatTimeISO(time),
      data: {
        index, // Save the index of the Option, for easy access to the previous/next option if needed
        time, // hours, minutes, seconds
      },
    });
  }
  return options;
};

/**
 * Return `true` if the given time matches to a disabled time, false otherwise
 * @param time
 * @param disabledTimes Example '20:40:00' or ['20:40:00', '12:00:00', {from:'10:00:00', to:'11:00:00'}]
 */
export const isTimeDisabled = (
  time: Time,
  disabledTimes: DisabledTime | Array<DisabledTime>
): boolean => {
  if (!time) {
    return true;
  }
  if (
    !disabledTimes ||
    (Array.isArray(disabledTimes) && disabledTimes.length === 0)
  ) {
    return false;
  }
  let disabledTimesAsArray;
  if (Array.isArray(disabledTimes)) {
    disabledTimesAsArray = disabledTimes;
  } else {
    disabledTimesAsArray = [disabledTimes];
  }

  return disabledTimesAsArray.some((disabledTime) => {
    return (
      matchExactTime(time, disabledTime) || matchTimeInRange(time, disabledTime)
    );
  });
};

/**
 * Iterates over the option and return true is the time matches with one of the options
 * @param time
 * @param options
 */
export const isTimeProposed = (
  time: Time,
  options: Array<TimePickerOption>
): boolean =>
  time &&
  options &&
  options.some(
    (option) =>
      option?.data?.time?.hours === time.hours &&
      option?.data?.time?.minutes === time.minutes &&
      option?.data?.time?.seconds === time.seconds
  );

/**
 * Return true if the time is matching with the hours/minutes/seconds and not appears in the disabledTimes
 * @param time
 * @param hours
 * @param minutes
 * @param seconds
 * @param disabledTimes
 */
export const isTimeSelected = (
  time: Time,
  hours: string,
  minutes: string,
  seconds: string,
  disabledTimes: DisabledTime | Array<DisabledTime>
): boolean =>
  time &&
  time.hours === hours &&
  time.minutes === minutes &&
  time.seconds === seconds &&
  !isTimeDisabled(time, disabledTimes);

/**
 * Get ISO time in an object {hours, minutes, seconds} from a given local time and format
 * @param time
 * @param format (optional) Use HH:mm:ss per default (on 24 hours)
 */
export const getISOTimeFromLocalTime = (
  time: string,
  format: string = TIME_FORMAT.HH_MM_SS_24
): Time => {
  if (!time || !format || !getTimeFromString(time)) {
    return null;
  }

  try {
    const date = parseTime(time, format, 0);

    // If parsing failed, Invalid Date will be returned.
    // Invalid Date is a Date, whose time value is NaN.
    // Time value of Date: http://es5.github.io/#x15.9.1.1
    if (isNaN(date.getTime())) {
      return null;
    }

    return new Time(
      getNumberOn2Digits(date.getHours()),
      getNumberOn2Digits(date.getMinutes()),
      getNumberOn2Digits(date.getSeconds())
    );
  } catch (error) {
    if (error instanceof RangeError) {
      console.error(error);
      return null;
    }
    // Re-throw the error not handled
    throw error;
  }
};

/**
 * Return the time formatted with the format if it's provided in parameter, else it will use the locale settings of the user
 * @param time Time with {hours, seconds, minutes}
 * @param format
 */
export const getFormattedTime = (time: Time, format: string = null): string => {
  if (!time) {
    // Time null or undefined
    return null;
  }
  const date = new Date();
  date.setHours(
    parseInt(time.hours, 10),
    parseInt(time.minutes, 10),
    parseInt(time.seconds, 10)
  );

  if (!isValid(date)) {
    // Not valid
    return null;
  }

  if (!format) {
    // Return time formatted with locale time (Example: 08:50 AM or 14:55:00 ...)
    return date.toLocaleTimeString();
  }
  // Format time
  return formatTime(date, format);
};

/**
 * Split a time given only in seconds into { hours, minutes, seconds } on 24 hours format
 *
 * @param time In seconds
 * @return Time { hours, minutes, seconds }
 */
export const getTimeFromSeconds = (time: number): Time => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = time % 60;
  return new Time(
    getNumberOn2Digits(hours),
    getNumberOn2Digits(minutes),
    getNumberOn2Digits(seconds)
  );
};

/**
 * Returns all sorted values used in the options
 * Example:
 * {
 *   hours: ['02', '05', '06', '11'],
 *   minutes: ['00', '15', '30', '45'],
 *   seconds: ['00', '30'],
 * }
 * @param options
 * @param disabledTimes
 */
export const getSteps = (
  options: Array<TimePickerOption>,
  disabledTimes: DisabledTime | Array<DisabledTime>
) => {
  const hoursValues = new Set<string>();
  const minutesValues = new Set<string>();
  const secondsValues = new Set<string>();

  options.forEach((option) => {
    if (!isTimeDisabled(option?.data?.time, disabledTimes)) {
      const time = getTimeFromString(option.label);
      if (time) {
        hoursValues.add(time.hours);
        minutesValues.add(time.minutes);
        secondsValues.add(time.seconds);
      }
    }
  });

  return {
    hours: [...hoursValues].sort(),
    minutes: [...minutesValues].sort(),
    seconds: [...secondsValues].sort(),
  };
};

/**
 * Parse the string and return an object {hours, minutes, seconds, ampm}
 *
 * @param inputTime string (Example: '05:20:10 am', '07:30 AM', '06:00:00 PM', '18:20', '18:20:00'
 * @return {hours: '...', minutes:'...', seconds:'...', ampm: 'AM'}
 * Examples:
 *   {hours: '05', minutes: '20', seconds: '10', ampm: 'am'}
 *   {hours: '18', minutes: '20'}
 */
export const getTimeFromString = (inputTime: string): Time => {
  if (!inputTime) {
    return null;
  }

  const ampmRegExpr = /[AaPp][Mm]/;
  let timeRegExpr = null;
  if (inputTime.match(ampmRegExpr)) {
    // 12 hours format
    timeRegExpr = TIME_REGEXPR.HH_MM_SS_12;
  } else {
    // 24 hours format
    timeRegExpr = TIME_REGEXPR.HH_MM_SS_24;
  }

  const result = inputTime.match(timeRegExpr);
  if (!result) {
    return null;
  }
  const [, hours, minutes, seconds, ampm] = result;

  // Return an object {hours, minutes, seconds, ampm}
  return new Time(hours, minutes, seconds, ampm);
};

/**
 * Return true if the time is equal to the time in the matcher
 * @param time Time {hours, minutes, seconds}
 * @param matcher Object {time: 'HH:mm:ss'}
 */
export function matchExactTime(time: Time, matcher): boolean {
  if (time === null || !('time' in matcher)) return false;
  return formatTimeISO(time) === matcher.time;
}

/**
 * Returns true if the range contains the time
 * @param time Time {hours, minutes, seconds}
 * @param matcher Object {from: 'HH:mm:ss', to: 'HH:mm:ss'}
 */
export function matchTimeInRange(time: Time, matcher): boolean {
  if (time === null || !('from' in matcher) || !('to' in matcher)) return false;
  return (
    matcher.from <= formatTimeISO(time) && formatTimeISO(time) <= matcher.to
  );
}
