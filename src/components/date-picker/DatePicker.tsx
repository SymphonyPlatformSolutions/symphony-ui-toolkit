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

//TODO: move import to tk-styles???
import 'react-day-picker/lib/style.css';

import TextField from '../input/TextField';

import styled from 'styled-components';

import { PopperContainer } from '../common/popperUtils';

import {
  getMonths,
  getWeekdaysLong,
  getWeekdaysShort,
} from './utils/dateFnsUtils';

import {
  handleKeyDownIcon,
  handleKeyDownInput,
  handleKeyDownPicker,
  handleKeyDownCell,
} from './utils/keyPressUtils';
import { addLoopNavigation } from './utils/datePickerUtils';

import { format as formatDate, isSameDay, isValid } from 'date-fns';

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
  placeholder: string;
  // multiple: boolean,
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

  /** Uncomment when multiple available */
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

  /** to handle locale dictionary (months, weekdaysLong, weekdaysShort attributes) */
  const now = new Date();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    const newDate = new Date(newValue);
    if (isValid(newDate)) {
      setSelectedDate(newDate);
      setNavigationDate(newDate);
      // TODO: handle when year is not specified
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
              />
            )}
            onKeyDown={(e) => handleKeyDownPicker(e, setShowPicker, refIcon)}
            onDayKeyDown={(day, modifiers, e) =>
              handleKeyDownCell(e, setNavigationDate)
            }
            // onDayClick={multiple ? handleMultipleDayClick : handleDayClick}
            onDayClick={handleDayClick}
            onTodayButtonClick={handleDayClick}
            locale={locale}
            months={getMonths(now, getLocale)}
            weekdaysLong={getWeekdaysLong(now, getLocale)}
            weekdaysShort={getWeekdaysShort(now, getLocale)}
            // labels={getLabels(locale)} // TODO Previous/Next Month, Previous/Next Year...
            fixedWeeks
          ></DayPicker>
        </DatePickerContainer>
      </CSSTransition>
    </div>
  );
};

//TODO: SIMPLIFY?????
const modifierPropTypes = [
  PropTypes.instanceOf(Date),
  PropTypes.exact({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(PropTypes.exact ({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  })),
  PropTypes.exact({
    before: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(PropTypes.exact ({
    before: PropTypes.instanceOf(Date),
  })),
  PropTypes.exact({
    after: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(PropTypes.exact ({
    after: PropTypes.instanceOf(Date),
  })),
  PropTypes.exact({
    after: PropTypes.instanceOf(Date),
    before: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(PropTypes.exact ({
    after: PropTypes.instanceOf(Date),
    before: PropTypes.instanceOf(Date),
  })),
  PropTypes.exact({
    daysOfWeek: PropTypes.arrayOf(PropTypes.number),
  }),
  PropTypes.func,
]

DatePicker.propTypes = {
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  disabled: PropTypes.bool,
  disabledDays: PropTypes.oneOfType(modifierPropTypes),
  initialMonth: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  locale: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  // multiple: PropTypes.bool,
  todayButton: PropTypes.string,
  tooltip: PropTypes.string,
  showOverlay: PropTypes.bool,
};

export default DatePicker;
