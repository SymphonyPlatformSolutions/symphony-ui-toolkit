import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoHintIcon from './InfoHintIcon';
import { usePopper } from 'react-popper';

const InfoHint = ({ id, title }) => {
  const [tooltipShown, setInfoHintShown] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'right', 'left'],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 15],
        },
      },
    ],
  });

  const handleClick = () => {
    setInfoHintShown(!tooltipShown);
  };

  const handleHintClose = () => {
    setInfoHintShown(false);
  };

  return (
    <>
      <span
        onClick={handleClick}
        className="info-hint"
        ref={setReferenceElement}
        title={title}
      >
        <InfoHintIcon className="info-hint__icon" />
      </span>

      {tooltipShown && (
        <div
          id={id}
          role="tooltip"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

InfoHint.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoHint;
