import * as React from 'react';
import classnames from 'classnames';
import Tooltip from '../tooltip';

interface TextEllipsisProps extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
    /** Text that should be ellipsed */
    children?: React.ReactNode;

    /** How many rows the text should span before ellipsing */
    rows?: number;

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
  tooltipPlacement,
  ...otherProps
}: TextEllipsisProps) => {

  const [showTooltip, setShowTooltip] = React.useState(false);

  const isTextTruncated = (element: EventTarget & Element) => {
    const { scrollWidth, scrollHeight, clientWidth, clientHeight} = element;

    if(scrollHeight > clientHeight) {
      return true
    } else if(scrollWidth > clientWidth) {
      return true;
    } else {
      return false
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
