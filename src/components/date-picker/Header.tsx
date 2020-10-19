import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../icon/Icon';
import { addMonths, addYears } from 'date-fns';

const Header = ({ date, dir, labels, months, onChange }) => {
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
            aria-label={labels.previousYear}
            className="DayPicker-Caption--prevYear"
            onClick={() => changeYear(-1)}
          >
            <Icon iconName={dir === 'ltr' ? 'chevron-left' : 'chevron-right'}></Icon>
          </button>
          <button
            aria-label={labels.previousMonth}
            className="DayPicker-Caption--prevMonth"
            onClick={() => changeMonth(-1)}
          >
            <Icon iconName={dir === 'ltr' ? 'left' : 'right'}></Icon>
          </button>
        </div>
        <div className="DayPicker-Caption--text">{captionHeader}</div>
        <div>
          <button
            aria-label={labels.nextMonth}
            className="DayPicker-Caption--nextMonth"
            onClick={() => changeMonth(1)}
          >
            <Icon iconName={dir === 'ltr' ? 'right' : 'left'}></Icon>
          </button>
          <button
            aria-label={labels.nextYear}
            className="DayPicker-Caption--nextYear"
            onClick={() => changeYear(1)}
          >
            <Icon iconName={dir === 'ltr' ? 'chevron-right' : 'chevron-left'}></Icon>
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
