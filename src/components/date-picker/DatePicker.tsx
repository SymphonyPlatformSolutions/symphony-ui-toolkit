import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component, createRef } from 'react';
import classNames from 'classnames';

import { createPopper } from '@popperjs/core';

import { DayModifiers, Modifier } from './model/Modifiers';

import DayPicker from './sub-component/DayPicker';

import TextField from '../input/TextField';
import Icon from '../icon/Icon';

import styled from 'styled-components';

import { PopperContainer } from '../common/popperUtils';

import { matchDay, matchDayMax, matchDayMin } from './utils/matchDayUtils';
import { Direction } from './model/Direction';

import { cancelEvent, Keys } from '../common/keyUtils';

import { modifierPropTypes } from './utils/propTypesUtils';

import { autocompleteDate } from './utils/dateUtils';

import { format as formatDate, isValid } from 'date-fns';

import { ErrorMessages, HasValidationProps } from '../validation/interfaces';
import { HasTooltipProps } from '../tooltip/interfaces';
import { InputBaseProps, InputBasePropTypes } from '../input/TextComponent';

// z-index: 4; equivalent to $z-index-tooltip
const DatePickerContainer = styled.div`
  z-index: 4;
  &.DatePickerContainer {
    ${PopperContainer}
  }
`;

type DatePickerComponentProps = {
  id?: string;
  className?: string;
  date?: Date;
  disabledDays?: Modifier | Modifier[];
  disabled?: boolean;
  dir?: Direction;
  format?: string;
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
  placeholder?: string;
  locale?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  todayButton?: string;
  showOverlay?: boolean;
  showRequired?: boolean;
} & HasTooltipProps & HasValidationProps<Date>;

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
  DatePickerComponentProps & InputBaseProps,
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
    onChange: PropTypes.func.isRequired,
    onValidationChanged: PropTypes.func,
    placeholder: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    todayButton: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipCloseLabel: PropTypes.string,
    showRequired: PropTypes.bool,
    showOverlay: PropTypes.bool,
    ...InputBasePropTypes
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
  }

  componentDidMount() {
    const {onInit, date} = this.props;
    document.addEventListener('mousedown', this.handleClickOutside);
    if (this.props.showOverlay) {
      this.setState({ showPicker: true });
    }
    if(onInit && date){
      onInit(this.computeDate(date));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showPicker && !prevState.showPicker) {
      this.mountDayPickerInstance();
    } else if (!this.state.showPicker && prevState.showPicker) {
      this.unmountDayPickerInstance();
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
    const { refContainer, showPicker } = this.state;
    if (refContainer && !refContainer.contains(event.target)) {
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

  private setRefContainer(node) {
    this.setState({ refContainer: node });
  }
  private setPopperElement(node) {
    this.setState({ popperElement: node });
  }
  private setReferenceElement(node) {
    this.setState({ referenceElement: node });
  }

  mountDayPickerInstance() {
    const { placement } = this.props;
    const { popperElement, referenceElement } = this.state;
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
  }

  unmountDayPickerInstance() {
    if (this.dayPickerInstance) {
      this.dayPickerInstance.destroy();
      Reflect.deleteProperty(this, 'dayPickerInstance');
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
    this.setState({ inputValue: newValue });

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
      cancelEvent(e);
      this.handleOnClose();
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

  render() {
    const {
      id,
      date,
      disabledDays,
      disabled,
      dir,
      format,
      highlightedDays,
      label,
      labels,
      name,
      placeholder,
      todayButton,
      tooltip,
      tooltipCloseLabel,
      showRequired,
      onCopy,
      onCut,
      onDrag,
    } = this.props;
    const {
      inputValue,
      locale,
      navigationDate,
      showPicker,
      refIcon,
    } = this.state;
    const textfieldProps = {
      id,
      disabled,
      label,
      name,
      placeholder: placeholder || format.toUpperCase(),
      tooltip,
      tooltipCloseLabel,
      showRequired,
      onCopy,
      onCut,
      onDrag,
    };

    return (
      <div className={'tk-datepicker'} ref={this.setRefContainer}>
        <div ref={this.setReferenceElement}>
          <TextField
            {...textfieldProps}
            className={classNames({
              active: showPicker,
            })}
            iconElement={
              <Icon
                className={classNames({
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
        <DatePickerContainer
          role="tooltip"
          ref={this.setPopperElement}
          className="DatePickerContainer"
          style={{
            display: showPicker ? 'block' : 'none',
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
            onDayClick={this.handleDayClick}
            onClose={this.handleOnClose}
          />
        </DatePickerContainer>
      </div>
    );
  }
}
export default DatePicker;
