import * as React from 'react';
import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { PopperContainer, popperProps } from '../common/popperUtils';

const SpanStyled = styled.span`
  display: inline-block;
`;

const TooltipContainer = styled.div`
  &.TooltipContainer {
    ${PopperContainer}
  }

  .tooltip__arrowContainer {
    position: absolute;
    z-index: -1;
  }

  .tooltip__arrow {
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
 * @constructor
 */
const Tooltip = ({
  id,
  description,
  closeLabel,
  visible,
  onHintClose,
  placement,
  ...otherProps
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || 'top',
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
    <SpanStyled ref={setReferenceElement}>
      {otherProps.children}
      <CSSTransition
        {...popperProps}
        in={visible}
        classNames="TooltipContainer"
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
            {closeLabel ? (
              <TooltipClose className="tk-tooltip__close" onClick={onHintClose}>
                {closeLabel}
              </TooltipClose>
            ) : null}
          </div>
        </TooltipContainer>
      </CSSTransition>
    </SpanStyled>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string.isRequired,
  closeLabel: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onHintClose: PropTypes.func,
  placement: PropTypes.string,
};

export default Tooltip;
