import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InfoHintIcon from './InfoHintIcon';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import './style.css';

const InfoHintSpan = styled.span`
  display: inline-block;
  cursor: pointer;
  height: 16px;
`;

const TooltipContainer = styled.div`
  border-radius: 8px;
  background-color: #333436;
  padding: 16px;
  text-align: center;
  color: #ffffff;
  // font-family: Segoe UI;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
  min-width: 200px;
  max-width: 500px;

  .arrow {
    position: absolute;
    width: 24px;
    height: 24px;
    z-index: -1;
    border-radius: 2px;
    &::before {
      position: absolute;
      left: 0;
      width: 24px;
      height: 24px;
      z-index: -1;
      border-radius: 2px;
      content: '';
      transform: rotate(45deg);
      background: #333436;
    }
  }

  &[data-popper-placement^='top'] > .arrow {
    bottom: -7px;
  }
  &[data-popper-placement^='bottom'] > .arrow {
    top: -7px;
  }
  &[data-popper-placement^='left'] > .arrow {
    right: -7px;
  }
  &[data-popper-placement^='right'] > .arrow {
    left: -7px;
  }
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const TooltipClose = styled.span`
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 16px;
`;

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
      <InfoHintSpan
        onClick={handleClick}
        className="info-hint"
        ref={setReferenceElement}
        title={title}
      >
        <InfoHintIcon className="info-hint__icon" />
      </InfoHintSpan>

      <CSSTransition
        unmountOnExit
        in={tooltipShown}
        timeout={200}
        classNames="TooltipContainer"
        appear
      >
        <TooltipContainer
          id={id}
          role="tooltip"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
          <div
            ref={setArrowElement}
            style={styles.arrow}
            className="arrow"
            data-popper-arrow
          />
          <TooltipFooter className="cta-container">
            <TooltipClose
              className="cta-container__text"
              onClick={handleHintClose}
            >
              Got it
            </TooltipClose>
          </TooltipFooter>
        </TooltipContainer>
      </CSSTransition>
    </>
  );
};

InfoHint.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoHint;
