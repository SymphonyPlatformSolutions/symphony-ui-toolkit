import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import InfoHintIcon from './InfoHintIcon';
import shortid from 'shortid';
import { usePopper } from 'react-popper';

const InfoHint = ({ title }) => {
  const ariaId = useMemo(() => `hint-${shortid.generate()}`, []);

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
        aria-describedby={ariaId}
      >
        <InfoHintIcon className="info-hint__icon" />
      </span>

      {tooltipShown && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          Popper element
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

InfoHint.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InfoHint;
