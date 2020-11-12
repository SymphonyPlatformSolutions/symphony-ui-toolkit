import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../../icon/Icon';
import { addMonths, addYears } from 'date-fns';

import { Keys, cancelEvent } from '../utils/keyUtils';

const Header = ({ date, dir, labels, months, onChange, parentRef }) => {
  const changeYear = (amount: number) => {
    onChange(addYears(date, amount));
  };

  const changeMonth = (amount: number) => {
    onChange(addMonths(date, amount));
  };

  /**
   * Change the behaviour of 'Tab' and 'Shift + Tab' event of an html element
   * Used to allow loop navigation "'Today Button' --> Header (<<) --> Header (<)"
   */
  const ajustLoopNavigation = (event) => {
    if (event.key === Keys.TAB) {
      cancelEvent(event);
      if (event.shiftKey) {
        const elClassPrevious = parentRef.querySelector('.tk-daypicker-today');
        elClassPrevious.focus();
      } else {
        const elClassNext = parentRef.querySelector(
          '.tk-daypicker-header--prevMonth'
        );
        elClassNext.focus();
      }
    }
  };

  const textHeader = `${months[date.getMonth()]} ${date.getFullYear()}`;
  return (
    <div
      className="tk-daypicker-header"
      role="heading"
      style={{ direction: dir }}
    >
      <div>
        <button
          aria-label={labels.previousYear}
          className="tk-daypicker-header--prevYear"
          onClick={() => changeYear(-1)}
          onKeyDown={ajustLoopNavigation}
        >
          <Icon
            iconName={dir === 'rtl' ? 'chevron-right' : 'chevron-left'}
          ></Icon>
        </button>
        <button
          aria-label={labels.previousMonth}
          className="tk-daypicker-header--prevMonth"
          onClick={() => changeMonth(-1)}
        >
          <Icon iconName={dir === 'rtl' ? 'right' : 'left'}></Icon>
        </button>
      </div>
      <div className="tk-daypicker-header--text">{textHeader}</div>
      <div>
        <button
          aria-label={labels.nextMonth}
          className="tk-daypicker-header--nextMonth"
          onClick={() => changeMonth(1)}
        >
          <Icon iconName={dir === 'rtl' ? 'left' : 'right'}></Icon>
        </button>
        <button
          aria-label={labels.nextYear}
          className="tk-daypicker-header--nextYear"
          onClick={() => changeYear(1)}
        >
          <Icon
            iconName={dir === 'rtl' ? 'chevron-left' : 'chevron-right'}
          ></Icon>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  date: PropTypes.instanceOf(Date),
  dir: PropTypes.oneOf(['rtl', 'ltr']),
  labels: PropTypes.shape({
    nextMonth: PropTypes.string.isRequired,
    previousMonth: PropTypes.string.isRequired,
    previousYear: PropTypes.string.isRequired,
    nextYear: PropTypes.string.isRequired,
  }),
  localeUtils: PropTypes.instanceOf(Object),
  months: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  parentRef: PropTypes.any,
};

export default Header;
