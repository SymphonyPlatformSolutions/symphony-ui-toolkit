import * as PropTypes from 'prop-types';
import * as React from 'react';
import { clsx } from 'clsx';
import {
  arrow,
  autoUpdate,
  FloatingArrow,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions
} from '@floating-ui/react';
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

export const Tooltip: React.FC<TooltipProps> = ({
  children,
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
  const stylesEmotion = useStyles(hoverDelay);

  const arrowRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const { refs, floatingStyles, context } = useFloating({
    middleware: [
      arrow({
        element: arrowRef,
      }),
      flip(),
      offset(type === 'hint' ? 15 : 9),
    ],
    open: visible ?? isOpen,
    onOpenChange: setIsOpen,
    placement: placement ?? 'top',
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss
  ])

  return <div css={stylesEmotion.parent}>
    { /** The element tooltip is wrapped around. */ }
    <div
      className={ clsx('tk-tooltip__wrapper', wrapperClassName) }
      onClick={() => setIsOpen(!isOpen)}
      ref={ refs.setReference }
      { ...getReferenceProps() }
    >
      { children }
    </div>;

    { /** The tooltip. */ }
    <div
      className={clsx(
        `tk-hint-or-tooltip ${type === 'tooltip' ? 'tk-tooltip' : 'tk-hint'}`,
        className
      )}
      css={ [
        stylesEmotion.tooltip,
        displayTrigger === undefined && visible && stylesEmotion.tooltipVisible,
        displayTrigger === undefined && !visible && stylesEmotion.tooltipHidden,
        displayTrigger === 'hover' && stylesEmotion.tooltipHover,
        displayTrigger === 'click' && isOpen && stylesEmotion.tooltipVisible,
        displayTrigger === 'click' && !isOpen && stylesEmotion.tooltipHidden
      ] }
      data-css={ displayTrigger === 'hover' ? 'tooltip' : undefined }
      id={id}
      role="tooltip"
      ref={refs.setFloating}
      style={floatingStyles}
      {...otherProps}
      { ...getFloatingProps() }
    >
      <span className="tk-hint__description">{description}</span>
      {type === 'hint' && <div className="tk-hint__footer">
        {closeLabel ? (
          <span
            className="tk-hint__close"
            onClick={() => {
              setIsOpen(false)
              onHintClose()
            }}
            onKeyDown={(event) => {
              if(event.key === 'Enter') {
                onHintClose()
                setIsOpen(false)
              }
            }}
            tabIndex={0}
          >
            {closeLabel}
          </span>
        ) : null}
      </div>
      }
      { type === 'hint' && <FloatingArrow
        context={context}
        fill="#2b2d32"
        ref={arrowRef}
      /> }
    </div>
  </div>
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
