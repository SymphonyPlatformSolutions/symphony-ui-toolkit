import { DateTimeFormat, DefaultDateTimeFormats } from './interfaces';

/**
 * Default date format options.
 */
export const DEFAULT_DATE_TIME_FORMAT = DateTimeFormat.DATE_TIME;
export const DEFAULT_DATE_TIME_FORMATS: DefaultDateTimeFormats = {
  [DateTimeFormat.DATE_TIME]: {
    toStringFn: 'toLocaleString',
    options: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
  },
  [DateTimeFormat.DATE]: {
    toStringFn: 'toLocaleDateString',
  },
  [DateTimeFormat.TIME]: {
    toStringFn: 'toLocaleTimeString',
    options: {
      hour: '2-digit',
      minute: '2-digit',
    },
  },
  [DateTimeFormat.TIME_SECS]: {
    toStringFn: 'toLocaleTimeString',
    options: {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    },
  },
};
