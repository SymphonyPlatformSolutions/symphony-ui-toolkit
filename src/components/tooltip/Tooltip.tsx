import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  &.TooltipContainer {
    &-enter {
      opacity: 0;
      &-active {
        opacity: 1;
        transition: opacity 200ms;
      }
    }
    &-exit {
      opacity: 1;
      &-active {
        opacity: 0;
        transition: opacity 200ms;
      }
    }
  }

  .tooltip__arrowContainer {
    position: absolute;
  }

  .tooltip__arrow {
    z-index: -1;
    border-radius: 2px;
    transform: rotate(45deg);
  }

  &[data-popper-placement^='top'] > .tooltip__arrowContainer {
    bottom: -7px;
  }
  &[data-popper-placement^='bottom'] > .tooltip__arrowContainer {
    top: -7px;
  }
  &[data-popper-placement^='left'] > .tooltip__arrowContainer {
    right: -7px;
  }
  &[data-popper-placement^='right'] > .tooltip__arrowContainer {
    left: -7px;
  }
`;

const TooltipClose = styled.span`
  cursor: pointer;
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
  closeLabel,
  visible,
  onHintClose,
  referenceElement,
}) => {
  const [popperElement, setPopperElement] = useState(null);
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
      mountOnEnter
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
        className="tk-tooltip"
        style={styles.popper}
        {...attributes.popper}
      >
        <span className="tk-tooltip__description">{description}</span>
        <div
          className="tooltip__arrowContainer"
          style={styles.arrow}
          data-popper-arrow
        >
          <div className="tooltip__arrow tk-tooltip__arrow" />
        </div>
        <div className="tk-tooltip__footer">
          <TooltipClose className="tk-tooltip__close" onClick={onHintClose}>
            {closeLabel}
          </TooltipClose>
        </div>
      </TooltipContainer>
    </CSSTransition>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeLabel: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onHintClose: PropTypes.func.isRequired,
  referenceElement: PropTypes.object,
};

export default Tooltip;
