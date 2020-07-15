import PropTypes, { Validator } from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '../tooltip';

const IconTag = styled.i`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TooltipProps {
  id: string;
  description: string;
  closeLabel: string;
}

interface IconProps {
  iconName: string;
  tooltip?: TooltipProps;
}

const Icon: React.FC<IconProps> = ({ iconName, tooltip }) => {
  const [tooltipShown, setInfoHintShown] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);

  const handleClick = () => {
    setInfoHintShown(!tooltipShown);
  };

  return (
    <>
      <IconTag
        className={`tk-ic-${iconName} tk-icon`}
        onClick={handleClick}
        ref={setReferenceElement}
      />

      {tooltip && (
        <Tooltip
          id={tooltip.id}
          onHintClose={handleClick}
          description={tooltip.description}
          closeLabel={tooltip.closeLabel}
          visible={tooltipShown}
          referenceElement={referenceElement}
        />
      )}
    </>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    closeLabel: PropTypes.string.isRequired,
  }) as Validator<TooltipProps>,
};

export default Icon;
