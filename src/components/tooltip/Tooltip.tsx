import * as PropTypes from 'prop-types';
import * as React from 'react';
import classnames from 'classnames';
import composeRefs from '@seznam/compose-react-refs'
import styled from 'styled-components';
import useOnclickOutsideCool from 'react-cool-onclickoutside';
import { CSSTransition } from 'react-transition-group';
import { PopperContainer, popperProps } from '../common/popperUtils';
import { showTooltipOnClick, showTooltipOnHover } from './helpers';
import { useMemo, useState } from 'react';
import { usePopper } from 'react-popper';

const TooltipContainer = styled.div`
  &.TooltipContainer {
    ${PopperContainer}
  }

  .tooltip__arrowContainer {
    position: absolute;
    z-index: -1;
  }

  .tooltip__arrow {
    border-radius: 2px;
    transform: rotate(45deg);
  }

  &[data-popper-placement^='top'] > .tooltip__arrowContainer {
    bottom: -7px;
  }
  &[data-popper-placement^='bottom'] > .tooltip__arrowContainer {
    top: -7px;
  }
  &[data-popper-placement^='left'] > .tooltip__arrowContainer {
    right: -7px;
  }
  &[data-popper-placement^='right'] > .tooltip__arrowContainer {
    left: -7px;
  }
`;

export interface TooltipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'ref'> {
  /** Clickable text to display that fires onHintClose */
  closeLabel?: string;
  /** Text or Element to display in the tooltip */
  description: string | JSX.Element;
  /** If omitted, you need to control visible state to show/hide the tooltip */
  displayTrigger?: 'click' | 'hover';
  /** CSS ID */
  id?: string;
  /** Function to call when clicking on closeLabel */
  onHintClose?: () => void;
  placement: 'top' | 'bottom' | 'left' | 'right';
  type?: 'hint' | 'tooltip';
  /** if true, the tooltip should be displayed */
  visible?: boolean;
  /** Optional CSS class name for wrapping span element  */
  wrapperClassName?: string;
  /**
   * Timeout before the tooltip disappear on hover (in ms)
   * @default 100
   */
  hoverTimeout?: number;
  /**
   * Timeout before the tooltip appear on hover (in ms)
   * @default 0
   */
  hoverDelay?: number;
}

const debouncer = (
  callback: React.Dispatch<React.SetStateAction<boolean>>,
  debounceTimeEntering = 0,
  debounceTimeExit = 100,
) => {
  let timeout: number | undefined;

  return (isEntering: boolean) => {
    clearTimeout(timeout);
    if (!isEntering) {
      timeout = window.setTimeout(() => callback(false), debounceTimeExit);
    } else if(debounceTimeEntering) {
      timeout = window.setTimeout(() => callback(true), debounceTimeEntering);
    } else {
      callback(true);
    }
  };
};

const Tooltip: React.FC<TooltipProps> = ({
  closeLabel,
  description,
  displayTrigger,
  id,
  onHintClose,
  placement,
  type,
  visible,
  hoverTimeout,
  className,
  wrapperClassName,
  hoverDelay = 0,
  ...otherProps
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);

  const [showHover, setShowHover] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const handleMouseMove = useMemo(() => debouncer(setShowHover, hoverDelay, hoverTimeout), [hoverDelay, hoverTimeout]);

  const ref = useOnclickOutsideCool(() =>
  { setShowClick(false) },
  { disabled: !showClick });

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || 'top',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'right', 'left'],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, type === 'hint' ? 15 : 9],
        },
      },
    ],
  });

  const isVisible =
    typeof visible !== 'undefined'
      ? visible
      : displayTrigger === 'hover'
        ? showHover
        : showClick;

  const children = <div
    className={ classnames('tk-tooltip__wrapper', wrapperClassName) }
    ref={ composeRefs(setReferenceElement, ref) }
  >
    {otherProps.children}
  </div>

  return (
    <>
      { /**
       * The element tooltip is wrapped around.
       */ }
      { /** Extra span to make sure Tooltip works on disabled children */ }
      {displayTrigger === 'hover' &&
          showTooltipOnHover(children, handleMouseMove)}
      {displayTrigger === 'click' &&
          showTooltipOnClick(children, showClick, setShowClick)}
      {displayTrigger === undefined && children}

      { /**
        * The tooltip.
        */ }
      <CSSTransition
        {...popperProps}
        in={isVisible}
        classNames="TooltipContainer"
      >
        <TooltipContainer
          id={id}
          role="tooltip"
          ref={setPopperElement}
          className={classnames(
            type === 'tooltip' ? 'tk-tooltip' : 'tk-hint',
            className
          )}
          style={styles.popper}
          {...attributes.popper}
          {...otherProps}
          onMouseEnter={() => handleMouseMove(true)}
          onMouseLeave={() => handleMouseMove(false)}
        >
          <span className="tk-hint__description">{description}</span>
          {type === 'hint' && (
            <>
              <div
                className="tooltip__arrowContainer"
                style={styles.arrow}
                data-popper-arrow
              >
                <div className="tooltip__arrow tk-hint__arrow" />
              </div>
              <div className="tk-hint__footer">
                {closeLabel ? (
                  <span
                    className="tk-hint__close"
                    onClick={onHintClose}
                    onKeyDown={(event) => (event.key === 'Enter') && onHintClose()}
                    tabIndex={0}
                  >
                    {closeLabel}
                  </span>
                ) : null}
              </div>
            </>
          )}
        </TooltipContainer>
      </CSSTransition>
    </>
  );
};

Tooltip.defaultProps = {
  type: 'hint',
};

Tooltip.propTypes = {
  children: PropTypes.any,
  closeLabel: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  displayTrigger: PropTypes.oneOf(['click', 'hover']),
  id: PropTypes.string,
  onHintClose: PropTypes.func,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  type: PropTypes.oneOf(['hint', 'tooltip']),
  visible: PropTypes.bool,
  hoverTimeout: PropTypes.number,
  className: PropTypes.string,
  hoverDelay: PropTypes.number,
  wrapperClassName: PropTypes.string,
};

export default Tooltip;
