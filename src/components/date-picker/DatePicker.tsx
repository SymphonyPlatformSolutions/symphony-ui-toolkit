import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';

import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { CSSTransition } from 'react-transition-group';

import TextField from '../input/TextField';
import Icon from '../icon/Icon';

import {
  getFirstDayOfWeek,
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
} from './utils/dateFnsUtils';

import { addLoopNavigation } from './utils/datePickerUtils';

import { format as formatDate, isSameDay, isValid, parse } from 'date-fns';

import Header from './Header';

/** TODO: Handle format case sensitive */
const DatePicker = ({
  date,
  disabledDays,
  dir = 'ltr',
  format = 'MM-dd-yyyy',
  initialMonth,
  label,
  placeholder = format.toUpperCase(),
  // multiple = false,
  locale = 'en-US',
  todayButton,
  tooltip,
  showOverlay,
}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [navigationDate, setNavigationDate] = useState(
    initialMonth || date || new Date()
  );
  const getLocale: Locale = require(`date-fns/locale/${locale}/index.js`);
  const [showPicker, setShowPicker] = useState(showOverlay || false);

  const [inputValue, setInputValue] = useState(
    date ? formatDate(date, format, { locale: getLocale }) : null
  );
  // const [inputValue, setInputValue] = useState(date ? date.toLocaleDateString() : null);

  const refPicker = useRef(null);
  const refInput = useRef(null);
  const refIcon = useRef(null);

  const handleHeaderChange = (date) => {
    setNavigationDate(date);
  };

  const handleDayClick = (date: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    setSelectedDate(modifiers.selected ? undefined : date);
    setInputValue(
      modifiers.selected
        ? undefined
        : formatDate(date, format, { locale: getLocale })
    );
    setShowPicker(false);
    // refInput.current.focus();
  };

  const handleKeyDownPicker = (e) => {
    switch (e.keyCode) {
      case 27:
        setShowPicker(false);
        e.preventDefault();
        e.stopPropagation();
        if (refIcon.current) {
          refIcon.current.focus();
        }
        break;
      default:
        break;
    }
  };

  // const handleMultipleDayClick = (day: Date, modifiers: DayModifiers) => {
  //   if (modifiers.disabled) {
  //     return;
  //   }
  //   if (modifiers.selected) {
  //     const selectedIndex = selectedDays.findIndex((selectedDay) =>
  //       isSameDay(selectedDay, day)
  //     );
  //     selectedDays.splice(selectedIndex, 1);
  //   } else {
  //     selectedDays.push(day);
  //   }
  //   setSelectedDate(selectedDays);
  // };

  /** reajust loop and navigation */
  addLoopNavigation(
    refPicker,
    '.DayPicker-TodayButton',
    '.DayPicker-Caption--prevYear'
  );

  const now = new Date(); // to handle locale dictionary
  // TODO: replace "Today" by translation service

  /** INPUT LOGIC */
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    const newDate = new Date(newValue);
    if (isValid(newDate)) {
      setSelectedDate(newDate);
      setNavigationDate(newDate);
      // TODO: handle when year is not specified
    }
  };

  const handleClickIcon = () => {
    setShowPicker(!showPicker);
  };

  const handleKeyDownInput = (e) => {
    switch (e.keyCode) {
      case 13:
        e.preventDefault();
        e.stopPropagation();
        setShowPicker(!showPicker);
        break;
      case 27:
        e.preventDefault();
        e.stopPropagation();
        setShowPicker(false);
        break;
      default:
        break;
    }
  };

  const handleKeyDownIcon = (e) => {
    switch (e.keyCode) {
      case 9:
        if (!e.shiftKey && showPicker && refPicker.current) {
          e.preventDefault();
          e.stopPropagation();
          refPicker.current.dayPicker.querySelector('.DayPicker-Day:not(.DayPicker-Day--outside)').focus();
        }
        break;
      case 13:
        e.preventDefault();
        e.stopPropagation();
        handleClickIcon();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="DayPicker-Input">
        <TextField
          // innerRef={refInput}
          value={inputValue}
          placeholder={placeholder}
          label={label}
          tooltip={tooltip}
          onChange={handleInputChange}
          onFocus={() => setShowPicker(true)}
          onKeyDown={handleKeyDownInput}
        ></TextField>
        <span
          ref={refIcon}
          tabIndex={0}
          className="DayPicker-Input--icon"
          onClick={handleClickIcon}
          onKeyDown={handleKeyDownIcon}
        >
          <Icon iconName="calendar"></Icon>
        </span>
      </div>
      <div style={{ display: showPicker ? 'block' : 'none' }}>
        <DayPicker
          ref={refPicker}
          selectedDays={selectedDate}
          disabledDays={disabledDays}
          dir={dir}
          todayButton={todayButton}
          month={navigationDate}
          captionElement={({ date }) => (
            <Header
              date={date}
              months={getMonths(now, getLocale)}
              onChange={handleHeaderChange}
            />
          )}
          onKeyDown={handleKeyDownPicker}
          // onDayClick={multiple ? handleMultipleDayClick : handleDayClick}
          onDayClick={handleDayClick}
          onTodayButtonClick={handleDayClick}
          locale={locale}
          months={getMonths(now, getLocale)}
          weekdaysLong={getWeekdaysLong(now, getLocale)}
          weekdaysShort={getWeekdaysShort(now, getLocale)}
          // firstDayOfWeek={getFirstDayOfWeek(now, getLocale)}
          // labels={getLabels(locale)}
          fixedWeeks
        ></DayPicker>
      </div>
    </>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  dir: PropTypes.string,
  disabledDays: PropTypes.any, // TODO: Date | Object | Date[] | (day: Date) ⇒ boolean
  initialMonth: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  locale: PropTypes.string,
  placeholder: PropTypes.string,
  // multiple: PropTypes.bool,
  todayButton: PropTypes.string,
  tooltip: PropTypes.string,
  showOverlay: PropTypes.bool,
};

export default DatePicker;
