import PropTypes from 'prop-types';
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { usePopper } from 'react-popper';

import { CSSTransition } from 'react-transition-group';

import DayPicker, {
  DayModifiers,
  RangeModifier,
  BeforeModifier,
  AfterModifier,
  BeforeAfterModifier,
  DaysOfWeekModifier,
  FunctionModifier,
  Modifier,
} from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import TextField from '../input/TextField';

import styled from 'styled-components';

import { PopperContainer } from '../common/popperUtils';

import {
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
} from './utils/dateUtils';

import {
  handleKeyDownIcon,
  handleKeyDownInput,
  handleKeyDownPicker,
  handleKeyDownCell,
} from './utils/keyUtils';
import { addLoopNavigation, removeTabIndex } from './utils/datePickerUtils';
import { modifierPropTypes } from './utils/propTypesUtils';

import { format as formatDate, isValid, parse } from 'date-fns';

import Header from './Header';

const DatePickerContainer = styled.div`
  z-index: 1;
  &.DatePickerContainer {
    ${PopperContainer}
  }
`;

type DatePickerComponentProps = {
  className: string;
  date?: Date;
  disabledDays?:
    | Date
    | RangeModifier
    | BeforeModifier
    | AfterModifier
    | BeforeAfterModifier
    | DaysOfWeekModifier
    | FunctionModifier
    | Modifier[];
  disabled?: boolean;
  dir: 'ltr' | 'rtl';
  format: string;
  initialMonth: Date;
  label: string;
  labels: {
    previousYear: string;
    nextYear: string;
    previousMonth: string;
    nextMonth: string;
  };
  placeholder: string;
  locale: string;
  placement: 'top' | 'bottom' | 'right' | 'left';
  todayButton: string;
  tooltip: string;
  showOverlay: boolean;
  onBlur: () => any;
  onChange: (event) => any;
};

/** TODO: Handle 'format' case sensitive */
const DatePicker: FunctionComponent<DatePickerComponentProps> = ({
  date,
  disabledDays,
  disabled,
  dir = 'ltr',
  format = 'MM-dd-yyyy',
  initialMonth,
  label,
  labels = {
    previousYear: 'Previous Year',
    nextYear: 'Next Year',
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
  },
  placeholder = format.toUpperCase(),
  // multiple = false,
  locale = 'en-US',
  placement,
  todayButton,
  tooltip,
  showOverlay,
  onBlur,
  onChange,
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || 'bottom',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'right', 'left'],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  const [selectedDate, setSelectedDate] = useState(date);
  const [navigationDate, setNavigationDate] = useState(
    initialMonth || date || new Date()
  );
  const getLocale: Locale = require(`date-fns/locale/${locale}/index.js`);
  const [showPicker, setShowPicker] = useState(showOverlay || false);

  const [inputValue, setInputValue] = useState(
    date ? formatDate(date, format, { locale: getLocale }) : null
  );

  const refContainer = useRef(null);
  const refPicker = useRef(null);
  const refIcon = useRef(null);

  function handleEventClickOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowPicker(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const handleHeaderChange = (date) => {
    setNavigationDate(date);
  };

  const handleDayClick = (date: Date, modifiers: DayModifiers, e) => {
    if (modifiers.disabled) {
      return;
    }
    setSelectedDate(modifiers.selected ? undefined : date);
    setNavigationDate(modifiers.selected ? undefined : date);
    setInputValue(
      modifiers.selected
        ? undefined
        : formatDate(date, format, { locale: getLocale })
    );
    setShowPicker(false);
    if (onChange) {
      onChange({ target: { value: date } });
    }
  };

  /** DayPicker adjustment */
  addLoopNavigation(
    refPicker,
    '.DayPicker-TodayButton',
    '.DayPicker-Caption--prevYear',
    '.DayPicker-Day:not(.DayPicker-Day--outside)'
  );

  // addLoopNavigation(
  //   refPicker,
  //   '.DayPicker-Caption--prevYear',
  //   '.DayPicker-Caption--prevMonth',
  //   '.DayPicker-TodayButton'
  // );

  removeTabIndex(refPicker, '.DayPicker-wrapper');

  /** `now` to handle locale dictionary (months, weekdaysLong, weekdaysShort attributes) */
  const now = new Date();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    let newDate = parse(newValue, format, new Date(), { locale: getLocale });
    // If year not typed, take the current year
    if (!isValid(newDate)) {
      // regex: remove -yyyy, yyyy-, /yyyy, yyyy/, .yyyy, ...
      newDate = parse(
        newValue,
        format.replace(/[\W]?y{4}[\W]?/, ''),
        new Date(),
        {
          locale: getLocale,
        }
      );
    }

    if (isValid(newDate)) {
      setSelectedDate(newDate);
      setNavigationDate(newDate);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleClickIcon = () => {
    setShowPicker(!showPicker);
  };

  const iconProps = {
    className: classNames({
      active: showPicker,
    }),
    iconName: 'calendar',
    ref: refIcon,
    tabIndex: 0,
    onClick: () => handleClickIcon(),
    onKeyDown: (e) => handleKeyDownIcon(e, showPicker, refPicker),
  };

  handleEventClickOutside(refContainer);
  return (
    <div
      className={'tk-DatePicker-container'}
      onBlur={onBlur}
      ref={refContainer}
    >
      <div className="tk-DatePicker-input" ref={setReferenceElement}>
        <TextField
          aria-autocomplete="none"
          aria-describedby={tooltip}
          aria-label={label}
          aria-placeholder={placeholder}
          aria-readonly={disabled}
          aria-multiline="false"
          // aria-activedescendent=
          // aria-required=
          className={classNames({
            active: showPicker,
          })}
          disabled={disabled}
          value={inputValue}
          placeholder={placeholder}
          label={label}
          tooltip={tooltip}
          onChange={handleInputChange}
          onFocus={() => setShowPicker(true)}
          onKeyDown={(e) => handleKeyDownInput(e, setShowPicker)}
          iconProps={iconProps}
        ></TextField>
      </div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showPicker}
        timeout={200}
        classNames="DatePickerContainer"
        appear
      >
        <DatePickerContainer
          // id={id}
          role="tooltip"
          ref={setPopperElement}
          style={{ ...styles.popper, direction: dir }}
          {...attributes.popper}
        >
          <DayPicker
            aria-labelledby={label}
            ref={refPicker}
            selectedDays={selectedDate}
            disabledDays={disabledDays}
            dir={dir}
            todayButton={todayButton}
            month={navigationDate}
            captionElement={({ date }) => (
              <Header
                date={date}
                dir={dir}
                months={getMonths(now, getLocale)}
                onChange={handleHeaderChange}
                labels={labels}
              />
            )}
            onKeyDown={(e) => handleKeyDownPicker(e, setShowPicker, refIcon)}
            onDayKeyDown={(day, modifiers, e) =>
              handleKeyDownCell(e, setNavigationDate)
            }
            onDayClick={handleDayClick}
            onTodayButtonClick={handleDayClick}
            locale={locale}
            months={getMonths(now, getLocale)}
            weekdaysLong={getWeekdaysLong(now, getLocale)}
            weekdaysShort={getWeekdaysShort(now, getLocale)}
            fixedWeeks
          ></DayPicker>
        </DatePickerContainer>
      </CSSTransition>
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  disabled: PropTypes.bool,
  disabledDays: PropTypes.oneOfType(modifierPropTypes),
  initialMonth: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  labels: PropTypes.exact({
    previousYear: PropTypes.string,
    previousMonth: PropTypes.string,
    nextYear: PropTypes.string,
    nextMonth: PropTypes.string,
  }),
  locale: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  todayButton: PropTypes.string,
  tooltip: PropTypes.string,
  showOverlay: PropTypes.bool,
};

export default DatePicker;
