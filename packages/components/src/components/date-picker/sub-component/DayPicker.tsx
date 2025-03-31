import * as PropTypes from 'prop-types';
import * as React from 'react';
import { clsx } from 'clsx';

import { Modifier } from '../model/Modifiers';
import { HeaderLabel } from '../model/HeaderLabel';
import { Direction } from '../model/Direction';

import { modifierPropTypes } from '../utils/propTypesUtils';

import Header from './Header';

import { Keys, cancelEvent } from '../../common/eventUtils';

import {
  DAYS_ENABLED_SELECTOR,
  DAYS_SELECTOR,
  DAYS_VISIBLE_SELECTOR
} from '../utils/dateConstants';

import {
  formatDay,
  getBoundedDay,
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
  getDaysNeededForLastMonth,
  getDaysNeededForNextMonth,
  toArray,
  getSiblingOrCurrent,
} from '../utils/dateUtils';

import { matchDay } from '../utils/matchDayUtils';

import {
  addDays,
  addMonths,
  addYears,
  differenceInCalendarMonths,
  endOfWeek,
  endOfMonth,
  lastDayOfMonth,
  lightFormat,
  getDaysInMonth,
  setDate,
  startOfToday,
  startOfWeek,
  startOfMonth,
  isBefore,
} from 'date-fns';

type DayPickerComponentProps = {
  dir?: Direction;
  disabledDays?: Modifier | Modifier[];
  format?: string;
  highlightedDays?: Modifier | Modifier[];
  labels?: HeaderLabel;
  locale?: Locale;
  month?: Date;
  selectedDays?: Date;
  todayButton?: string;
  dataTestId?: string;
  onClose?: () => any;
  onDayClick?: (date: Date, modifiers) => any;
};

type DayPickerComponentState = {
  today: Date;
  currentMonth: Date;
  showTooltip: boolean;
  currentID: string;
};

class DayPicker extends React.Component<
  DayPickerComponentProps,
  DayPickerComponentState
> {
  dayPicker = null;

  constructor(props) {
    super(props);

    this.state = {
      today: startOfToday(),
      currentMonth: props.month || props.selectedDays || new Date(),
      showTooltip: false,
      currentID: ''
    };

    this.handleKeyDownContainer = this.handleKeyDownContainer.bind(this);
    this.handleKeyDownFooter = this.handleKeyDownFooter.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Changing the `month` props means changing the current displayed month
    if (prevProps.month !== this.props.month) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ currentMonth: this.props.month || new Date() });
    }
  }

  focusCell(index: number) {
    if (index) {
      if (this.dayPicker) {
        const dayNodes = this.dayPicker.querySelectorAll(
          DAYS_SELECTOR
        );
        dayNodes[index - 1].focus();
      }
    }
  }

  getEnabledCell(index, action, maxStepCheck) {
    const dayNodes = this.dayPicker.querySelectorAll(DAYS_VISIBLE_SELECTOR);
    const currentCell = dayNodes[index - 1];
    const siblingDirection =
      action === 'next' ? 'nextElementSibling' : 'previousElementSibling';
    return getSiblingOrCurrent(
      currentCell,
      DAYS_ENABLED_SELECTOR,
      siblingDirection,
      maxStepCheck
    );
  }

  focusOnlyEnabledCell(
    date: Date,
    action: 'next' | 'previous',
    maxStepCheck: number,
    needToChangeMonth = true
  ) {
    const { locale } = this.props;
    const index = date.getDate();
    if (index) {
      if (this.dayPicker) {
        const enabledCell = this.getEnabledCell(index, action, maxStepCheck);
        if (enabledCell) {
          enabledCell.focus();
        } else {
          if (needToChangeMonth) {
            // when called through arrow navigation
            // when changing month, focus the first available date, if exists
            const step = action === 'next' ? 1 : -1;
            const nextMonth = addMonths(date, step);
            this.setState({ currentMonth: nextMonth }, () => {
              // we need to use the callback to be sure the date picker is re-rendered with the new month
              const index = action === 'next' ? 1 : endOfMonth(nextMonth).getDate();
              const enabledCell = this.getEnabledCell(index, action, maxStepCheck);
              if (enabledCell) {
                enabledCell.focus();
              } else {
                // if all cell are disabled, focus the first day of month
                this.focusCell(
                  getBoundedDay(startOfMonth(nextMonth), nextMonth, locale)
                );
              }
            });
          } else {
            // when called through ARROWS navigation
            this.focusCell(getBoundedDay(startOfMonth(date), date, locale));
          }
        }
      }
    }
  }

  monthNavigation(date: Date, nextDate: Date) {
    const { locale } = this.props;
    this.setState({ currentMonth: nextDate }, () =>
      this.focusCell(getBoundedDay(date, nextDate, locale))
    );
  }

  arrowNavigation(date: Date, nextDate: Date) {
    const delta = differenceInCalendarMonths(nextDate, date);
    const action = isBefore(date, nextDate) ? 'next' : 'previous';
    const maxStepCheck = getDaysInMonth(this.state.currentMonth);
    if (delta !== 0) {
      this.setState({ currentMonth: nextDate }, () =>
        this.focusOnlyEnabledCell(nextDate, action, maxStepCheck, false)
      );
    } else {
      this.focusOnlyEnabledCell(nextDate, action, maxStepCheck);
    }
  }

  handleKeyDownContainer(e: React.KeyboardEvent): void {
    const { onClose } = this.props;
    switch (e.key) {
    case Keys.ESC:
      onClose();
      // eslint-disable-next-line no-fallthrough
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

  handleKeyDownCell(e: React.KeyboardEvent, date: Date, modifers): void {
    const { locale, dir } = this.props;
    const { currentMonth } = this.state;
    if (e.key !== Keys.ESC) {
      cancelEvent(e);
    }

    const direction = dir === 'ltr' ? 1 : -1;
    const MAX_STEP_TO_CHECK = 7;
    let nextCell;
    switch (e.key) {
    case Keys.TAB:
      if (this.dayPicker) {
        if (e.shiftKey) {
          this.dayPicker
            .querySelector('.tk-daypicker-header--nextYear')
            .focus();
        } else {
          this.dayPicker.querySelector('.tk-daypicker-today').focus();
        }
      }
      break;
    case Keys.SPACE:
    case Keys.SPACEBAR:
    case Keys.ENTER:
      // eslint-disable-next-line no-case-declarations
      const { onDayClick } = this.props;
      onDayClick(date, modifers);
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
      // eslint-disable-next-line no-case-declarations
      const firstDayOfWeek = startOfWeek(date, { locale });
      nextCell =
          firstDayOfWeek.getDate() <= date.getDate()
            ? firstDayOfWeek
            : startOfMonth(date);
      this.focusOnlyEnabledCell(nextCell, 'next', MAX_STEP_TO_CHECK);
      break;
    case Keys.END:
      // eslint-disable-next-line no-case-declarations
      const lastDayOfWeek = endOfWeek(date, { locale });
      nextCell =
          date.getDate() <= lastDayOfWeek.getDate()
            ? lastDayOfWeek
            : lastDayOfMonth(date);
      this.focusOnlyEnabledCell(nextCell, 'previous', MAX_STEP_TO_CHECK);
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
        if (this.dayPicker) {
          this.dayPicker
            .querySelector('.tk-daypicker-header--prevYear')
            .focus();
        }
      }
      break;
    case Keys.SPACE:
    case Keys.SPACEBAR:
    case Keys.ENTER:
      cancelEvent(e);
      // eslint-disable-next-line no-case-declarations
      const { disabledDays, onDayClick } = this.props;
      // eslint-disable-next-line no-case-declarations
      const { today } = this.state;
      onDayClick(today, { disabled: matchDay(today, disabledDays) });
      break;
    }
  }

  // Create WeekDayHeader
  renderSubHeader(weekdaysShort, weekdaysLong, dir) {
    return (
      <div role="rowgroup"> 
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
      </div>
    );
  }

  renderRemainingRows(days: number[], daysNeededForNextMonth: number) {
    const rowsArray: React.ReactElement[] = [];
    for (let i = 0; i < days.length; i += 7) {
      // Take once every 7 days.
      const dayOfWeek = days.slice(i, i + 7);
      const isLastRow = i + 7 > days.length;
      rowsArray.push(
        <div role="row" className="tk-daypicker-row">
          {this.renderInsideDay(dayOfWeek)}
          {isLastRow && this.renderOutsideDay(daysNeededForNextMonth)}
        </div>
      )
    }
    return rowsArray;
  }

  renderOutsideDay(days: number): JSX.Element[] {
    return toArray(days).map((cell) => {
      return (
        <div
          key={`day-outside-${cell}`}
          aria-selected="false"
          className="tk-daypicker-day--outside"
          tabIndex={-1}
          role="gridcell"
        />
      );
    });
  }

  renderInsideDay(days: number[]): JSX.Element[] {
    const {
      locale,
      selectedDays,
      disabledDays,
      highlightedDays,
      onDayClick,
    } = this.props;
    const { today, currentMonth } = this.state;
    const selectedDateString = selectedDays
      ? lightFormat(selectedDays, 'yyyy-MM-dd')
      : null;
    const todayDateString = lightFormat(today, 'yyyy-MM-dd');

    const isSelectedDayVisible =
      selectedDays &&
      differenceInCalendarMonths(selectedDays, currentMonth) === 0;

    return days.map((cell) => {
      const cellDate = setDate(currentMonth, cell);
      const cellName = formatDay(cellDate, locale);

      const itemDateString = lightFormat(cellDate, 'yyyy-MM-dd');
      const isSelected = itemDateString === selectedDateString;
      const isToday = itemDateString === todayDateString;
      const isDisabled = matchDay(cellDate, disabledDays);
      const isHighlighted = matchDay(cellDate, highlightedDays);
      const ariaSelected = isDisabled ? undefined : isSelected;
      const isTabIndex = isSelectedDayVisible
        ? isSelected
          ? 0
          : -1
        : isToday
          ? 0
          : -1; // focus on selected day otherwise current day
      return (
        <div
          key={cellName}
          className={clsx(
            'tk-daypicker-day',
            {
              'tk-daypicker-day--selected': isSelected,
            },
            {
              'tk-daypicker-day--today': isToday,
            },
            {
              'tk-daypicker-day--highlighted': isHighlighted && !isDisabled,
            },
            { 'tk-daypicker-day--disabled': isDisabled }
          )}
          role="gridcell"
          aria-label={cellName}
          aria-selected={ariaSelected}
          tabIndex={isTabIndex}
          onKeyDown={(e) =>
            this.handleKeyDownCell(e, cellDate, {
              disabled: isDisabled,
              selected: isSelected,
            })
          }
          onClick={() =>
            onDayClick(cellDate, {
              disabled: isDisabled,
              selected: isSelected,
            })
          }
        >
          {cell}
        </div>
      );
    });
  }

  renderBody() {
    const {
      dir,
      locale,
    } = this.props;
    const { currentMonth } = this.state;
    const daysInMonth = getDaysInMonth(currentMonth);
    const daysNeededForLastMonth = getDaysNeededForLastMonth(
      currentMonth,
      locale
    );
    const nbOfDaysNeedForFirstRow = 7 - daysNeededForLastMonth;
    const daysNeedForFirstRow = Array.from({ length: nbOfDaysNeedForFirstRow }, (_, i) => i + 1);
    const nbOfRemainingDays = daysInMonth - nbOfDaysNeedForFirstRow;
    const remainingDays =  Array.from({ length: nbOfRemainingDays }, (_, i) => i + 1 + nbOfDaysNeedForFirstRow);
    const daysNeededForNextMonth = getDaysNeededForNextMonth(
      currentMonth,
      locale
    );

    return (
      <div className="tk-daypicker-body" role="rowgroup" style={{ direction: dir }}>
        {/* Render the first row */}
        <div role="row" className="tk-daypicker-row">
          {this.renderOutsideDay(daysNeededForLastMonth)}
          {this.renderInsideDay(daysNeedForFirstRow)}
        </div>

        {/* Render the remaining row */}
        {this.renderRemainingRows(remainingDays, daysNeededForNextMonth)}
      </div>
    );
  }

  renderFooter() {
    const { todayButton, onDayClick } = this.props;
    const { today } = this.state;
    return (
      <div className="tk-daypicker-footer">
        <span
          className="tk-daypicker-today"
          tabIndex={0}
          aria-label={todayButton}
          role="button"
          onClick={() => onDayClick(today, {})}
          onKeyDown={this.handleKeyDownFooter}
        >
          {todayButton}
        </span>
      </div>
    );
  }

  render() {
    const { dir, labels, locale, dataTestId } = this.props;
    const { currentMonth, showTooltip, currentID } = this.state;

    const now = new Date();
    return (
      <div
        className="tk-daypicker"
        data-testid={dataTestId}
        ref={(el) => (this.dayPicker = el)}
        onKeyDown={this.handleKeyDownContainer}
      >
        <Header
          date={currentMonth}
          dir={dir}
          months={getMonths(now, locale)}
          showTooltip={showTooltip}
          currentID={currentID}
          onChange={(month) => this.setState({ currentMonth: month })}
          onVisible={(id) => this.setState({showTooltip: true, currentID: id})}
          onClose={() => this.setState({showTooltip: false, currentID: ''})}
          labels={labels}
          parentRef={this.dayPicker}
        />
        <div role="grid">
          {this.renderSubHeader(
            getWeekdaysShort(now, locale),
            getWeekdaysLong(now, locale),
            dir
          )}
          {this.renderBody()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
  static propTypes = {
    dir: PropTypes.oneOf<Direction>(['rtl', 'ltr']),
    disabledDays: PropTypes.oneOfType(modifierPropTypes),
    format: PropTypes.string,
    highlightedDays: PropTypes.oneOfType(modifierPropTypes),
    labels: PropTypes.exact({
      previousYear: PropTypes.string,
      previousMonth: PropTypes.string,
      nextYear: PropTypes.string,
      nextMonth: PropTypes.string,
    }),
    locale: PropTypes.any,
    month: PropTypes.instanceOf(Date),
    selectedDays: PropTypes.instanceOf(Date),
    todayButton: PropTypes.string,
    onClose: PropTypes.func,
    onDayClick: PropTypes.func,
  };
}

export default DayPicker;
