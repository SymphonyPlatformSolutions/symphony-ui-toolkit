
import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

interface Placement {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
}

export interface ToastProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    closeIcon?: string;
    icon?: string;
    message?: string;
    placement?: Placement;
    show: boolean;
}
  
export const Toast: React.FC<ToastProps> = ({
  className,
  closeIcon,
  icon,
  message,
  placement,
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

  // As you cannot apply multiple transforms there's one special case where if both vertical and horizontal are centered
  const xyCentered = placement.horizontal === 'center' && placement.vertical === 'center';

  return (
    <div className={classNames(
      'tk-toast',
      className,
      { ['tk-toast__vertical-horizontal-center'] : xyCentered,
        [`tk-toast__horizontal-${placement.horizontal}`]: !xyCentered,
        [`tk-toast__vertical-${placement.vertical}`]: !xyCentered
      }
    )}>
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

Toast.defaultProps = {
  placement: {
    horizontal: 'center',
    vertical: 'center'
  }
}
  
Toast.propTypes = {
  className: PropTypes.string,
  closeIcon: PropTypes.string,
  icon: PropTypes.string,
  message: PropTypes.string,
  placement: PropTypes.any,
  show: PropTypes.bool,
};