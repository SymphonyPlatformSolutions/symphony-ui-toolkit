import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import './style.css';

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

/**
 * Tooltip component
 * @param id CSS ID
 * @param description Text to display in the tooltip
 * @param visible true if the tooltip should be displayed, false otherwise
 * @param onHintClose Function to call on close action
 * @param referenceElement HTML Element on which the Tooltip must be positioned
 * @constructor
 */
const Tooltip = ({
  id,
  description,
  visible,
  onHintClose,
  referenceElement,
}) => {
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

  return (
    <CSSTransition
      unmountOnExit
      in={visible}
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
        {description}
        <div
          ref={setArrowElement}
          style={styles.arrow}
          className="arrow"
          data-popper-arrow
        />
        <TooltipFooter className="cta-container">
          <TooltipClose className="cta-container__text" onClick={onHintClose}>
            Got it
          </TooltipClose>
        </TooltipFooter>
      </TooltipContainer>
    </CSSTransition>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onHintClose: PropTypes.func.isRequired,
  referenceElement: PropTypes.object,
};

export default Tooltip;
