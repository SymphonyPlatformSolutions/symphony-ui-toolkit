import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './Header';
import { Keys, cancelEvent } from './utils/keyUtils';

import {
  formatDay,
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
  getDaysNeededForLastMonth,
  getDaysNeededForNextMonth,
  toArray,
} from './utils/dateUtils';

import { matchDay } from './utils/matchDayUtils';

import {
  addDays,
  addMonths,
  addYears,
  differenceInCalendarMonths,
  endOfWeek,
  lastDayOfMonth,
  isSameMonth,
  lightFormat,
  getDaysInMonth,
  setDate,
  startOfToday,
  startOfWeek,
} from 'date-fns';

type DayPickerComponentProps = {
  // className?: string;
  selectedDays?: Date;
  disabledDays?: any; //Modifier | Modifier[];
  // disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  format?: string;
  highlightedDays?: any; //Modifier | Modifier[];
  // initialMonth?: Date;
  // label?: string;
  labels?: {
    previousYear: string;
    nextYear: string;
    previousMonth: string;
    nextMonth: string;
  };
  // name?: string;
  // placeholder?: string;
  locale?: Locale;
  // placement?: 'top' | 'bottom' | 'right' | 'left';
  // todayButton?: string;
  // tooltip?: string;
  // showOverlay?: boolean;
  // onBlur?: (event) => any;
  // onChange?: (event) => any;
  onClose?: () => any;
  onDayClick?: (date: Date, modifiers) => any;
  onMonthChange?: (event) => any;
  month?: Date;
  todayButton?: string;
};

type DayPickerComponentState = {
  today: Date;
  currentMonth: Date;
};

class DayPicker extends Component<
  DayPickerComponentProps,
  DayPickerComponentState
> {
  dayPicker = null;

  constructor(props) {
    super(props);

    this.state = {
      today: startOfToday(),
      currentMonth: props.month || new Date(),
    };

    this.handleKeyDownContainer = this.handleKeyDownContainer.bind(this);
    this.handleKeyDownFooter = this.handleKeyDownFooter.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Changing the `month` props means changing the current displayed month
    if (
      prevProps.month !== this.props.month &&
      !isSameMonth(prevProps.month, this.props.month)
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ currentMonth: this.props.month || new Date() });
    }
  }

  focusDiv(index) {
    if (index) {
      if (this.dayPicker) {
        const dayNodes = this.dayPicker.querySelectorAll(
          '.tk-daypicker-day--outside, .tk-daypicker-day'
        );
        dayNodes[index - 1].focus();
      }
    }
  }

  monthNavigation(date, nextCell) {
    this.setState({ currentMonth: nextCell }, () =>
      this.focusDiv(this.boundFocusDay(date, nextCell))
    );
  }

  arrowNavigation(date, nextCell) {
    const delta = differenceInCalendarMonths(nextCell, date);
    if (delta !== 0) {
      this.monthNavigation(nextCell, nextCell);
    } else {
      this.focusDiv(this.boundFocusDay(nextCell, nextCell));
    }
  }

  boundFocusDay(date, nextCell) {
    const { locale } = this.props;

    const minBound = getDaysNeededForLastMonth(nextCell, locale);
    // if the day to focus is an "outside day", then focus the first (or last) day
    return Math.min(
      Math.max(
        minBound + 1,
        date.getDate() + getDaysNeededForLastMonth(date, locale)
      ),
      minBound + getDaysInMonth(nextCell)
    );
  }

  handleKeyDownContainer(e: React.KeyboardEvent): void {
    const { onClose } = this.props;
    switch (e.key) {
      case Keys.ESC:
        onClose();
      case Keys.PAGE_DOWN:
      case Keys.PAGE_UP:
      case Keys.HOME:
      case Keys.END:
      case Keys.ARROW_LEFT:
      case Keys.ARROW_UP:
      case Keys.ARROW_RIGHT:
      case Keys.ARROW_DOWN:
        cancelEvent(e);
        break;
    }
  }

  handleKeyDownCell(e, date: Date): void {
    const { locale, dir } = this.props;
    const { currentMonth } = this.state;
    if (e.key !== Keys.ESC) {
      cancelEvent(e);
    }

    const direction = dir === 'ltr' ? 1 : -1;

    let nextCell;
    switch (e.key) {
      case Keys.TAB:
        if (e.shiftKey) {
          this.dayPicker
            .querySelector('.tk-daypicker-header--nextYear')
            .focus();
        } else {
          this.dayPicker.querySelector('.tk-daypicker-today').focus();
        }
        break;
      case Keys.ENTER:
        e.target.click();
        break;
      case Keys.PAGE_UP:
        if (e.shiftKey) {
          this.monthNavigation(date, addYears(currentMonth, -1));
        } else {
          this.monthNavigation(date, addMonths(currentMonth, -1));
        }
        break;
      case Keys.PAGE_DOWN:
        if (e.shiftKey) {
          this.monthNavigation(date, addYears(currentMonth, 1));
        } else {
          this.monthNavigation(date, addMonths(currentMonth, 1));
        }
        break;
      case Keys.HOME:
        const firstDayOfWeek = startOfWeek(date, { locale });
        nextCell =
          firstDayOfWeek.getDate() <= date.getDate()
            ? firstDayOfWeek
            : setDate(date, 1);
        this.focusDiv(this.boundFocusDay(nextCell, nextCell));
        break;
      case Keys.END:
        const lastDayOfWeek = endOfWeek(date, { locale });
        nextCell =
          date.getDate() <= lastDayOfWeek.getDate()
            ? lastDayOfWeek
            : lastDayOfMonth(date);
        this.focusDiv(this.boundFocusDay(nextCell, nextCell));
        break;
      case Keys.ARROW_LEFT:
        this.arrowNavigation(date, addDays(date, -1 * direction));
        break;
      case Keys.ARROW_UP:
        this.arrowNavigation(date, addDays(date, -7));
        break;
      case Keys.ARROW_RIGHT:
        this.arrowNavigation(date, addDays(date, 1 * direction));
        break;
      case Keys.ARROW_DOWN:
        this.arrowNavigation(date, addDays(date, 7));
        break;
      default:
        break;
    }
  }

  handleKeyDownFooter(e): void {
    switch (e.key) {
      case Keys.TAB:
        if (!e.shiftKey) {
          cancelEvent(e);
          this.dayPicker
            .querySelector('.tk-daypicker-header--prevYear')
            .focus();
        }
        break;
      case Keys.ENTER:
        e.target.click();
        break;
    }
  }

  // Create WeekDayHeader
  renderSubHeader(weekdaysShort, weekdaysLong, dir) {
    return (
      <div
        className="tk-daypicker-weekday"
        role="row"
        style={{ direction: dir }}
      >
        {weekdaysShort.map((day, index) => (
          <div
            className="tk-daypicker-weekday--text"
            role="columnheader"
            key={index}
            title={weekdaysLong[index]}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }

  renderBody() {
    const {
      dir,
      locale,
      selectedDays,
      disabledDays,
      highlightedDays,
      onDayClick,
    } = this.props;
    const { today, currentMonth } = this.state;
    const daysInMonth = getDaysInMonth(currentMonth);
    const daysNeededForLastMonth = getDaysNeededForLastMonth(
      currentMonth,
      locale
    );
    const daysNeededForNextMonth = getDaysNeededForNextMonth(
      currentMonth,
      locale
    );

    const selectedDateString = selectedDays
      ? lightFormat(selectedDays, 'yyyy-MM-dd')
      : null;
    const todayDateString = lightFormat(today, 'yyyy-MM-dd');
    return (
      <div className="tk-daypicker-body" role="grid" style={{ direction: dir }}>
        {toArray(daysNeededForLastMonth).map((cell) => {
          const cellName = formatDay(setDate(currentMonth, cell + 1), locale);
          return (
            <div
              key={cellName}
              aria-label={cellName}
              aria-selected="false"
              className="tk-daypicker-day--outside"
              tabIndex={-1}
            ></div>
          );
        })}
        {toArray(daysInMonth).map((cell) => {
          const cellNumber = cell + 1;
          const cellDate = setDate(currentMonth, cellNumber);
          const cellName = formatDay(cellDate, locale);

          const itemDateString = lightFormat(cellDate, 'yyyy-MM-dd');
          const isSelected = itemDateString === selectedDateString;
          const isToday = itemDateString === todayDateString;
          const isDisabled = matchDay(cellDate, disabledDays);
          const isHighlighted = matchDay(cellDate, highlightedDays);
          const isTabIndex = selectedDays
            ? isSelected
              ? 0
              : -1
            : cell === 0
            ? 0
            : -1; // focus on selected day otherwise first cell

          return (
            <div
              key={cellName}
              aria-label={cellName}
              aria-selected={isSelected}
              tabIndex={isTabIndex}
              role="gridcell"
              className={classNames(
                'tk-daypicker-day',
                {
                  'tk-daypicker-day--selected': isSelected,
                },
                {
                  'tk-daypicker-day--today': isToday,
                },
                {
                  'tk-daypicker-day--highlighted': isHighlighted,
                },
                { 'tk-daypicker-day--disabled': isDisabled }
              )}
              onKeyDown={(e) => this.handleKeyDownCell(e, cellDate)}
              onClick={() =>
                onDayClick(cellDate, {
                  disabled: isDisabled,
                  selected: isSelected,
                })
              }
            >
              {cellNumber}
            </div>
          );
        })}
        {toArray(daysNeededForNextMonth).map((cell) => {
          // TODO refact with Last
          const cellName = formatDay(setDate(currentMonth, cell + 1), locale);
          return (
            <div
              key={cellName}
              aria-label={cellName}
              aria-selected="false"
              className="tk-daypicker-day--outside"
              tabIndex={-1}
            ></div>
          );
        })}
      </div>
    );
  }

  renderFooter() {
    const { disabledDays, todayButton, onDayClick } = this.props;
    const { today } = this.state;
    return (
      <div className="tk-daypicker-footer">
        <span
          className="tk-daypicker-today"
          tabIndex={0}
          aria-label={todayButton}
          onClick={() =>
            onDayClick(today, { disabled: matchDay(today, disabledDays) })
          }
          onKeyDown={this.handleKeyDownFooter}
        >
          {todayButton}
        </span>
      </div>
    );
  }

  render() {
    const { dir, labels, locale } = this.props;
    const { currentMonth } = this.state;

    const now = new Date();
    return (
      <div
        className="tk-daypicker"
        ref={(el) => (this.dayPicker = el)}
        onKeyDown={this.handleKeyDownContainer}
      >
        <Header
          date={currentMonth}
          dir={dir}
          months={getMonths(now, locale)}
          onChange={(month) => this.setState({ currentMonth: month })}
          labels={labels}
          parentRef={this.dayPicker}
        />
        {this.renderSubHeader(
          getWeekdaysShort(now, locale),
          getWeekdaysLong(now, locale),
          dir
        )}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

// DayPicker.propTypes = {
//   // className: PropTypes.string,
//   date: PropTypes.instanceOf(Date),
//   // format: PropTypes.string,
//   dir: PropTypes.oneOf(['ltr', 'rtl']),
//   // disabled: PropTypes.bool,
//   // disabledDays: PropTypes.oneOfType(modifierPropTypes),
//   // initialMonth: PropTypes.instanceOf(Date),
//   // label: PropTypes.string,
//   // labels: PropTypes.exact({
//   //   previousYear: PropTypes.string,
//   //   previousMonth: PropTypes.string,
//   //   nextYear: PropTypes.string,
//   //   nextMonth: PropTypes.string,
//   // }),
//   locale: PropTypes.string,
//   // name: PropTypes.string,
//   // onBlur: PropTypes.func,
//   // onChange: PropTypes.func,
//   // placeholder: PropTypes.string,
//   // placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
//   // todayButton: PropTypes.string,
//   // tooltip: PropTypes.string,
//   // showOverlay: PropTypes.bool,
// };

export default DayPicker;
