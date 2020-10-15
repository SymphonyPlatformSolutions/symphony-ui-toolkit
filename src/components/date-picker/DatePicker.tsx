import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';

import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {
  getFirstDayOfWeek,
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
} from './utils/dateFnsUtils';

import { addLoopNavigation } from './utils/datePickerUtils';

import { isSameDay } from 'date-fns';

import Header from './Header';

const DatePicker = ({
  selectedDays,
  disabledDays,
  dir = 'ltr',
  multiple = false,
  locale = 'en-US',
  todayButton,
}) => {
  const [selectedDate, setSelectedDate] = useState(selectedDays);
  const [disabledDate, setDisabledDate] = useState(disabledDays);
  const [navigationDate, setNavigationDate] = useState(new Date());
  const getLocale: Locale = require(`date-fns/locale/${locale}/index.js`);

  const refPicker = useRef(null);

  const handleHeaderChange = (date) => {
    setNavigationDate(date);
  };

  const handleDayClick = (date: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    setSelectedDate(modifiers.selected ? undefined : date);
  };

  const handleMultipleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    if (modifiers.selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    setSelectedDate(selectedDays);
  };

  /** reajust loop and navigation */
  addLoopNavigation(
    refPicker,
    '.DayPicker-TodayButton',
    '.DayPicker-Caption--prevYear'
  );

  // if (refPicker.current && refPicker.current.dayPicker) {
  //   const elDayPicker = refPicker.current.dayPicker;
  //   elDayPicker.addEventListener('focus', () => {
  //     elDayPicker
  //       .querySelector('.DayPicker-Day:not(.DayPicker-Day--outside)')
  //       .focus();
  //   });
  // }

  const now = new Date(); // to handle locale dictionary
  // TODO: replace "Today" by translation service
  return (
    <DayPicker
      ref={refPicker}
      selectedDays={selectedDate}
      disabledDays={disabledDate}
      dir={dir}
      todayButton={todayButton}
      month={navigationDate}
      captionElement={({ date, localeUtils }) => (
        <Header
          date={date}
          localeUtils={localeUtils}
          onChange={handleHeaderChange}
        />
      )}
      onDayClick={multiple ? handleMultipleDayClick : handleDayClick}
      locale={locale}
      months={getMonths(now, getLocale)}
      weekdaysLong={getWeekdaysLong(now, getLocale)}
      weekdaysShort={getWeekdaysShort(now, getLocale)}
      // firstDayOfWeek={getFirstDayOfWeek(now, getLocale)}
      // labels={getLabels(locale)}
      fixedWeeks
    ></DayPicker>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  selectedDays: PropTypes.any, // TODO: Date | Object | Date[] | (day: Date) ⇒ boolean
  dir: PropTypes.string,
  disabledDays: PropTypes.any, // TODO: Date | Object | Date[] | (day: Date) ⇒ boolean
  locale: PropTypes.string,
  multiple: PropTypes.bool,
  todayButton: PropTypes.string,
};

export default DatePicker;
