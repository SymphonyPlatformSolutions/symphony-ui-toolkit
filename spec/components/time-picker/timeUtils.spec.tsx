import {
  FIELD,
  findBestMatchingOption,
  getOptionValue,
} from '../../../src/components/time-picker/utils/timeUtils';
import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

describe('Time Utils', () => {
  // Example, with a step of 1h 30min 15s (5 415 seconds)
  const options = [
    {
      label: '10:00:00',
      value: { index: 0, hours: '10', minutes: '00', seconds: '00' },
    },
    {
      label: '11:30:15',
      value: { index: 1, hours: '11', minutes: '30', seconds: '15' },
    },
    {
      label: '13:00:30',
      value: { index: 2, hours: '13', minutes: '00', seconds: '30' },
    },
    {
      label: '14:30:45',
      value: { index: 3, hours: '14', minutes: '30', seconds: '45' },
    },
    {
      label: '16:01:00',
      value: { index: 4, hours: '16', minutes: '01', seconds: '00' },
    },
  ];

  test.each([
    [
      FIELD.HOURS,
      { hours: '11', minutes: '30', seconds: '15' },
      options[1],
      '13',
    ],
    [
      FIELD.HOURS,
      { hours: '13', minutes: '00', seconds: '30' },
      options[2],
      '14',
    ],
    [
      FIELD.HOURS,
      { hours: '16', minutes: '01', seconds: '00' },
      options[4],
      '16',
    ],
  ])(
    'getNextValue when field is %p, with value %p',
    (fieldType, inputValue, selectedOption, expected) => {
      const result = getOptionValue(
        Keys.ARROW_UP,
        fieldType,
        inputValue,
        selectedOption,
        options
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      options[0],
      '30',
    ],
    [
      FIELD.MINUTES,
      { hours: '11', minutes: '30', seconds: '15' },
      options[1],
      '00',
    ],
    [
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      options[4],
      '01',
    ],
    [
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      options[4],
      '01',
    ],
  ])(
    'getNextValue when field is %p, with value %p',
    (fieldType, inputValue, selectedOption, expected) => {
      const result = getOptionValue(
        Keys.ARROW_UP,
        fieldType,
        inputValue,
        selectedOption,
        options
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [FIELD.HOURS, { hours: '12', minutes: '20', seconds: '00' }, null, '11'],
    [FIELD.MINUTES, { hours: '10', minutes: '00', seconds: '00' }, null, '00'],
    [FIELD.MINUTES, { hours: '10', minutes: '20', seconds: '00' }, null, '00'],
  ])(
    'getNextValue when SelectedOption is null and field is %p, with value %p',
    (fieldType, inputValue, selectedOption, expected) => {
      const result = getOptionValue(
        Keys.ARROW_DOWN,
        fieldType,
        inputValue,
        selectedOption,
        options
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [
      FIELD.HOURS,
      { hours: '10', minutes: '00', seconds: '00' },
      options[0],
      '10',
    ],
    [
      FIELD.HOURS,
      { hours: '13', minutes: '00', seconds: '30' },
      options[2],
      '11',
    ],
    [
      FIELD.HOURS,
      { hours: '10', minutes: '00', seconds: '00' },
      options[4],
      '16',
    ],
  ])(
    'getPreviousValue when field is %p, with value %p',
    (fieldType, inputValue, selectedOption, expected) => {
      const result = getOptionValue(
        Keys.ARROW_DOWN,
        fieldType,
        inputValue,
        selectedOption,
        options
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [FIELD.HOURS, { hours: '12', minutes: '20', seconds: '00' }, null, '13'],
    [FIELD.MINUTES, { hours: '10', minutes: '00', seconds: '00' }, null, '30'],
    [FIELD.MINUTES, { hours: '10', minutes: '20', seconds: '00' }, null, '30'],
    [FIELD.MINUTES, { hours: '16', minutes: '01', seconds: '00' }, null, '30'],
  ])(
    'getPreviousValue when SelectedOption is null and field is %p, with value %p',
    (fieldType, inputValue, selectedOption, expected) => {
      const result = getOptionValue(
        Keys.ARROW_UP,
        fieldType,
        inputValue,
        selectedOption,
        options
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [Keys.ARROW_UP, { hours: '11', minutes: '30', seconds: '15' }, options[1]],
    [Keys.ARROW_UP, { hours: '11', minutes: '40', seconds: '00' }, options[1]],
    [Keys.ARROW_UP, { hours: '08', minutes: '00', seconds: '00' }, options[0]],
    [
      Keys.ARROW_DOWN,
      { hours: '11', minutes: '30', seconds: '15' },
      options[1],
    ],
    [
      Keys.ARROW_DOWN,
      { hours: '11', minutes: '40', seconds: '00' },
      options[2],
    ],
    [
      Keys.ARROW_DOWN,
      { hours: '20', minutes: '00', seconds: '00' },
      options[4],
    ],
  ])(
    'findBestMatchingOption when key is %p and field is %p',
    (key, inputValue, expected) => {
      const result = findBestMatchingOption(key, inputValue, options);
      expect(result).toEqual(expected);
    }
  );
});
