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

    tooltipProps?: Partial<TooltipProps>;
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
      className={ classnames(className, 'tk-text-ellipsis', { 'tk-text-ellipsis__multiple-rows': rows > 1 }) }
      style={{ WebkitLineClamp: rows, ...style}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      { children }
    </span>)
  }

  if(!tooltipProps?.description && !children) {
    return null
  }
  
  if(tooltipOnEllipsis) {
    return(
      <Tooltip
        {...tooltipProps}
        description={ tooltipProps?.description ?? (children as JSX.Element) }
        placement={ tooltipProps?.placement ?? 'top' }
        type={ tooltipProps?.type ?? 'tooltip' }
        visible={ tooltipProps?.visible ?? showTooltip }
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
