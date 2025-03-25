import * as PropTypes from 'prop-types';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { Component, createRef } from 'react';
import { clsx } from 'clsx';

import { createPopper } from '@popperjs/core';

import { DayModifiers, Modifier } from './model/Modifiers';

import DayPicker from './sub-component/DayPicker';

import TextField from '../input/TextField';
import Icon from '../icon/FontIcon';

import { matchDay, matchDayMax, matchDayMin } from './utils/matchDayUtils';
import { Direction } from './model/Direction';

import { cancelEvent, EventListener, getScrollParent, Keys } from '../common/eventUtils';

import { modifierPropTypes } from './utils/propTypesUtils';

import { DAYS_VISIBLE_SELECTOR } from './utils/dateConstants';

import { autocompleteDate } from './utils/dateUtils';

import { format as formatDate, isValid } from 'date-fns';

import { ErrorMessages, HasValidationProps } from '../validation/interfaces';
import { HasTooltipProps } from '../tooltip/interfaces';
import { HTMLInputProps, MenuPortalProps } from '../dropdown/interfaces';

type DatePickerComponentProps = {
  id?: string;
  className?: string;
  date?: Date;
  disabledDays?: Modifier | Modifier[];
  disabled?: boolean;
  dir?: Direction;
  format?: string;
  helperText?: string;
  highlightedDays?: Modifier | Modifier[];
  initialMonth?: Date;
  label?: string;
  labels?: {
    previousYear: string;
    nextYear: string;
    previousMonth: string;
    nextMonth: string;
  };
  name?: string;
  /** Handle focus event */
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  /** Handle calendar open event */
  onCalendarOpen?: (datePickerID: string) => void;
  /** Handle calendar close event */
  onCalendarClose?: (datePickerID: string) => void;
  placeholder?: string;
  locale?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  todayButton?: string;
  ariaLabel?: string;
  /* The picker is open on render (not supported with menuPortalTarget) */
  showOverlay?: boolean;
  showRequired?: boolean;
  shouldResetInvalidDate?: boolean;
} & HTMLInputProps &
  HasTooltipProps &
  HasValidationProps<Date> &
  MenuPortalProps;

type DatePickerComponentState = {
  locale: Locale;
  navigationDate: Date;
  inputValue: string;
  showPicker: boolean;
  refIcon: any;
  refContainer: any;
  popperElement: any;
  referenceElement: any;
};

class DatePicker extends Component<
  DatePickerComponentProps,
  DatePickerComponentState
> {
  static defaultProps = {
    dir: 'ltr',
    format: 'MM-dd-yyyy', // format is case sensitive, see https://date-fns.org/v2.16.1/docs/format
    labels: {
      previousYear: 'Previous Year',
      nextYear: 'Next Year',
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    placement: 'bottom',
    todayButton: 'Today',
    tooltipCloseLabel: 'Got it',
  };

  static propTypes = {
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    format: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    disabledDays: PropTypes.oneOfType(modifierPropTypes),
    highlightedDays: PropTypes.oneOfType(modifierPropTypes),
    initialMonth: PropTypes.instanceOf(Date),
    label: PropTypes.string,
    helperText: PropTypes.string,
    labels: PropTypes.exact({
      previousYear: PropTypes.string,
      previousMonth: PropTypes.string,
      nextYear: PropTypes.string,
      nextMonth: PropTypes.string,
    }),
    locale: PropTypes.string,
    name: PropTypes.string,
    onInit: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onValidationChanged: PropTypes.func,
    placeholder: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    todayButton: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipCloseLabel: PropTypes.string,
    showRequired: PropTypes.bool,
    showOverlay: PropTypes.bool
  };
  refPicker = null;
  dayPickerInstance = null;

  constructor(props) {
    super(props);

    const { date, format, initialMonth, locale } = props;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const getLocale: Locale = require(`date-fns/locale/${
      locale || 'en-US'
    }/index.js`);

    this.state = {
      navigationDate: initialMonth || this.computeDate(date) || new Date(),
      locale: getLocale,
      inputValue: this.computeDate(date)
        ? formatDate(date, format, { locale: getLocale })
        : null,
      showPicker: false,
      refIcon: createRef(),
      refContainer: null,
      popperElement: null,
      referenceElement: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleKeyDownIcon = this.handleKeyDownIcon.bind(this);
    this.handleKeyDownInput = this.handleKeyDownInput.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);

    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.setRefContainer = this.setRefContainer.bind(this);
    this.setPopperElement = this.setPopperElement.bind(this);
    this.setReferenceElement = this.setReferenceElement.bind(this);

    this.mountDayPickerInstance = this.mountDayPickerInstance.bind(this);
    this.unmountDayPickerInstance = this.unmountDayPickerInstance.bind(this);

    this.handleScrollParent = this.handleScrollParent.bind(this);
    this.handleKeydownScrollParent = this.handleKeydownScrollParent.bind(this);
  }

  componentDidMount() {
    const { onInit, date } = this.props;
    document.addEventListener('mousedown', this.handleClickOutside);
    if (this.props.showOverlay && !this.props.menuPortalTarget) { // doesn't open if inside a portal
      this.setState({ showPicker: true });
    }
    if (onInit && date) {
      onInit(this.computeDate(date));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showPicker && !prevState.showPicker) {
      this.mountDayPickerInstance();
      this.handleFocusToSelectedDate();
      this.props.onCalendarOpen && this.props.onCalendarOpen(this.props.id);
    } else if (!this.state.showPicker && prevState.showPicker) {
      this.unmountDayPickerInstance();
      this.props.onCalendarClose && this.props.onCalendarClose(this.props.id);
      if(this.props.shouldResetInvalidDate) {
        const validDate = this.props.date && this.props.date;
        this.setState({
          navigationDate: validDate || new Date(),
          inputValue: this.computeDate(validDate)
            ? formatDate(validDate, this.props.format, {
              locale: this.state.locale,
            })
            : null,
        });
      }
    }
    // update dynamically if locale change
    if (this.props.locale !== prevProps.locale) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const getLocale = require(`date-fns/locale/${
        this.props.locale || 'en-US'
      }/index.js`);
      this.setState({
        locale: getLocale,
        inputValue: this.computeDate(this.props.date)
          ? formatDate(this.props.date, this.props.format, {
            locale: getLocale,
          })
          : null,
      });
    }
    // update dynamically if date change
    if (this.props.date !== prevProps.date && !this.props.date) {
      this.setState({
        navigationDate: new Date(),
        inputValue: null,
      });
    }
  }

  /**
   * Reset to default value and reset errors
   */
  public reset(date: Date): void {
    const { format, onChange, onValidationChanged } = this.props;
    const { locale } = this.state;
    if (onValidationChanged) {
      onValidationChanged(null);
    }
    if (onChange) {
      onChange({ target: { value: date } });
    }

    this.setState({
      inputValue: this.computeDate(date)
        ? formatDate(date, format, { locale: locale })
        : null,
    });
  }

  private handleClickOutside(event) {
    const { popperElement, refContainer, showPicker } = this.state;
    if (
      refContainer &&
      !refContainer.contains(event.target) &&
      popperElement &&
      !popperElement.contains(event.target)
    ) {
      const { date, onBlur } = this.props;
      if (showPicker) {
        this.setState({ showPicker: false });
        if (onBlur) {
          onBlur({
            target: {
              value: date,
            },
          });
        }
      }
    }
  }

  private setRefContainer(node: HTMLDivElement) {
    this.setState({ refContainer: node });
  }
  private setPopperElement(node: HTMLDivElement) {
    this.setState({ popperElement: node });
  }
  private setReferenceElement(node: HTMLDivElement) {
    this.setState({ referenceElement: node });
  }

  mountDayPickerInstance() {
    const { placement, menuShouldBlockScroll } = this.props;
    const { popperElement, referenceElement, refContainer } = this.state;
    this.dayPickerInstance = createPopper(referenceElement, popperElement, {
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


    if (menuShouldBlockScroll) {
      const scrollContainer = getScrollParent(refContainer);
      if (scrollContainer) {
        const wheelEvent = EventListener.onwheel in document.createElement('div') ? EventListener.wheel : EventListener.mousewheel;

        scrollContainer.addEventListener(EventListener.DOMMouseScroll, this.handleScrollParent); // older Firefox
        scrollContainer.addEventListener(EventListener.touchmove, this.handleScrollParent); // mobile
        scrollContainer.addEventListener(wheelEvent, this.handleScrollParent); // modern desktop
        scrollContainer.addEventListener(EventListener.keydown, this.handleKeydownScrollParent);
      }
    }
  }

  unmountDayPickerInstance() {
    const { menuShouldBlockScroll } = this.props;
    const { refContainer } = this.state;

    if (this.dayPickerInstance) {
      this.dayPickerInstance.destroy();
      Reflect.deleteProperty(this, 'dayPickerInstance');
      if (menuShouldBlockScroll) {
        const scrollContainer = getScrollParent(refContainer);
        if (scrollContainer) {
          const wheelEvent = EventListener.onwheel in document.createElement('div') ? EventListener.wheel : EventListener.mousewheel;

          scrollContainer.removeEventListener(EventListener.DOMMouseScroll, this.handleScrollParent);
          scrollContainer.removeEventListener(EventListener.touchmove, this.handleScrollParent);
          scrollContainer.removeEventListener(wheelEvent, this.handleScrollParent);
          scrollContainer.removeEventListener(EventListener.keydown, this.handleKeydownScrollParent);
        }
      }
    }
  }

  private computeDate(date): Date {
    const { disabledDays } = this.props;
    if (date && isValid(date) && !matchDay(date, disabledDays)) {
      return date;
    } else {
      return null;
    }
  }

  private computeError(date): ErrorMessages {
    const { disabledDays } = this.props;

    if (!date) {
      return null;
    }

    if (!isValid(date)) {
      return { format: 'The date format is incorrect' };
    } else if (matchDayMax(date, disabledDays)) {
      return { maxDate: 'Date too far in the future' };
    } else if (matchDayMin(date, disabledDays)) {
      return { minDate: 'Date too far in the past' };
    } else if (matchDay(date, disabledDays)) {
      return { disabledDate: 'This date is not available' };
    } else {
      return null;
    }
  }

  private handleFocusToSelectedDate() {
    const selectedDate = this.state.navigationDate.getDate();
    if (this.refPicker && this.refPicker.dayPicker) {
      const dayNodes = this.refPicker.dayPicker.querySelectorAll(
        DAYS_VISIBLE_SELECTOR
      );
      dayNodes[selectedDate - 1].focus();
    }
  }

  private handleScrollParent(e) {
    if (this.state.showPicker) {
      cancelEvent(e);
    }
  }

  private handleKeydownScrollParent(e) {
    const scrollingKeys = [Keys.PAGE_UP, Keys.PAGE_DOWN, Keys.HOME, Keys.END, Keys.ARROW_UP, Keys.ARROW_DOWN];
    if (this.state.showPicker) {
      if (scrollingKeys.includes(e.key)) {
        cancelEvent(e);
      }
    }
  }

  private async handleDayClick(date: Date, modifiers: DayModifiers) {
    const { format, onChange, onValidationChanged } = this.props;
    const { locale } = this.state;
    if (modifiers.disabled) {
      return;
    }
    const newDate = modifiers.selected ? undefined : date;
    const inputValue = formatDate(date, format, { locale: locale });
    this.setState({
      navigationDate: newDate,
      inputValue: modifiers.selected ? undefined : inputValue,
      showPicker: false,
    });

    if (onValidationChanged) {
      onValidationChanged(this.computeError(newDate));
    }
    if (onChange) {
      onChange({
        target: { value: newDate },
      });
    }
  }

  private handleInputChange(e): void {
    const { format, onChange, onValidationChanged } = this.props;
    const { locale } = this.state;

    const newValue = e.target.value;
    this.setState({ inputValue: newValue, showPicker: true });

    const newDate = autocompleteDate(newValue, format, locale);

    if (newDate && isValid(newDate)) {
      this.setState({ navigationDate: newDate });
    }
    if (onValidationChanged) {
      onValidationChanged(this.computeError(newDate));
    }
    if (onChange) {
      onChange({ target: { value: this.computeDate(newDate) } });
    }
  }

  private handleKeyDownIcon(e: React.KeyboardEvent): void {
    const { showPicker } = this.state;
    switch (e.key) {
    case Keys.TAB:
      if (!e.shiftKey && showPicker && this.refPicker) {
        cancelEvent(e);
        const elCell = this.refPicker.dayPicker.querySelector(
          '.tk-daypicker-day[tabindex="0"]'
        );
        if (elCell) {
          elCell.focus();
        }
      }
      break;
    case Keys.SPACE:
    case Keys.SPACEBAR:
    case Keys.ENTER:
      cancelEvent(e);
      this.handleClickIcon();
      break;
    case Keys.ESC:
      if (showPicker) {
        cancelEvent(e);
        this.handleOnClose();
      }
      break;
    default:
      break;
    }
  }

  private handleKeyDownInput(e: React.KeyboardEvent): void {
    const { showPicker } = this.state;
    switch (e.key) {
    case Keys.ENTER:
      cancelEvent(e);
      this.setState({ showPicker: !showPicker });
      break;
    case Keys.ESC:
      cancelEvent(e);
      this.setState({ showPicker: false });
      break;
    case Keys.TAB:
      this.setState({ showPicker: false });
      break;
    default:
      break;
    }
  }

  private handleClickIcon() {
    const { showPicker } = this.state;
    this.setState({ showPicker: !showPicker });
  }

  private handleOnClose() {
    const { refIcon } = this.state;
    this.setState({ showPicker: false });
    if (refIcon.current) {
      refIcon.current.focus();
    }
  }

  renderCalendar() {
    const {
      date,
      disabledDays,
      dir,
      highlightedDays,
      label,
      labels,
      todayButton,
      ariaLabel,
      menuPortalTarget,
      menuPortalStyles,
    } = this.props;
    const { locale, navigationDate, showPicker } = this.state;
    const portalStyles = menuPortalTarget ? menuPortalStyles : undefined;

    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        ref={this.setPopperElement}
        className="DatePickerContainer"
        style={{
          display: showPicker ? 'block' : 'none',
          ...portalStyles,
        }}
      >
        <DayPicker
          ref={(el) => (this.refPicker = el)}
          aria-labelledby={label}
          selectedDays={this.computeDate(date)}
          disabledDays={disabledDays}
          dir={dir}
          highlightedDays={highlightedDays}
          locale={locale}
          month={navigationDate}
          todayButton={todayButton}
          labels={labels}
          dataTestId={`${this.props.id}_DAYPICKER`}
          onDayClick={this.handleDayClick}
          onClose={this.handleOnClose}
        />
      </div>
    );
  }

  render() {
    const {
      id,
      disabled,
      format,
      label,
      menuPortalTarget,
      name,
      placeholder,
      tooltip,
      tooltipCloseLabel,
      showRequired,
      helperText,
      onCopy,
      onCut,
      onDrag,
      onFocus,
    } = this.props;
    const { inputValue, showPicker, refIcon } = this.state;
    const textfieldProps = {
      id,
      disabled,
      helperText,
      label,
      name,
      placeholder: placeholder || format.toUpperCase(),
      tooltip,
      tooltipCloseLabel,
      showRequired,
      onCopy,
      onCut,
      onDrag,
      onFocus,
    };

    return (
      <div className={'tk-datepicker'} ref={this.setRefContainer}>
        <div ref={this.setReferenceElement}>
          <TextField
            {...textfieldProps}
            className={clsx({
              active: showPicker,
            })}
            rightDecorators={
              <Icon
                className={clsx('tk-input__right-decorators__clickable', {
                  active: showPicker,
                })}
                disabled={disabled}
                iconName={'calendar'}
                forwardRef={refIcon}
                tabIndex={0}
                onClick={() => this.handleClickIcon()}
                onKeyDown={this.handleKeyDownIcon}
              ></Icon>
            }
            value={inputValue || ''}
            onChange={this.handleInputChange}
            onClick={() => this.setState({ showPicker: true })}
            onKeyDown={this.handleKeyDownInput}
          ></TextField>
        </div>
        {menuPortalTarget
          ? createPortal(
            this.renderCalendar(),
            menuPortalTarget
          )
          : this.renderCalendar()
        }
      </div>
    );
  }
}
export default DatePicker;
