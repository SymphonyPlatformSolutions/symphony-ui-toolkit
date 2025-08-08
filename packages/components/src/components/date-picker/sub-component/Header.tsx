import { FunctionComponent } from 'react';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { clsx } from 'clsx';
import { TkIcon } from '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';

import FontIcon from '../../icon/FontIcon';
import { Tooltip } from '../../tooltip';
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
  onVisible?: (value) => any;
  onClose?: () => any;
  parentRef?: any;
  showTooltip?: boolean;
  currentID?: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  date,
  dir,
  labels,
  months,
  onChange,
  onVisible,
  onClose,
  parentRef,
  showTooltip,
  currentID,
}) => {
  const changeYear = (amount: number) => {
    onChange(addYears(date, amount));
  };

  const changeMonth = (amount: number) => {
    onChange(addMonths(date, amount));
  };

  const handleOpen = (event: React.ChangeEvent<any>, id: string) => {
    if (
      event.nativeEvent.type === 'focus' &&
      !(event.target as Element).classList.contains('focus-visible')
    ) {
      // If the event target has not focus-visible then it is a focus by programmatically
      return;
    }
    onVisible(id);
  };

  const handleClose = () => {
    onClose();
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

  const tooltipButton = (
    buttonID: string,
    label: string,
    className: string,
    iconName: TkIcon,
    onChangeNumber: number,
    isYearButton: boolean
  ) => {
    return (
      <Tooltip
        id={buttonID}
        description={label}
        visible={showTooltip && currentID === buttonID}
        type="tooltip"
        placement={
          buttonID === 'PREVIOUS_YEAR' || buttonID === 'PREVIOUS_MONTH'
            ? 'top-start'
            : 'top'
        }
      >
        <button
          aria-label={label}
          className={clsx(className, 'tk-daypicker-header--button')}
          onClick={() =>
            isYearButton
              ? changeYear(onChangeNumber)
              : changeMonth(onChangeNumber)
          }
          onMouseEnter={(e) => handleOpen(e, buttonID)}
          onFocus={(e) => handleOpen(e, buttonID)}
          onMouseLeave={() => handleClose()}
          onBlur={() => handleClose()}
          onKeyDown={
            buttonID === 'PREVIOUS_YEAR' ? ajustLoopNavigation : undefined
          }
        >
          <FontIcon iconName={iconName}></FontIcon>
        </button>
      </Tooltip>
    );
  };

  const textHeader = `${months[date.getMonth()]} ${date.getFullYear()}`;
  return (
    <div
      className="tk-daypicker-header"
      style={{ direction: dir }}
    >
      <div>
        {tooltipButton(
          'PREVIOUS_YEAR',
          labels.previousYear,
          'tk-daypicker-header--prevYear',
          dir === 'rtl' ? 'chevron-right' : 'chevron-left',
          -1,
          true
        )}
        {tooltipButton(
          'PREVIOUS_MONTH',
          labels.previousMonth,
          'tk-daypicker-header--prevMonth',
          dir === 'rtl' ? 'right' : 'left',
          -1,
          false
        )}
      </div>
      <div className="tk-daypicker-header--text">{textHeader}</div>
      <div>
        {tooltipButton(
          'NEXT_MONTH',
          labels.nextMonth,
          'tk-daypicker-header--nextMonth',
          dir === 'rtl' ? 'left' : 'right',
          1,
          false
        )}
        {tooltipButton(
          'NEXT_YEAR',
          labels.nextYear,
          'tk-daypicker-header--nextYear',
          dir === 'rtl' ? 'chevron-left' : 'chevron-right',
          1,
          true
        )}
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
