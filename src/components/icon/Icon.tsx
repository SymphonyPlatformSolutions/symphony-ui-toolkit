import PropTypes from 'prop-types';
import React from 'react';

type IconProps = {
  iconName: string;
  className?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Icon = ({ iconName, className, handleClick }: IconProps) => {
  return (
    <i
      style={{ cursor: handleClick && 'pointer' }}
      className={`tk-icon-${iconName} ${className ? className : ''}`}
      onClick={handleClick}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Icon;
