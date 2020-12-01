import { Modifier } from '../model/Modifiers';

import { differenceInDays, isSameDay, isAfter, isBefore, isWithinInterval } from 'date-fns';

function isDayAfter(day1: Date, day2: Date): boolean {
  return isAfter(day1, day2) && !isSameDay(day1, day2);
}

function isDayBefore(day1: Date, day2: Date): boolean {
  return isBefore(day1, day2) && !isSameDay(day1, day2);
}

function matchDate(day: Date, matcher: Modifier): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}

function matchDayInRange(day: Date, matcher: Modifier): boolean {
  if (!('from' in matcher) || !('to' in matcher)) return false;
  if (differenceInDays(matcher.to, matcher.from) <= 0) return false;
  return isWithinInterval(day, { start: matcher.from, end: matcher.to });
}

function matchDayBefore(day: Date, matcher: Modifier): boolean {
  if ('after' in matcher || !('before' in matcher)) return false;
  return isDayBefore(day, matcher.before);
}

function matchDayAfter(day: Date, matcher: Modifier): boolean {
  if ('before' in matcher || !('after' in matcher)) return false;
  return isDayAfter(day, matcher.after);
}

function matchDayBetween(day: Date, matcher: Modifier): boolean {
  if (!('after' in matcher) || !('before' in matcher)) return false;
  if (differenceInDays(matcher.before, matcher.after) <= 0) return false;
  return isDayAfter(day, matcher.after) && isDayBefore(day, matcher.before);
}

function matchDayOfWeek(day: Date, matcher: Modifier): boolean {
  if (!('daysOfWeek' in matcher)) return false;
  return matcher.daysOfWeek.includes(day.getDay());
}

function matchFunction(day: Date, matcher: Modifier): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day);
}

/**
 * Return `true` if a day matches a day matcher.
 */
export function matchDay(day: Date, matcher: Modifier | Modifier[]): boolean {
  if (!matcher) return false;
  let matchers: Modifier[];

  if (Array.isArray(matcher)) {
    matchers = matcher;
  } else {
    matchers = [matcher];
  }

  return matchers.some((dayMatcher: Modifier) => {
    if (!dayMatcher) return false;
    return (
      matchDate(day, dayMatcher) ||
      matchDayInRange(day, dayMatcher) ||
      matchDayBefore(day, dayMatcher) ||
      matchDayAfter(day, dayMatcher) ||
      matchDayBetween(day, dayMatcher) ||
      matchDayOfWeek(day, dayMatcher) ||
      matchFunction(day, dayMatcher)
    );
  });
}
