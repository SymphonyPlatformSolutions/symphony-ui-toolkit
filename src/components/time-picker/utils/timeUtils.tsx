import { Keys } from '../../date-picker/utils/keyUtils';

export const TIME_FORMAT = {
  HH_MM_12: /^(0[1-9]|1[0-2]):[0-5][0-9]$/,
  HH_MM_SS_12: /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]$/,
  HH_MM_12_A: /^(0[1-9]|1[0-2]):[0-5][0-9] ?[AaPp][Mm]$/,
  HH_MM_SS_12_A: /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] ?[AaPp][Mm]$/,
  HH_MM_24: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  HH_MM_SS_24: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
};

// const isTimeValid = (time: string, format: RegExp): boolean => {
//   return time.match(format);
// };

/**
 * Format time in ISO time format 'HH:MM:SS' on 24 hours
 * @param time
 */
export const formatTimeISO = (time) => {
  return (
    time.hours.toString().padStart(2, '0') +
    ':' +
    time.minutes.toString().padStart(2, '0') +
    ':' +
    time.seconds.toString().padStart(2, '0')
  );
};

/**
 * Convert ISO time to seconds
 * @param time HH:MM:ss
 */
const formatISOToSeconds = (time) => {
  // TODO : Do better (check, algo use Date ?)
  const matches = time.split(':'); // split it at the colons
  return +matches[0] * 60 * 60 + +matches[1] * 60 + +matches[2];
};

export enum FIELD {
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds',
  // TODO : AM-PM
}

export const findBestMatchingOption = (
  key: Keys,
  inputValue: any,
  options: any
) => {
  let bestMatchingOption = null;
  // TODO Add a method inTime object to get ISO time from hours/minutes/seconds
  const fieldValue = `${inputValue[FIELD.HOURS]}:${inputValue[FIELD.MINUTES]}:${
    inputValue[FIELD.SECONDS]
  }`;
  if (options && options.length > 0) {
    for (
      let index = key === Keys.ARROW_UP ? 0 : options.length - 1;
      key === Keys.ARROW_UP ? index < options.length : 0 <= index;
      key === Keys.ARROW_UP ? index++ : index--
    ) {
      if (bestMatchingOption === null) {
        bestMatchingOption = options[index];
      } else {
        const currentOption = options[index];
        const currentValue = currentOption.label;
        if (key === Keys.ARROW_UP && currentValue > fieldValue) {
          return bestMatchingOption;
        } else if (key === Keys.ARROW_DOWN && currentValue < fieldValue) {
          return bestMatchingOption;
        }
        bestMatchingOption = options[index];
      }
    }
  }
  return bestMatchingOption;
};

export const getOptionValue = (
  key: Keys,
  field: FIELD,
  inputValue: any,
  selectedOption: any,
  options: any
) => {
  let useBestMatchingOption = false;
  if (selectedOption == null) {
    // We have to find he best matching option to use it at first value to compare
    selectedOption = findBestMatchingOption(key, inputValue, options);
    useBestMatchingOption = true;
  }

  if (selectedOption) {
    // iterate on next options to find the next value
    for (
      let index = selectedOption.value.index;
      key === Keys.ARROW_UP ? index < options.length : 0 <= index;
      key === Keys.ARROW_UP ? index++ : index--
    ) {
      const currentOption = options[index];
      const currentValue = currentOption.value[field];
      if (useBestMatchingOption) {
        if (
          (key === Keys.ARROW_UP && currentValue > inputValue[field]) ||
          (key === Keys.ARROW_DOWN && currentValue < inputValue[field])
        ) {
          return currentValue;
        }
      } else if (currentValue !== inputValue[field]) {
        return currentValue;
      }
    }
  }

  // No value found, we return the current input value
  return inputValue[field];
};
