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
  useHover,
  useInteractions
} from '@floating-ui/react';
import { useState } from 'react';

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
  const arrowRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState(visible);

  React.useEffect(() => {
    setIsOpen(visible)
  }, [visible])
  
  const { refs, floatingStyles, context } = useFloating({
    middleware: [
      arrow({
        element: arrowRef,
      }),
      flip(),
      offset(type === 'hint' ? 15 : 9),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement ?? 'top',
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context, {
    enabled: displayTrigger === 'click',
  });
  
  const hover = useHover(context, {
    delay: {
      close: 100,
      open: hoverDelay,
    },
    enabled: displayTrigger === 'hover'
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    hover,
  ])

  return <>
    { /** The element tooltip is wrapped around. */ }
    <div
      className={ clsx('tk-tooltip__wrapper', wrapperClassName) }
      onClick={() => {
        displayTrigger === 'click' && setIsOpen(!isOpen)
      }}
      ref={ refs.setReference }
      { ...getReferenceProps() }
    >
      { children }
    </div>;

    { /** The tooltip. */ }
    { isOpen && <div
      className={clsx(
        `${type === 'tooltip' ? 'tk-tooltip' : 'tk-hint'}`,
        className
      )}
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
              onHintClose && onHintClose()
            }}
            onKeyDown={(event) => {
              if(event.key === 'Enter') {
                onHintClose && onHintClose()
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
    }
  </>
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
