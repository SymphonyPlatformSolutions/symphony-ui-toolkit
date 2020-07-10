import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoHintIcon from './InfoHintIcon';
import styled from 'styled-components';
import Tooltip from '../tooltip';

const InfoHintSpan = styled.span`
  display: inline-block;
  cursor: pointer;
`;

const InfoHint = ({ id, title }) => {
  const [tooltipShown, setInfoHintShown] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);

  const handleClick = () => {
    setInfoHintShown(!tooltipShown);
  };

  const handleHintClose = () => {
    setInfoHintShown(false);
  };

  return (
    <>
      <InfoHintSpan
        onClick={handleClick}
        className="tk-info-hint"
        ref={setReferenceElement}
        title={title}
      >
        <InfoHintIcon className="tk-info-hint__icon" />
      </InfoHintSpan>

      <Tooltip
        id={id}
        onHintClose={handleClick}
        description={title}
        visible={tooltipShown}
        referenceElement={referenceElement}
      />
    </>
  );
};

InfoHint.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoHint;
