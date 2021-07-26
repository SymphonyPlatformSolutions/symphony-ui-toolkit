import * as React from 'react';
import classnames from 'classnames';
import Tooltip from '../tooltip';

interface TextEllipsisProps extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
    /** Text that should be ellipsed */
    children?: React.ReactNode;

    /** How many rows the text should span before ellipsing */
    rows?: number;

    /** Needed? Add description */
    textRef?: React.RefObject<HTMLElement>;

    tooltipPlacement:
      | 'bottom'
      | 'left'
      | 'right'
      | 'top'
}

interface TextEllipsisState {
    showTooltip: boolean;
}

export const TextEllipsis: React.FC<TextEllipsisProps> = ({
  children,
  rows,
  textRef,
  tooltipPlacement,
  ...otherProps
}: TextEllipsisProps) => {

  const [showTooltip, setShowTooltip] = React.useState(false);

  const isTextTruncated = (element: EventTarget & Element) => {    
    if (textRef?.current) {
      const { scrollWidth, clientWidth } = textRef.current;
      return scrollWidth > clientWidth;
    } else {
      const { scrollWidth, clientWidth } = element;
      return scrollWidth > clientWidth;
    }
  }

  const handleMouseEnter = (event: React.SyntheticEvent) => {
    const element = event.currentTarget;
    const showTooltip = isTextTruncated(element);
    setShowTooltip(showTooltip);
  }

  const handleMouseLeave = () => {
    setShowTooltip(false);
  }

  return(
    <Tooltip
      description={ children as JSX.Element }
      placement={tooltipPlacement}
      type="tooltip"
      visible={showTooltip}
    >
      <div
        className={ classnames(
          'tk-text-ellipsis', {
            'tk-text-ellipsis__single-row': rows === 1,
            'tk-text-ellipsis__multiple-rows': rows > 1
          }) }
        style={{ WebkitLineClamp: rows}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...otherProps}
      >
        { children }
      </div>
    </Tooltip>
  )
}

TextEllipsis.defaultProps = {
  rows: 1,
  tooltipPlacement: 'top',
}
