import PropTypes from 'prop-types';
import React from 'react';
import InfoRoundIcon from './InfoRoundIcon';

const Icon = ({ iconName, handleClick }) => (
  <i
    style={{ cursor: handleClick && 'pointer' }}
    className={`tk-ic-${iconName != 'info-round' ? iconName : ''} tk-icon`}
    onClick={handleClick}
  >
    {iconName == 'info-round' ? <InfoRoundIcon /> : null}
  </i>
);

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Icon;
