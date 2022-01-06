import { FunctionComponent } from 'react';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import Icon from '../../icon/Icon';
import { addMonths, addYears } from 'date-fns';

import { Keys, cancelEvent } from '../../common/eventUtils';
import { Direction } from '../model/Direction';
import { HeaderLabel } from '../model/HeaderLabel';

type HeaderProps = {
  date: Date;
  dir: Direction;
  labels: HeaderLabel;
  months: Array<string>;
  onChange?: (event) => any;
  parentRef?: any;
}

const Header: FunctionComponent<HeaderProps> = ({ date, dir, labels, months, onChange, parentRef }) => {
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
    if (!parentRef) {
      return;
    }
    if (event.key === Keys.TAB) {
      cancelEvent(event);
      if (event.shiftKey) {
        const elClassPrevious = parentRef.querySelector('.tk-daypicker-today');
        if (elClassPrevious) {
          elClassPrevious.focus();
        }
      } else {
        const elClassNext = parentRef.querySelector(
          '.tk-daypicker-header--prevMonth'
        );
        if (elClassNext) {
          elClassNext.focus();
        }
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
  date: PropTypes.instanceOf(Date).isRequired,
  dir: PropTypes.oneOf<Direction>(['rtl', 'ltr']).isRequired,
  labels: PropTypes.exact({
    nextMonth: PropTypes.string.isRequired,
    previousMonth: PropTypes.string.isRequired,
    previousYear: PropTypes.string.isRequired,
    nextYear: PropTypes.string.isRequired,
  }).isRequired,
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  parentRef: PropTypes.any,
};

export default Header;
