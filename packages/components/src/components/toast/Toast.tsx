
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { clsx } from 'clsx';
import Icon from '../icon/FontIcon';
import { TkIcon } from  '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';
import { Icons, SvgIcon } from '..';

interface Placement {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
}

export interface ToastProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children' | 'content'> {
    /** Optional CSS class name */
    className?: string;
    /** If true, close icon will be placed to the right */
    closeIcon?: boolean;
    /** Content of the Toast */
    content: string | JSX.Element;

    /** If set, icon will be placed to the left */
    leftIcon?: TkIcon;
    
    /** Function to call on close action */
    onClickClose?: () => void;
    /** Placement of Toast, relative to parent container */
    placement: Placement;
    /** If Toast should be shown or not */
    show: boolean;
    /** Optional label name to describe element **/
    ariaLabel?: string;
}
  
export const Toast: React.FC<ToastProps> = ({
  className,
  closeIcon,
  content,
  leftIcon,
  onClickClose,
  placement,
  show, 
  ariaLabel,
  ...otherProps
}) => {

  if(!show) {
    return null
  }

  // As you cannot apply multiple transforms there's one special case where if both vertical and horizontal are centered
  const xyCentered = placement.horizontal === 'center' && placement.vertical === 'center';

  return (
    <div className={clsx(
      'tk-toast',
      className,
      { ['tk-toast__vertical-horizontal-center'] : xyCentered,
        [`tk-toast__horizontal-${placement.horizontal}`]: !xyCentered,
        [`tk-toast__vertical-${placement.vertical}`]: !xyCentered
      }
    )} 
    aria-label={ariaLabel}
    { ...otherProps }
    >
      
      { leftIcon && <Icon
        className="tk-toast__icon-left"
        iconName={ leftIcon }
      /> }
      { content }
      { closeIcon && <SvgIcon
        className="tk-toast__icon-right"
        icon={Icons.Cross}
        onClick={ onClickClose }
      />}

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
  closeIcon: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  leftIcon: PropTypes.string as PropTypes.Validator<TkIcon>,
  onClickClose: PropTypes.func,
  placement: PropTypes.any,
  show: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string,
};
