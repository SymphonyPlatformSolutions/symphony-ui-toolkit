import {
  Time,
  formatISOTimeToSeconds,
  getDelimiterPosition,
  getFormattedTime,
  getISOTimeFromLocalTime,
  getLastDelimiterPosition,
  getNextSelectionIndexes,
  getOptions,
  getSteps,
  getTimeFromString,
  isTimeDisabled,
  isTimeSelected,
  isTimeValid,
  matchExactTime,
  matchTimeInRange,
} from '../../../src/components/time-picker/utils/';
import { DisabledTime } from '../../../src/components/time-picker/interfaces';

describe('Time Utils', () => {
  test.each([
    [
      [
        {
          label: '09:30:35 AM',
          value: '09:30:35',
          data: {
            index: 0,
            time: new Time('09', '30', '35'),
          }
        },
        {
          label: '10:40:25 AM',
          value: '10:40:25',
          data: {
            index: 1,
            time: new Time('10', '40', '25')
          },
        },
        {
          label: '05:50:12 PM',
          value: '17:50:12',
          data: {
            index: 2,
            time: new Time('17', '50', '12')
          },
        },
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
    [new Time('11', '30', '00'), '11', '30', '40', { time: '11:30:00' }, false],
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
          data: {
            index: 0, time: new Time('00', '00', '00')
          },
        },
        {
          label: '00:30:00',
          value: '00:30:00',
          data: {
            index: 1, time: new Time('00', '30', '00'),
          }
        },
        {
          label: '01:00:00',
          value: '01:00:00',
          data: {
            index: 2, time: new Time('01', '00', '00')
          },
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

  test.each([
    [null, null, true],
    [new Time('14', '30', '00'), { time: '14:30:00' }, true],
    [new Time('10', '30', '00'), { time: '14:30:00' }, false],
    [new Time('14', '30', '00'), [{ time: '14:30:00' }], true],
    [new Time('10', '30', '00'), [{ time: '14:30:00' }], false],
    [new Time('14', '30', '00'), { from: '10:30:00', to: '18:00:00' }, true],
    [new Time('08', '30', '00'), { from: '10:30:00', to: '18:00:00' }, false],
    [new Time('14', '30', '00'), [{ from: '10:30:00', to: '18:00:00' }], true],
    [new Time('08', '30', '00'), [{ from: '10:30:00', to: '18:00:00' }], false],
  ])(
    'isTimeDisabled with time %p',
    (
      time: Time,
      disabledTimes: DisabledTime | Array<DisabledTime>,
      expected: boolean
    ) => {
      const result = isTimeDisabled(time, disabledTimes);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['05:30:20 AM', 2],
    ['05 AM', 2],
    ['05', null],
  ])(
    'getDelimiterPosition with inputText %p',
    (inputTime: string, expected) => {
      const result = getDelimiterPosition(inputTime);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['05:30:20 AM', 8],
    ['05:30:20', 5],
    ['05', null],
  ])(
    'getLastDelimiterPosition with inputText %p',
    (inputTime: string, expected) => {
      const result = getLastDelimiterPosition(inputTime);
      expect(result).toEqual(expected);
    }
  );

  test.each([
    ['05:30:20 AM', 0, true, { start: 3, end: 5 }],
    ['05:30:20 AM', 1, true, { start: 3, end: 5 }],
    ['05:30:20 AM', 2, true, { start: 3, end: 5 }],
    ['05:30:20 AM', 3, true, { start: 6, end: 8 }],
    ['05:30:20 AM', 4, true, { start: 6, end: 8 }],
    ['05:30:20 AM', 5, true, { start: 6, end: 8 }],
    ['05:30:20 AM', 6, true, { start: 9, end: 11 }],
    ['05:30:20 AM', 7, true, { start: 9, end: 11 }],
    ['05:30:20 AM', 8, true, { start: 9, end: 11 }],
    ['05:30:20 AM', 9, true, null],
    ['05:30:20 AM', 10, true, null],
    ['05:30:20 AM', 11, true, null],
    ['05:30:20', 0, true, { start: 3, end: 5 }],
    ['05:30', 0, true, { start: 3, end: 5 }],
    ['05', 0, true, null],
    ['05:30:20 AM', 11, false, { start: 6, end: 8 }],
    ['05:30:20 AM', 10, false, { start: 6, end: 8 }],
    ['05:30:20 AM', 9, false, { start: 6, end: 8 }],
    ['05:30:20 AM', 8, false, { start: 3, end: 5 }],
    ['05:30:20 AM', 7, false, { start: 3, end: 5 }],
    ['05:30:20 AM', 6, false, { start: 3, end: 5 }],
    ['05:30:20 AM', 5, false, { start: 0, end: 2 }],
    ['05:30:20 AM', 4, false, { start: 0, end: 2 }],
    ['05:30:20 AM', 3, false, { start: 0, end: 2 }],
    ['05:30:20 AM', 2, false, null],
    ['05:30:20 AM', 1, false, null],
    ['05:30:20 AM', 0, false, null],
    ['05:30:20', 8, false, { start: 3, end: 5 }],
    ['05:30', 5, false, { start: 0, end: 2 }],
    ['05', 2, false, null],
  ])(
    'getNextSelectionIndexes with inputText %p cursorPosition %p searchForward %p',
    (
      inputTime: string,
      cursorPosition: number,
      searchForward: boolean,
      expected
    ) => {
      const result = getNextSelectionIndexes(
        inputTime,
        cursorPosition,
        searchForward
      );
      expect(result).toEqual(expected);
    }
  );
});
