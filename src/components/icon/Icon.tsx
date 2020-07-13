import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '../tooltip';

const IconTag = styled.i`
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = ({ id, iconName, description, tooltipCloseLabel }) => {
  const [tooltipShown, setInfoHintShown] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);

  const handleClick = () => {
    setInfoHintShown(!tooltipShown);
  };

  return (
    <>
      <IconTag
        className={`${iconName} tk-icon`}
        onClick={handleClick}
        ref={setReferenceElement}
      />

      <Tooltip
        id={id}
        onHintClose={handleClick}
        description={description}
        closeLabel={tooltipCloseLabel}
        visible={tooltipShown}
        referenceElement={referenceElement}
      />
    </>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tooltipCloseLabel: PropTypes.string.isRequired,
};

export default Icon;
