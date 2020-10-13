import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../icon/Icon';
import { addMonths, addYears } from 'date-fns';

const Header = ({ date, months, onChange }) => {
  const changeYear = (amount: number) => {
    onChange(addYears(date, amount));
  };

  const changeMonth = (amount: number) => {
    onChange(addMonths(date, amount));
  };

  const captionHeader = `${months[date.getMonth()]} ${date.getFullYear()}`;
  // todo: add aria label, and with translation
  // todo: navigation
  return (
    <div className="DayPicker-Caption" role="heading">
      <div className="DayPicker-Caption--heading" role="heading">
        <div>
          <button
            className="DayPicker-Caption--prevYear"
            aria-label="Previous Year"
            onClick={() => changeYear(-1)}
          >
            <Icon iconName="chevron-left"></Icon>
          </button>
          <button
            className="DayPicker-Caption--prevMonth"
            aria-label="Previous Month"
            onClick={() => changeMonth(-1)}
          >
            <Icon iconName="left"></Icon>
          </button>
        </div>
        <div className="DayPicker-Caption--text">{captionHeader}</div>
        <div>
          <button
            className="DayPicker-Caption--nextMonth"
            aria-label="Next Month"
            onClick={() => changeMonth(1)}
          >
            <Icon iconName="right"></Icon>
          </button>
          <button
            className="DayPicker-Caption--nextYear"
            aria-label="Next Year"
            onClick={() => changeYear(1)}
          >
            <Icon iconName="chevron-right"></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  date: PropTypes.instanceOf(Date),
  localeUtils: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
};

export default Header;
