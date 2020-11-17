import PropTypes from 'prop-types';
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import classNames from 'classnames';

import { usePopper } from 'react-popper';

import { CSSTransition } from 'react-transition-group';

import { DayModifiers, Modifier } from './model/Modifiers';

import DayPicker from './sub-component/DayPicker';
import Validation from '../validation/Validation';
// import { Validators } from '../../core/validators/validators';

import TextField from '../input/TextField';
import Icon from '../icon/Icon';

import styled from 'styled-components';

import { PopperContainer, popperProps } from '../common/popperUtils';

import { matchDay } from './utils/matchDayUtils';

import { cancelEvent, Keys } from './utils/keyUtils';

import { modifierPropTypes } from './utils/propTypesUtils';

import { format as formatDate, isValid, parse } from 'date-fns';

const DatePickerContainer = styled.div`
  z-index: 2;
  &.DatePickerContainer {
    ${PopperContainer}
  }
`;

type DatePickerComponentProps = {
  className?: string;
  date?: Date;
  // value?: string;
  disabledDays?: Modifier | Modifier[];
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  format?: string;
  initialMonth?: Date;
  label?: string;
  labels?: {
    previousYear: string;
    nextYear: string;
    previousMonth: string;
    nextMonth: string;
  };
  name?: string;
  placeholder?: string;
  locale?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  todayButton?: string;
  tooltip?: string;
  tooltipCloseLabel?: string;
  showOverlay?: boolean;
  onBlur?: (event) => any;
  onChange: (event) => any;
  // onDateChange?: (event) => any;
};

const DatePicker: FunctionComponent<DatePickerComponentProps> = ({
  date,
  disabledDays,
  disabled,
  dir = 'ltr',
  format = 'MM-dd-yyyy', // format is case sensitive, see https://date-fns.org/v2.16.1/docs/format
  initialMonth,
  label,
  labels = {
    previousYear: 'Previous Year',
    nextYear: 'Next Year',
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
  },
  name,
  placeholder,
  locale,
  placement = 'bottom',
  todayButton = 'Today',
  tooltip,
  tooltipCloseLabel = 'Got it',
  showOverlay,
  onBlur,
  onChange,
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: `${placement}-start` as
      | 'bottom-start'
      | 'top-start'
      | 'right-start'
      | 'left-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start', 'right-start', 'left-start'],
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

  const computeDate = (date) => {
    // const date = new Date(value);
    if (isValid(date) && !matchDay(date, disabledDays)) {
      return date;
    } else {
      return null;
    }
  };

  // const [selectedDate, setSelectedDate] = useState(computeDate(date));
  const [navigationDate, setNavigationDate] = useState(
    initialMonth || computeDate(date) || new Date()
  );

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const getLocale: Locale = useMemo(
    () => require(`date-fns/locale/${locale || 'en-US'}/index.js`),
    [locale]
  );

  const [showPicker, setShowPicker] = useState(showOverlay || false);

  const [inputValue, setInputValue] = useState(
    // computeDate(value) ? value : null
    computeDate(date) ? formatDate(date, format, { locale: getLocale }) : null
  );

  const refContainer = useRef(null);
  const refPicker = useRef(null);
  const refIcon = useRef(null);

  // useEffect(() => {
  //   // computeDate(date) ? formatDate(date, format, { locale: getLocale }) :

  //   if (date === null) {
  //     setInputValue('');
  //   }
  //   // setInputValue((inputValue) =>
  //   //   computeDate(date)
  //   //     ? formatDate(date, format, { locale: getLocale })
  //   //     : inputValue
  //   // );
  // }, [date]);

  function handleEventClickOutside(ref, date) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowPicker(false);
          if (onBlur) {
            onBlur({
              target: {
                value: date,
              },
            });
          }
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, date]);
  }

  const handleDayClick = async (date: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const newDate = modifiers.selected ? undefined : date;
    // setSelectedDate(newDate);
    setNavigationDate(newDate);

    const inputValue = formatDate(date, format, { locale: getLocale });
    setInputValue(modifiers.selected ? undefined : inputValue);
    setShowPicker(false);
    if (onChange) {
      onChange({
        target: { value: newDate },
      });
    }
    // if (onChange) {
    //   onChange({
    //     target: { value: modifiers.selected ? undefined : inputValue },
    //   });
    // }
    // if (onDateChange) {
    //   onDateChange({
    //     target: { value: newDate },
    //   });
    // }
  };

  const handleInputChange = (e) => {
    // if (onChange) {
    //   onChange(e);
    // }
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

    console.log('isValid(newDate)', isValid(newDate));
    if (isValid(newDate)) {
      setNavigationDate(newDate);
    }
    // setSelectedDate(computeDate(newDate));
    if (onChange) {
      // if (computeDate(newDate)) {
      onChange({ target: { value: computeDate(newDate) } });
      // }
    }
    // if (onDateChange) {
    //   onDateChange({ target: { value: computeDate(newDate) } });
    // }
  };

  const handleKeyDownIcon = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case Keys.TAB:
        if (
          !e.shiftKey &&
          showPicker &&
          refPicker.current &&
          refPicker.current.dayPicker
        ) {
          cancelEvent(e);
          const elCell = refPicker.current.dayPicker.querySelector(
            '.tk-daypicker-day[tabindex="0"]'
          );
          if (elCell) {
            elCell.focus();
          }
        }
        break;
      case Keys.ENTER:
        cancelEvent(e);
        handleClickIcon();
        break;
      case Keys.ESC:
        cancelEvent(e);
        handleOnClose();
        break;
      default:
        break;
    }
  };

  const handleKeyDownInput = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case Keys.ENTER:
        cancelEvent(e);
        setShowPicker((showPicker) => !showPicker);
        break;
      case Keys.ESC:
        cancelEvent(e);
        setShowPicker(false);
        break;
      default:
        break;
    }
  };

  const handleClickIcon = () => {
    setShowPicker(!showPicker);
  };

  const handleOnClose = () => {
    setShowPicker(false);
    if (refIcon.current) {
      refIcon.current.focus();
    }
  };

  const textfieldProps = {
    disabled,
    label,
    name,
    placeholder: placeholder || format.toUpperCase(),
    tooltip,
  };

  handleEventClickOutside(refContainer, date);

  return (
    <div className={'tk-datepicker'} ref={refContainer}>
      <div ref={setReferenceElement}>
        {/* <Validation
          onValidationChanged={fonctionTest}
          errorMessage={'dateFormat error'}
          validator={() =>
            Promise.resolve(selectedDate ? null : { dateFormat: true })
          }
        > */}
        <TextField
          {...textfieldProps}
          className={classNames({
            active: showPicker,
          })}
          tooltipCloseLabel={tooltipCloseLabel}
          iconElement={
            <Icon
              className={classNames({
                active: showPicker,
              })}
              disabled={disabled}
              iconName={'calendar'}
              forwardRef={refIcon}
              tabIndex={0}
              onClick={() => handleClickIcon()}
              onKeyDown={handleKeyDownIcon}
            ></Icon>
          }
          value={inputValue || ''}
          // value={value}
          onChange={handleInputChange}
          onFocus={() => setShowPicker(true)}
          onKeyDown={handleKeyDownInput}
        ></TextField>
        {/* </Validation> */}
      </div>
      <CSSTransition
        {...popperProps}
        in={showPicker}
        classNames="DatePickerContainer"
      >
        <DatePickerContainer
          role="tooltip"
          ref={setPopperElement}
          style={{ ...styles.popper }}
          {...attributes.popper}
        >
          <DayPicker
            ref={refPicker}
            aria-labelledby={label}
            selectedDays={date}
            disabledDays={disabledDays}
            dir={dir}
            locale={getLocale}
            month={navigationDate}
            todayButton={todayButton}
            labels={labels}
            onDayClick={handleDayClick}
            onClose={handleOnClose}
          />
        </DatePickerContainer>
      </CSSTransition>
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  // value: PropTypes.string.isRequired,
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
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  todayButton: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  showOverlay: PropTypes.bool,
};

export default DatePicker;
