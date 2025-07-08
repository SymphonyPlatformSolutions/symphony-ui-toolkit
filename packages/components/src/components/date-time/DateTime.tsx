import { format as fnsFormat } from 'date-fns';
import * as React from 'react';
import { DateTimeFormat, DateTimeProps } from './interfaces';
import { DEFAULT_DATE_TIME_FORMAT, DEFAULT_DATE_TIME_FORMATS } from './utils';

/**
 * Component displaying a date or time (or both) according to the given options.
 * By default, the component displays the date and time using the user's browser locale.
 */
export const DateTime: React.FC<DateTimeProps> = (props) => {
  const { date, format, locale, dateFormat, timeFormat, show12HourTime } =
    props;
  const dateObject: Date = date instanceof Date ? date : new Date(date);
  const effectiveFormat: DateTimeFormat = format ?? DEFAULT_DATE_TIME_FORMAT;

  // render 2 components for DATE_TIME format
  if (effectiveFormat === DateTimeFormat.DATE_TIME) {
    return (
      <>
        <DateTime {...props} format={DateTimeFormat.DATE} />{' '}
        <DateTime {...props} format={DateTimeFormat.TIME} />
      </>
    );
  }

  let formattedDate: string;
  if (dateFormat && effectiveFormat === DateTimeFormat.DATE) {
    // apply date format if provided
    formattedDate = fnsFormat(dateObject, dateFormat);
  } else if (
    timeFormat &&
    [DateTimeFormat.TIME, DateTimeFormat.TIME_SECS].includes(effectiveFormat)
  ) {
    // apply time format if provided
    formattedDate = fnsFormat(dateObject, timeFormat);
  } else {
    // apply the default format for the given locale (browser locale by default)
    const { toStringFn, options } = DEFAULT_DATE_TIME_FORMATS[effectiveFormat];
    const effectiveOptions = { ...options, hour12: show12HourTime };
    formattedDate = dateObject[toStringFn](locale, effectiveOptions);
  }

  return <>{formattedDate}</>;
};

DateTime.defaultProps = {
  format: DEFAULT_DATE_TIME_FORMAT,
};
