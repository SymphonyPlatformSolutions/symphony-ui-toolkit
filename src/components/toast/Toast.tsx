
import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

interface Position {
    x: 'left' | 'center' | 'right';
    y: 'top' | 'center' | 'bottom';
}

export interface ToastProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    closeIcon?: string;
    icon?: string;
    message?: string;
    position?: Position;
    show: boolean;
}
  
export const Toast: React.FC<ToastProps> = ({
  className,
  closeIcon,
  icon,
  message,
  position,
  show,
  ...otherProps
}) => {
  if(!show) {
    return null
  }

  const clickClose = () => {
    // Close the Toast
    // Probably
  }

  return (
    <div className={classNames('tk-toast', className)}>
      { message ? <>
        { icon && <i
          className={classNames('tk-toast__icon-left', icon )}
        /> }
        { message }
        { closeIcon && <i
          className="tk-icon-cross tk-toast__icon-right"
          onClick={clickClose}
        />}
      </>
        : otherProps.children }
    </div>
  )
}
  
Toast.propTypes = {
  className: PropTypes.string,
  closeIcon: PropTypes.string,
  icon: PropTypes.string,
  message: PropTypes.string,
  position: PropTypes.any,
  show: PropTypes.bool,
};