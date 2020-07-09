import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import InfoHintIcon from './InfoHintIcon';
import shortid from 'shortid';
import Tooltip from '../tooltip';

const InfoHint = ({ title }) => {
  const ariaId = useMemo(() => `hint-${shortid.generate()}`, []);

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
