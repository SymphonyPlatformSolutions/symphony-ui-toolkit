import {
  autocompleteDate,
  getFirstDayOfWeek,
  getSiblingOrCurrent,
} from '../../../src/components/date-picker/utils/dateUtils';

describe('Date Utils', () => {
  it('getFirstDayOfWeek', () => {
    // default locale is 'en-US', so the first day of week should be Sunday (= day 0)
    const result = getFirstDayOfWeek(new Date('11-08-2020'), null);
    expect(result).toEqual(0);
  });

  describe('autocomplete date from string', () => {
    it('should return null when date is null', () => {
      const result = autocompleteDate(null, 'MM-dd-yyyy', null);
      expect(result).toBe(null);
    });
    it('should return date when string is a valid date', () => {
      const result = autocompleteDate('11-08-2019', 'MM-dd-yyyy', null);
      expect(result).toEqual(new Date('11-08-2019'));
    });
    it('should return autocomplete date when the year is missing', () => {
      const result = autocompleteDate('11-08', 'MM-dd-yyyy', null);
      const currentDate = new Date();
      expect(result.getFullYear()).toEqual(currentDate.getFullYear());
    });
  });

  describe('get element that match the class', () => {
    const prevSibling = document.createElement('div');
    const nextSibling = document.createElement('div');
    const currentDay = document.createElement('div');
    currentDay.id = 'current';

    test.each([
      [
        'tk-daypicker-day',
        'tk-daypicker-day',
        'nextElementSibling',
        currentDay,
      ],
      [
        'tk-daypicker-day tk-daypicker-day--disabled',
        'tk-daypicker-day',
        'nextElementSibling',
        nextSibling,
      ],
      [
        'tk-daypicker-day',
        'tk-daypicker-day',
        'previousElementSibling',
        currentDay,
      ],
      [
        'tk-daypicker-day tk-daypicker-day--disabled',
        'tk-daypicker-day',
        'previousElementSibling',
        prevSibling,
      ],
      [
        'tk-daypicker-day tk-daypicker-day--disabled',
        'tk-daypicker-day tk-daypicker-day--disabled',
        'previousElementSibling',
        undefined,
      ],
      [
        'tk-daypicker-day tk-daypicker-day--disabled',
        'tk-daypicker-day tk-daypicker-day--disabled',
        'nextElementSibling',
        undefined,
      ],
    ])(
      'when current day is %p, sibling are %p and checking %p direction',
      (currenDayClass, siblingClass, siblingDirection, expected) => {
        currentDay.className = currenDayClass;
        prevSibling.className = siblingClass;
        nextSibling.className = siblingClass;

        const parent = document.createElement('div');
        parent.appendChild(prevSibling);
        parent.appendChild(currentDay);
        parent.appendChild(nextSibling);

        const result = getSiblingOrCurrent(
          parent.querySelector('#current'),
          '.tk-daypicker-day:not(.tk-daypicker-day--disabled)',
          siblingDirection as 'nextElementSibling' | 'previousElementSibling',
          7
        );
        expect(result).toEqual(expected);
      }
    );
  });
});
