import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGElement> {
  /** If true, the icon will be disabled */
  disabled?: boolean;
  forwardRef?: any;
  /** Required; Designates a specific icon */
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  /** Callback when mouse click */
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  /** Keyboard Event */
  onKeyDown?: (event: React.KeyboardEvent<SVGElement>) => void;
  /** Keyboard Event */
  onKeyPress?: (event: React.KeyboardEvent<SVGElement>) => void;
  tabIndex?: number;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  disabled,
  icon: Icon,
  onClick,
  onKeyDown,
  onKeyPress,
  forwardRef,
  tabIndex,
  style,
  ...otherProps
}) => {

  return <Icon
    {...otherProps}
    onClick = { !disabled ? onClick : undefined }
    onKeyDown={!disabled ? onKeyDown : undefined}
    onKeyPress={!disabled ? onKeyPress : undefined}
    ref={forwardRef}
    style={{ cursor: !disabled && onClick && 'pointer' || undefined, ...style }}
    tabIndex={tabIndex}
  />

};

SvgIcon.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  icon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: PropTypes.object,
  tabIndex: PropTypes.number,
};