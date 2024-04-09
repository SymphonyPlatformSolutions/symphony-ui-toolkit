import * as PropTypes from 'prop-types';
import * as React from 'react';
import { clsx } from 'clsx';
import composeRefs from '@seznam/compose-react-refs'
import useOnclickOutsideCool from 'react-cool-onclickoutside';
import { usePopper } from 'react-popper';
import { useState } from 'react';
import { useStyles } from './styles';

export interface TooltipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'ref'> {
  /** Clickable text to display that fires onHintClose */
  closeLabel?: string;
  /** Text or Element to display in the tooltip */
  description: string | JSX.Element;
  /** If omitted, you need to control visible state to show/hide the tooltip */
  displayTrigger?: 'click' | 'hover';
  /** CSS ID */
  id?: string;
  /**
  * Timeout before the tooltip appear on hover (in ms)
  * @default 0
  */
  hoverDelay?: number;
  /** Function to call when clicking on closeLabel */
  onHintClose?: () => void;
  placement: 'top' | 'bottom' | 'left' | 'right';
  type?: 'hint' | 'tooltip';
  /** if true, the tooltip should be displayed */
  visible?: boolean;
  /** Optional CSS class name for wrapping span element  */
  wrapperClassName?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  closeLabel,
  description,
  displayTrigger,
  id,
  onHintClose,
  placement,
  type,
  visible,
  className,
  wrapperClassName,
  hoverDelay = 0,
  ...otherProps
}) => {
  const stylesEmotion = useStyles(hoverDelay)
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);

  const [showClick, setShowClick] = useState(false);
  
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

  const children = <div
    className={ clsx('tk-tooltip__wrapper', wrapperClassName) }
    ref={ composeRefs(setReferenceElement, ref) }
  >
    {otherProps.children}
  </div>;

  return (
    <div css={stylesEmotion.parent} onClick={() => setShowClick(!showClick)}>
      { /** The element tooltip is wrapped around. */ }
      { children }

      { /** The tooltip. */ }
      <div
        className={clsx(
          `tk-hint-or-tooltip ${type === 'tooltip' ? 'tk-tooltip' : 'tk-hint'}`,
          className
        )}
        css={ [
          displayTrigger === undefined && visible && stylesEmotion.tooltipVisible,
          displayTrigger === undefined && !visible && stylesEmotion.tooltipHidden,
          displayTrigger === 'hover' && stylesEmotion.tooltipHover,
          displayTrigger === 'click' && showClick && stylesEmotion.tooltipVisible,
          displayTrigger === 'click' && !showClick && stylesEmotion.tooltipHidden
        ] }
        data-css={ displayTrigger === 'hover' ? 'tooltip' : undefined }
        id={id}
        role="tooltip"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        {...otherProps}
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
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  type: 'hint',
};

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  closeLabel: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  displayTrigger: PropTypes.oneOf(['click', 'hover']),
  hoverDelay: PropTypes.number,
  id: PropTypes.string,
  onHintClose: PropTypes.func,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  type: PropTypes.oneOf(['hint', 'tooltip']),
  visible: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

export default Tooltip;
