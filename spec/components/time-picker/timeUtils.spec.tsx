import {
  FIELD,
  Time,
  formatISOTimeToSeconds,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getOptions,
  getOptionValue,
  getSteps,
  getTimeFromString,
  isTimeSelected,
  isTimeValid,
  matchExactTime,
  matchTimeInRange,
} from '../../../src/components/time-picker/utils/';
import { Keys } from '../../../src/components/date-picker/utils/keyUtils';

describe('Time Utils', () => {
  // Example, with a step of 1h 30min 00s (5 400 seconds)
  const options = [
    {
      label: '10:00:00',
      value: '10:00:00',
      data: { index: 0, hours: '10', minutes: '00', seconds: '00' },
    },
    {
      label: '11:30:00',
      value: '11:30:00',
      data: { index: 1, hours: '11', minutes: '30', seconds: '00' },
    },
    {
      label: '13:00:00',
      value: '13:00:00',
      data: { index: 2, hours: '13', minutes: '00', seconds: '00' },
    },
    {
      label: '14:30:00',
      value: '14:30:00',
      data: { index: 3, hours: '14', minutes: '30', seconds: '00' },
    },
    {
      label: '16:00:00',
      value: '16:00:00',
      data: { index: 4, hours: '16', minutes: '00', seconds: '00' },
    },
  ];

  test.each([
    [
      [
        { label: '09:30:35 AM' },
        { label: '10:40:25 AM' },
        { label: '05:50:12 PM' },
      ],
      {
        hours: ['05', '09', '10'],
        minutes: ['30', '40', '50'],
        seconds: ['12', '25', '35'],
      },
    ],
  ])('getSteps with options %p', (options, expected) => {
    const result = getSteps(options, null);
    expect(result).toEqual(expected);
  });

  const steps = getSteps(options, null);

  test.each([
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('10', '00', '00'), '30'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('11', '30', '15'), '00'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('10', '00', '00'), '30'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('10', '20', '00'), '30'],
    [Keys.ARROW_UP, FIELD.HOURS, new Time('11', '30', '15'), '13'],
    [Keys.ARROW_UP, FIELD.HOURS, new Time('13', '00', '30'), '14'],
    [Keys.ARROW_UP, FIELD.HOURS, new Time('16', '00', '00'), '10'],
    [Keys.ARROW_UP, FIELD.HOURS, new Time('12', '20', '00'), '13'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('10', '00', '00'), '30'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('10', '20', '00'), '30'],
    [Keys.ARROW_UP, FIELD.MINUTES, new Time('16', '00', '00'), '30'],
    [Keys.ARROW_UP, FIELD.SECONDS, new Time('12', '20', '00'), '01'],
    [Keys.ARROW_UP, FIELD.SECONDS, new Time('12', '20', '45'), '46'],
    [Keys.ARROW_UP, FIELD.SECONDS, new Time('12', '20', '59'), '00'],
    [Keys.ARROW_DOWN, FIELD.HOURS, new Time('10', '00', '00'), '16'],
    [Keys.ARROW_DOWN, FIELD.HOURS, new Time('13', '00', '30'), '11'],
    [Keys.ARROW_DOWN, FIELD.HOURS, new Time('10', '00', '00'), '16'],
    [Keys.ARROW_DOWN, FIELD.HOURS, new Time('12', '20', '00'), '11'],
    [Keys.ARROW_DOWN, FIELD.MINUTES, new Time('10', '00', '00'), '30'],
    [Keys.ARROW_DOWN, FIELD.MINUTES, new Time('10', '20', '00'), '00'],
    [Keys.ARROW_DOWN, FIELD.HOURS, new Time('12', '20', '00'), '11'],
    [Keys.ARROW_DOWN, FIELD.MINUTES, new Time('10', '00', '00'), '30'],
    [Keys.ARROW_DOWN, FIELD.MINUTES, new Time('10', '20', '00'), '00'],
    [Keys.ARROW_DOWN, FIELD.SECONDS, new Time('12', '20', '00'), '59'],
    [Keys.ARROW_DOWN, FIELD.SECONDS, new Time('12', '20', '45'), '44'],
    [Keys.ARROW_DOWN, FIELD.SECONDS, new Time('12', '20', '59'), '58'],
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
    [new Time('14', '30', '20'), 'HH:mm', '14:30'],
    [new Time('14', '30', '20'), 'hh:mm', '02:30'],
    [new Time('14', '30', '20'), 'hh:mm a', '02:30 PM'],
    [new Time('14', '30', '20'), 'HH:mm:ss', '14:30:20'],
    [new Time('14', '30', '20'), 'hh:mm:ss', '02:30:20'],
    [null, 'HH:mm:ss', null],
    [new Time('azerty', 'qsdfgh', 'wxcvb'), 'HH:mm:ss', null],
  ])(
    'getFormattedTime with time %p and format %p',
    (time: Time, format: string, expected: string) => {
      const result = getFormattedTime(time, format);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['09:00 A', 'hh:mm a', null],
    ['14:30:20', null, null],
    [null, 'HH:mm:ss', null],
    ['azerty', 'HH:mm:ss', null],
    ['14:30:20', 'HH:mm:ss a', null], // HH and 'a' can't be at the same time
    ['14:30:20', 'HH:mm:ss', new Time('14', '30', '20')],
    ['02:30:20 PM', 'hh:mm:ss a', new Time('14', '30', '20')],
  ])(
    'getISOTimeFromLocalTime with time %p and format %p',
    (time, format, expected) => {
      const result = getISOTimeFromLocalTime(time, format);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [new Time('11', '30', '00'), '11', '30', '00', [], true],
    [new Time('11', '30', '00'), '11', '50', '00', [], false],
    [new Time('11', '30', '00'), '12', '30', '00', [], false],
    [new Time('11', '30', '00'), '11', '30', '40', [], false],
    [new Time('11', '30', '00'), '11', '30', '40', ['11:30:00'], false],
    [
      new Time('11', '30', '00'),
      '11',
      '30',
      '40',
      [{ from: '11:00:00', to: '12:00:00' }],
      false,
    ],
  ])(
    'isTimeSelected with option %p and format %p',
    (time, hours, minutes, seconds, disabledTimes, expected) => {
      const result = isTimeSelected(
        time,
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
    ['azerty', null],
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
    [null, 'HH:mm:ss', false],
  ])('isTimeValid with time %p', (time, format, expected) => {
    const result = isTimeValid(time, format);
    expect(result).toEqual(expected);
  });

  test.each([
    [new Time('14', '30', '20'), { time: '14:30:20' }, true],
    [new Time('15', '30', '20'), { time: '14:30:20' }, false],
    [null, { time: '14:30:20' }, false],
  ])(
    'matchExactTime with time %p and matcher %p',
    (time, matcher, expected) => {
      const result = matchExactTime(time, matcher);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [new Time('14', '30', '20'), { from: '14:00:00', to: '15:00:00' }, true],
    [new Time('14', '00', '00'), { from: '14:00:00', to: '15:00:00' }, true],
    [new Time('15', '00', '00'), { from: '14:00:00', to: '15:00:00' }, true],
    [new Time('14', '00', '00'), { from: '05:00:00', to: '06:00:00' }, false],
    [null, { from: '14:00:00', to: '15:00:00' }, false],
  ])(
    'matchTimeInRange with time %p and matcher %p',
    (time, matcher, expected) => {
      const result = matchTimeInRange(time, matcher);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    [
      'HH:mm:ss',
      0,
      3600,
      1800,
      [
        {
          label: '00:00:00',
          value: '00:00:00',
          data: { index: 0, hours: '00', minutes: '00', seconds: '00' },
        },
        {
          label: '00:30:00',
          value: '00:30:00',
          data: { index: 1, hours: '00', minutes: '30', seconds: '00' },
        },
        {
          label: '01:00:00',
          value: '01:00:00',
          data: { index: 2, hours: '01', minutes: '00', seconds: '00' },
        },
      ],
    ],
  ])(
    'getOptions with format %p, min %p, max %p, step %p',
    (format, min, max, step, expected) => {
      const result = getOptions(format, min, max, step);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['05:30:20 AM', new Time('05', '30', '20', 'AM')],
    ['05:30 AM', new Time('05', '30', undefined, 'AM')],
    ['05:30:20 PM', new Time('05', '30', '20', 'PM')],
    ['18:40:10', new Time('18', '40', '10')],
    ['18:40', new Time('18', '40')],
    [null, null],
    ['', null],
    ['azerty', null],
    ['99:99:99', null],
  ])('getTimeFromString with inputText %p', (inputTime: string, expected) => {
    const result = getTimeFromString(inputTime);
    expect(result).toEqual(expected);
  });

  // const getHours = (time: Time) => {
  //   return time.hours;
  // };
  //
  // test.each([[new Time('05', '30', '20'), '05']])(
  //   'getHours with inputText %p',
  //   (time: Time, expected) => {
  //     const result = getHours(time);
  //     expect(result).toEqual(expected);
  //   }
  // );
});
