import PropTypes from 'prop-types';
import * as React from 'react';

import Icon from '../icon/Icon';
import { addMonths, addYears } from 'date-fns';

import {
  ajustLoopNavigation,
  propagateOnlyEnterTab,
} from './utils/datePickerUtils';

const Header = ({ date, dir, labels, months, onChange, parentRef }) => {
  const changeYear = (amount: number) => {
    onChange(addYears(date, amount));
  };

  const changeMonth = (amount: number) => {
    onChange(addMonths(date, amount));
  };

  const captionHeader = `${months[date.getMonth()]} ${date.getFullYear()}`;
  return (
    <div className="DayPicker-Caption" role="heading">
      <div className="DayPicker-Caption--heading" role="heading">
        <div>
          <button
            aria-label={labels.previousYear}
            className="DayPicker-Caption--prevYear"
            onClick={() => changeYear(-1)}
            onKeyDown={(e) =>
              ajustLoopNavigation(
                e,
                parentRef,
                '.DayPicker-Caption--prevMonth',
                '.DayPicker-TodayButton'
              )
            }
          >
            <Icon
              iconName={dir === 'ltr' ? 'chevron-left' : 'chevron-right'}
            ></Icon>
          </button>
          <button
            aria-label={labels.previousMonth}
            className="DayPicker-Caption--prevMonth"
            onClick={() => changeMonth(-1)}
            onKeyDown={propagateOnlyEnterTab}
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
            onKeyDown={propagateOnlyEnterTab}
          >
            <Icon iconName={dir === 'ltr' ? 'right' : 'left'}></Icon>
          </button>
          <button
            aria-label={labels.nextYear}
            className="DayPicker-Caption--nextYear"
            onClick={() => changeYear(1)}
            onKeyDown={propagateOnlyEnterTab}
          >
            <Icon
              iconName={dir === 'ltr' ? 'chevron-right' : 'chevron-left'}
            ></Icon>
          </button>
        </div>
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
