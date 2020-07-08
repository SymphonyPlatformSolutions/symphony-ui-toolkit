import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoHintIcon from './InfoHintIcon';

const InfoHint = ({ title }) => {
  const [tooltipShown, setInfoHintShown] = useState(false);

  const handleClick = () => {
    setInfoHintShown(!tooltipShown);
  };

  const handleHintClose = () => {
    setInfoHintShown(false);
  };

  return (
    <span onClick={handleClick} className="info-hint" title={title}>
      <InfoHintIcon className="info-hint__icon" />
    </span>
  );
};

InfoHint.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InfoHint;
