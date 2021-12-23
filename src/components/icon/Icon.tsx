import * as PropTypes from 'prop-types';
import * as React from 'react';
import classnames from 'classnames';
import { TkIcon } from  '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';

export interface IconProps extends React.HTMLProps<HTMLElement> {
  /** Required; Designates a specific icon */
  iconName: TkIcon;
  /** Optional CSS class name */
  className?: string;
  /** If true, the icon will be disabled */
  disabled?: boolean;
  forwardRef?: any;
  tabIndex?: number;
  /** Callback when mouse click */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
 /** deprecated; use onClick */
  handleClick?: (
    event: React.MouseEvent<HTMLElement>
  ) => void;
  /** Keyboard Event */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /** Keyboard Event */
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

const Icon: React.FC<IconProps> = ({
  className,
  disabled,
  iconName,
  handleClick /** deprecated, please use onClick */,
  onClick,
  onKeyDown,
  onKeyPress,
  forwardRef,
  tabIndex,
  style,
  ...otherProps
}) => {
  const click = onClick ? onClick : handleClick;
  return (
    <i
      {...otherProps}
      className={classnames(`tk-icon-${iconName}`, className)}
      onClick={!disabled ? click : null}
      onKeyDown={!disabled ? onKeyDown : null}
      onKeyPress={!disabled ? onKeyPress : null}
      ref={forwardRef}
      style={{ cursor: !disabled && click && 'pointer', ...style }}
      tabIndex={tabIndex}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired as PropTypes.Validator<TkIcon>,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  handleClick: PropTypes.func,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: PropTypes.object,
};

export default Icon;
