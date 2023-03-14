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
  /** Keyboard Event */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /** Keyboard Event */
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

const Icon: React.FC<IconProps> = ({
  className,
  disabled,
  iconName,
  onClick,
  onKeyDown,
  onKeyPress,
  forwardRef,
  tabIndex,
  style,
  ...otherProps
}) => {
  return (
    <i
      {...otherProps}
      className={classnames(`tk-icon tk-icon-${iconName}`, className)}
      onClick={!disabled ? onClick : null}
      onKeyDown={!disabled ? onKeyDown : null}
      onKeyPress={!disabled ? onKeyPress : null}
      ref={forwardRef}
      style={{ cursor: !disabled && onClick && 'pointer', ...style }}
      tabIndex={tabIndex}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired as PropTypes.Validator<TkIcon>,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: PropTypes.object,
};

export default Icon;
