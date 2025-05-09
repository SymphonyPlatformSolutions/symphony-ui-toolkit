import {
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfWeek,
  endOfYear,
  format,
  getDay,
  getDaysInMonth,
  isValid,
  lastDayOfMonth,
  parse,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns';

/**
 * used for aria-label
 */
export function formatDay(date, locale: Locale) {
  return format(date, 'EEE MMM dd yyyy', { locale });
}

export function getMonths(date: Date, locale: Locale) {
  const arr = eachMonthOfInterval({
    start: startOfYear(date),
    end: endOfYear(date),
  });

  return arr.map((item) => {
    return format(item, 'MMMM', { locale });
  });
}

export function getWeekdaysLong(date: Date, locale: Locale): string[] {
  return getWeekdays(date, locale, 'eeee');
}

export function getWeekdaysShort(date: Date, locale: Locale): string[] {
  return getWeekdays(date, locale, 'eeeeee');
}

/**
 * Return a list of translated weekdays, the starting day depends on locale
 * @param date
 * @param locale
 * @param pattern
 */
function getWeekdays(date: Date, locale: Locale, pattern: string): string[] {
  const arr = eachDayOfInterval({
    start: startOfWeek(date, { locale }),
    end: endOfWeek(date, { locale }),
  });

  return arr.map((item) => {
    return format(item, pattern, { locale });
  });
}

export function getFirstDayOfWeek(date: Date, locale: Locale) {
  return getDay(startOfWeek(date, { locale }));
}

export function getDaysNeededForLastMonth(date: Date, locale: Locale) {
  const firstDayOfWeek = startOfWeek(date, { locale });

  const startDate = startOfMonth(date);
  // getDay return the value of the weekday from 0 to 6
  // i.e. startDate is a Wednesday -> getDay(startDate) = 3
  // i.e. firstDayOfWeek is a Sunday -> getDay(firstDayOfWeek) = 0 (depends on locale)
  // + 7 and the modulo to ensure the result is positive value is between 0 and 6 (javascript % can return negative value)
  return (getDay(startDate) - getDay(firstDayOfWeek) + 7) % 7;
}

export function getDaysNeededForNextMonth(date: Date, locale: Locale) {
  const daysNeededForLastMonth = getDaysNeededForLastMonth(date, locale);
  const lastDayOfWeek = endOfWeek(date, { locale });

  const endDate = lastDayOfMonth(date);

  // getDay return the value of the weekday from 0 to 6
  // i.e enDate is the Friday -> getDay(enDate) = 5
  // i.e. lastDayOfWeek is a Saturday -> getDay(lastDayOfWeek) = 6 (depends on locale)
  // + 7 and the modulo to ensure the result is positive value is between 0 and 6 (javascript % can return negative value)
  let daysNeededForNextMonth =
    (getDay(lastDayOfWeek) - getDay(endDate) + 7) % 7;
  if (daysNeededForLastMonth + getDaysInMonth(date) <= 35) {
    daysNeededForNextMonth += 7;
  }
  return daysNeededForNextMonth;
}

export function getBoundedDay(date: Date, nextDate: Date, locale: Locale) {
  const minBound = getDaysNeededForLastMonth(nextDate, locale);
  // if the day to focus is an "outside day", then focus the first (or last) day
  return Math.min(
    Math.max(
      minBound + 1,
      date.getDate() + getDaysNeededForLastMonth(date, locale)
    ),
    minBound + getDaysInMonth(nextDate)
  );
}

export function autocompleteDate(value: string, format: string, locale: Locale): Date {
  if (!value) {
    return null;
  }
  const date = parse(value, format, new Date(), { locale: locale });
  // If year not typed, take the current year
  if (!isValid(date)) {
    // regex: remove -yyyy, yyyy-, /yyyy, yyyy/, .yyyy, ...
    const autocompletedDate = parse(
      value,
      format.replace(/[\W]?y{4}[\W]?/, ''),
      new Date(),
      {
        locale: locale,
      }
    );
    return autocompletedDate;
  }
  return date;
}

export function toArray(length: number): Array<number> {
  return Array.from({ length }, (x, i) => i);
}

export function getSiblingOrCurrent(elem, selector: string, direction: 'nextElementSibling' | 'previousElementSibling', maxStepToCheck: number) {
  let sibling = elem; // get current first

  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  let index = 0;
  while (sibling && index < (maxStepToCheck || Number.MAX_SAFE_INTEGER)) {
    if (sibling.matches(selector)) return sibling;
    if (sibling[direction]) {
      sibling = sibling[direction];
    } else {
      const parentSibling = sibling.parentElement[direction];
      if (!parentSibling) {
        return;
      }
      sibling = direction === 'nextElementSibling' ? parentSibling.firstElementChild : parentSibling.lastElementChild;
    }
    index++;
  }
}
