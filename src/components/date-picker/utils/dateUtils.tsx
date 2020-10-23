import {
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfWeek,
  endOfYear,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  startOfYear
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

export function daysNeededForLastMonth(date: Date, locale: Locale) {
  const firstDayOfWeek = startOfWeek(date, { locale });

  const startDate = startOfMonth(date);
  return (((getDay(startDate) - getDay(firstDayOfWeek)) % 7) + 7) % 7; // get positive modulo
}
