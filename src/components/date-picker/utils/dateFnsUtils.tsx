import {
  format,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  eachDayOfInterval,
  eachMonthOfInterval,
  getDaysInMonth,
  addMonths,
  addYears,
  startOfToday,
  isBefore,
  startOfMonth,
  lastDayOfMonth,
  getDay,
  isValid,
  addDays,
  differenceInCalendarMonths
} from 'date-fns';

// locale={locale}
// months={MONTHS[locale]}
// weekdaysLong={WEEKDAYS_LONG[locale]}
// weekdaysShort={WEEKDAYS_SHORT[locale]}
// firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
// labels={LABELS[locale]}
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

// export function getLabels(locale: Locale) {
//   return { nextMonth: 'Next month', previousMonth: 'Previous month' };
// }
