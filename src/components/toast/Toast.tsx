import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Position {
    x: 'left' | 'center' | 'right';
    y: 'top' | 'center' | 'bottom';
}

export interface ToastProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    closeIcon?: string;
    icon?: string;
    position?: Position;
    show: boolean;
    text?: string;
}
  
export const Toast: React.FC<ToastProps> = ({
  className,
  closeIcon,
  icon,
  position,
  show,
  text,
  ...otherProps
}) => {
  return (
    <p>
      { 'temporary '}
    </p>
  )
}
  
Toast.propTypes = {
  className: PropTypes.string,
  closeIcon: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.any,
  show: PropTypes.bool,
  text: PropTypes.string
};