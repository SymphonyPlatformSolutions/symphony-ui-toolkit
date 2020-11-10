import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

export type IconProps = {
  className?: string;
  disabled?: boolean;
  iconName: string;
  forwardRef?: any;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  handleClick?: (
    event: React.MouseEvent<HTMLElement>
  ) => void /** deprecated, please use onClick */;
  onKeyDown?: (event) => any;
};

const Icon: FunctionComponent<IconProps> = ({
  className,
  disabled,
  iconName,
  handleClick /** deprecated, please use onClick */,
  onClick,
  onKeyDown,
  forwardRef,
  tabIndex,
}) => {
  const click = onClick ? onClick : handleClick;
  return (
    <i
      className={classnames(`tk-icon-${iconName}`, className)}
      onClick={!disabled ? click : null}
      onKeyDown={!disabled ? onKeyDown : null}
      ref={forwardRef}
      style={{ cursor: !disabled && click && 'pointer' }}
      tabIndex={tabIndex}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  handleClick: PropTypes.func,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Icon;
