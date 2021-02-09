import Time from './Time';
import { formatTimeISO } from './timeUtils';

/**
 * Return true if the time is equal to the time in the matcher
 * @param time Time {hours, minutes, seconds}
 * @param matcher Object {time: 'HH:mm:ss'}
 */
export function matchExactTime(time: Time, matcher): boolean {
  if (time === null || !('time' in matcher)) return false;
  return formatTimeISO(time) === matcher.time;
}

/**
 * Returns true if the range contains the time
 * @param time Time {hours, minutes, seconds}
 * @param matcher Object {from: 'HH:mm:ss', to: 'HH:mm:ss'}
 */
export function matchTimeInRange(time: Time, matcher): boolean {
  if (time === null || !('from' in matcher) || !('to' in matcher)) return false;
  return (
    matcher.from <= formatTimeISO(time) && formatTimeISO(time) <= matcher.to
  );
}
