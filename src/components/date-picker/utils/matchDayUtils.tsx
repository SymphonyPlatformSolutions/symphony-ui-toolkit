import {
  AfterModifier,
  BeforeAfterModifier,
  BeforeModifier,
  Modifier,
  RangeModifier
} from '../model/Modifiers';

import { isSameDay, differenceInDays } from 'date-fns';

function isDayAfter(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) > 0;
}

function isDayBefore(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) < 0;
}

function matchDate(day: Date, matcher: Modifier): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}

function matchDayInRange(day: Date, matcher: Modifier): boolean {
  if (!('from' in matcher) || !('to' in matcher)) return false;
  const matchDayT: RangeModifier = {
    from: matcher.from,
    to: matcher.to,
  };
  if (differenceInDays(matchDayT.to, matchDayT.from) <= 0) return false;
  return isDayBefore(day, matcher.to) && isDayAfter(day, matcher.from);
}

function matchDayBefore(day: Date, matcher: Modifier): boolean {
  if ('after' in matcher || !('before' in matcher)) return false;
  const matchDayT: BeforeModifier = { before: matcher.before };
  return isDayBefore(day, matchDayT.before);
}

function matchDayAfter(day: Date, matcher: Modifier): boolean {
  if ('before' in matcher || !('after' in matcher)) return false;
  const matchDayT: AfterModifier = { after: matcher.after };
  return isDayAfter(day, matchDayT.after);
}

function matchDayBetween(day: Date, matcher: Modifier): boolean {
  if (!('after' in matcher) || !('before' in matcher)) return false;
  const matchDayT: BeforeAfterModifier = {
    before: matcher.before,
    after: matcher.after,
  };
  if (differenceInDays(matchDayT.before, matchDayT.after) <= 0) return false;
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
