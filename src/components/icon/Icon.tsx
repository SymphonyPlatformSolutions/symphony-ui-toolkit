import PropTypes from 'prop-types';
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
  return (
    <span
      ref={forwardRef}
      tabIndex={tabIndex}
      className={className}
      style={{ cursor: !disabled && (onClick || handleClick) && 'pointer' }}
      onClick={!disabled ? onClick : null}
      onKeyDown={!disabled ? onKeyDown : null}
    >
      <i className={`tk-icon-${iconName}`} onClick={handleClick} />
    </span>
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
