import {
  FIELD,
  formatISOTimeToSeconds,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getOptionValue,
  getSteps,
  isOptionSelected,
  isTimeValid,
} from '../../../src/components/time-picker/utils/timeUtils';
import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

describe('Time Utils', () => {
  // Example, with a step of 1h 30min 00s (5 400 seconds)
  const options = [
    {
      label: '10:00:00',
      value: { index: 0, hours: '10', minutes: '00', seconds: '00' },
    },
    {
      label: '11:30:00',
      value: { index: 1, hours: '11', minutes: '30', seconds: '00' },
    },
    {
      label: '13:00:00',
      value: { index: 2, hours: '13', minutes: '00', seconds: '00' },
    },
    {
      label: '14:30:00',
      value: { index: 3, hours: '14', minutes: '30', seconds: '00' },
    },
    {
      label: '16:00:00',
      value: { index: 4, hours: '16', minutes: '00', seconds: '00' },
    },
  ];

  const steps = getSteps(options);

  test.each([
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '11', minutes: '30', seconds: '15' },
      '00',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '10', minutes: '20', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.HOURS,
      { hours: '11', minutes: '30', seconds: '15' },
      '13',
    ],
    [
      Keys.ARROW_UP,
      FIELD.HOURS,
      { hours: '13', minutes: '00', seconds: '30' },
      '14',
    ],
    [
      Keys.ARROW_UP,
      FIELD.HOURS,
      { hours: '16', minutes: '00', seconds: '00' },
      '10',
    ],
    [
      Keys.ARROW_UP,
      FIELD.HOURS,
      { hours: '12', minutes: '20', seconds: '00' },
      '13',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '10', minutes: '20', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.MINUTES,
      { hours: '16', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_UP,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '00' },
      '01',
    ],
    [
      Keys.ARROW_UP,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '45' },
      '46',
    ],
    [
      Keys.ARROW_UP,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '59' },
      '00',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.HOURS,
      { hours: '10', minutes: '00', seconds: '00' },
      '16',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.HOURS,
      { hours: '13', minutes: '00', seconds: '30' },
      '11',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.HOURS,
      { hours: '10', minutes: '00', seconds: '00' },
      '16',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.HOURS,
      { hours: '12', minutes: '20', seconds: '00' },
      '11',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.MINUTES,
      { hours: '10', minutes: '20', seconds: '00' },
      '00',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.HOURS,
      { hours: '12', minutes: '20', seconds: '00' },
      '11',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.MINUTES,
      { hours: '10', minutes: '00', seconds: '00' },
      '30',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.MINUTES,
      { hours: '10', minutes: '20', seconds: '00' },
      '00',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '00' },
      '59',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '45' },
      '44',
    ],
    [
      Keys.ARROW_DOWN,
      FIELD.SECONDS,
      { hours: '12', minutes: '20', seconds: '59' },
      '58',
    ],
    [Keys.ARROW_UP, FIELD.AMPM, { ampm: 'AM' }, 'PM'],
    [Keys.ARROW_UP, FIELD.AMPM, { ampm: 'PM' }, 'AM'],
    [Keys.ARROW_DOWN, FIELD.AMPM, { ampm: 'AM' }, 'PM'],
    [Keys.ARROW_DOWN, FIELD.AMPM, { ampm: 'PM' }, 'AM'],
  ])(
    'getOptionValue with key %p on field %p with value %p',
    (key, fieldType, inputValue, expected) => {
      const result = getOptionValue(key, fieldType, inputValue, options, steps);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [{ hours: '14', minutes: '30', seconds: '20' }, 'HH:mm', '14:30'],
    [{ hours: '14', minutes: '30', seconds: '20' }, 'hh:mm', '02:30'],
    [{ hours: '14', minutes: '30', seconds: '20' }, 'hh:mm a', '02:30 PM'],
    [{ hours: '14', minutes: '30', seconds: '20' }, 'HH:mm:ss', '14:30:20'],
    [{ hours: '14', minutes: '30', seconds: '20' }, 'hh:mm:ss', '02:30:20'],
    [null, 'HH:mm:ss', null],
    [{}, 'HH:mm:ss', null],
    [
      { hours: 'azerty', minutes: 'qsdfgh', seconds: 'wxcvb' },
      'HH:mm:ss',
      null,
    ],
  ])(
    'getFormattedTime with time %p and format %p',
    (time, format, expected) => {
      const result = getFormattedTime(time, format);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['14:30:20', null, null],
    [null, 'HH:mm:ss', null],
    ['azerty', 'HH:mm:ss', null],
    ['14:30:20', 'HH:mm:ss', { hours: '14', minutes: '30', seconds: '20' }],
    [
      '02:30:20 PM',
      'hh:mm:ss a',
      { hours: '14', minutes: '30', seconds: '20' },
    ],
  ])(
    'getISOTimeFromLocalTime with time %p and format %p',
    (time, format, expected) => {
      const result = getISOTimeFromLocalTime(time, format);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [options[1], '11', '30', '00', [], true],
    [options[1], '11', '50', '00', [], false],
    [options[1], '12', '30', '00', [], false],
    [options[1], '11', '30', '40', [], false],
    [options[1], '11', '30', '40', ['11:30:00'], false],
    [
      options[1],
      '11',
      '30',
      '40',
      [{ from: '11:00:00', to: '12:00:00' }],
      false,
    ],
  ])(
    'isOptionSelected with option %p and format %p',
    (option, hours, minutes, seconds, disabledTimes, expected) => {
      const result = isOptionSelected(
        option,
        hours,
        minutes,
        seconds,
        disabledTimes
      );
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['00:00:00', 0],
    ['00:00:10', 10],
    ['00:01:10', 70],
    ['01:01:10', 3670],
  ])('formatISOTimeToSeconds with time %p', (time, expected) => {
    const result = formatISOTimeToSeconds(time);
    expect(result).toEqual(expected);
  });

  test.each([
    ['15:30:00', 'HH:mm:ss', true],
    ['15:30', 'HH:mm', true],
    ['15:30:00', 'hh:mm', false], // 12 hours format
    ['15:30:00', 'hh:mm:ss', false],
    ['99:99:99', 'HH:mm:ss', false],
    ['zdsqdqsqd', 'HH:mm:ss', false],
    ['15:30:00', null, true],
  ])('isTimeValid with time %p', (time, format, expected) => {
    const result = isTimeValid(time, format);
    expect(result).toEqual(expected);
  });
});
