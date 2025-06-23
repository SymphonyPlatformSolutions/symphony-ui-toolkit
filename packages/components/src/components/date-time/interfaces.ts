export interface DateTimeProps {
  /** The date to convert to user locale date (string dates must be provided in ISO format) */
  date: Date | string;
  /** The format to use for the date. Available formats are: DATE_TIME (default), DATE, TIME, TIME_SECS */
  format?: DateTimeFormat;
  /** The locale to use for the date and time formatting (i.e. 'en-US', 'fr-FR', etc.). Default is the browser locale. */
  locale?: string;
  /** Whether to display the time in 12-hour format (i.e. '10:29 AM') or 24-hour format (i.e. 10:29). Default is undefined, relying on the locale formatting. */
  show12HourTime?: boolean;
  /** The format to use for the date (i.e. 'yyyy/MM/dd'). If not provided, the locale date format will be used. */
  dateFormat?: string;
  /**
   * The format to use for the time (i.e. 'hh:mm:ss a'). If not provided, the locale time format will be used.
   * Caution: this format overrides the display of time seconds and 12-hour time.
   */
  timeFormat?: string;
}

export enum DateTimeFormat {
  /** Date and time (i.e. '12/31/2024 10:29 AM') */
  DATE_TIME = 'date_time',
  /** Date only (i.e. '12/31/2024' or '12/31/2024' or '2024/12/31') */
  DATE = 'date',
  /** Time only (i.e. '10:29' or '10:29 AM') */
  TIME = 'time',
  /** Time with seconds (i.e. '10:29:47' or '10:29:47 AM') */
  TIME_SECS = 'time_secs',
}

export type DefaultDateTimeFormats = {
  [key in DateTimeFormat]: {
    /** The function to be called on the Date object to retrieve the formatted date string */
    toStringFn: string;
    /** The date format options */
    options?: Intl.DateTimeFormatOptions;
  };
};
