import * as React from 'react';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '../tooltip';

interface TextEllipsisProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'type'> {
    /** Text that should be ellipsed */
    children?: React.ReactNode;

    /** How many rows the text should span before ellipsing */
    rows?: number;

    /** Wheather a tooltip should be shown on hover when the text is ellipsed */
    tooltipOnEllipsis?: boolean;

    tooltipProps?: TooltipProps;
}

export const TextEllipsis: React.FC<TextEllipsisProps> = ({
  children,
  className,
  rows,
  tooltipOnEllipsis,
  tooltipProps,
  style,
  ...otherProps
}: TextEllipsisProps) => {

  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = (event: React.SyntheticEvent) => {
    const element = event.currentTarget;
    const showTooltip = isTextTruncated(element);
    setShowTooltip(showTooltip);
  }

  const handleMouseLeave = () => {
    setShowTooltip(false);
  }

  const getTextEllipsisHTML = () => {
    return (<span
      className={ classnames(className, 'tk-text-ellipsis') }
      style={{ WebkitLineClamp: rows, ...style}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      { children }
    </span>)
  }

  if(tooltipOnEllipsis) {
    return(
      <Tooltip
        description={ children as JSX.Element }
        placement={ 'top' }
        type="tooltip"
        visible={ showTooltip }
        { ...tooltipProps }
      >
        {getTextEllipsisHTML()}
      </Tooltip>
    )
  } else {
    return(
      getTextEllipsisHTML()
    )
  }
}

TextEllipsis.defaultProps = {
  rows: 1,
  tooltipOnEllipsis: true,
}

const isTextTruncated = (element: EventTarget & Element) => {
  const { scrollWidth, scrollHeight, clientWidth, clientHeight} = element;
  return (scrollHeight > clientHeight) || (scrollWidth > clientWidth)
}
