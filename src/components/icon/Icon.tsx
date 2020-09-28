import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ iconName, className, handleClick }) => {

  return (
    <i
      style={{ cursor: handleClick && 'pointer' }}
      className={`tk-icon-${iconName} ${className ? className :''}`}
      onClick={handleClick}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string
};

export default Icon;
