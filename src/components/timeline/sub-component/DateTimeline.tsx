import * as React from 'react';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

export interface DateProps {
    time: string;
  }

const prefix = 'tk-timeline';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

/**
 * @returns formatted date
 * @param dateISO string date ISO
 * @param dateFormat format pattern
 */
const formatDate = (dateISO: string, dateFormat: string) => {
  if (!dateISO) {
    return null;
  }
  const date = parseISO(dateISO);
  if (!isValid(date)) {
    return null;
  }
  return format(date, dateFormat);
};
  

export function DateTimeline({ time }: DateProps) {
  if (!time) {
    return null;
  }
  const hours = formatDate(new Date(time).toISOString(), 'pp');
  const day = formatDate(new Date(time).toISOString(), 'd MMM yyyy');
  return (
    <div className={buildClass('item--date')}>
      <div className={buildClass('item--day')}>{day}</div>
      <div className={buildClass('item--hours')}>{hours}</div>
    </div>
  );
}
