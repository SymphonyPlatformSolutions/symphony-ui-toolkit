import * as React from 'react';
import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { PopperContainer, popperProps } from '../common/popperUtils';

import useOnclickOutside from 'react-cool-onclickoutside';
import { showTooltipOnClick, showTooltipOnHover } from './helpers'

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

export interface TooltipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'ref'> {
  closeLabel?: string;
  /** Text or Element to display in the tooltip */
  description: string | JSX.Element;
  displayTrigger?: 'click' | 'hover';
  /** CSS ID */
  id?: string;
  /** Function to call on close action */
  onHintClose?: () => void;
  placement: 'top' | 'bottom' | 'left' | 'right';
  type?: 'hint' | 'tooltip';
  /** if true, the tooltip should be displayed */
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  closeLabel,
  description,
  displayTrigger,
  id,
  onHintClose,
  placement,
  type,
  visible,
  ...otherProps
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const [showHover, setShowHover] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const ref = useOnclickOutside(() => {
    setShowClick(false);
  }, {
    disabled: !showClick,
  });
  
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
          offset: [
            0,
            type === 'hint' ? 15 : 9
          ],
        },
      },
    ],
  });

  return (
    <div ref={ref} className={otherProps.className ? otherProps.className + '_wrapper' : null}>
      <SpanStyled ref={setReferenceElement}>
        { displayTrigger === 'hover' && showTooltipOnHover(otherProps.children, setShowHover) }
        { displayTrigger === 'click' && showTooltipOnClick(otherProps.children, showClick, setShowClick) }
        { displayTrigger === undefined && otherProps.children }
        <CSSTransition
          {...popperProps}
          in={visible || showHover || showClick}
          classNames="TooltipContainer"
        >
          <TooltipContainer
            id={id}
            role="tooltip"
            ref={setPopperElement}
            className={ type === 'tooltip' ? 'tk-tooltip' : 'tk-hint' }
            style={styles.popper}
            {...attributes.popper}
            {...otherProps}
          >
            <span className="tk-hint__description">{description}</span>
            { type === 'hint' &&
              <>
                <div
                  className="tooltip__arrowContainer"
                  style={styles.arrow}
                  data-popper-arrow
                >
                  <div className="tooltip__arrow tk-hint__arrow" />
                </div>
                <div className="tk-hint__footer">
                  {closeLabel ? (
                    <TooltipClose className="tk-hint__close" onClick={onHintClose}>
                      {closeLabel}
                    </TooltipClose>
                  ) : null}
                </div>
              </>
            }
          </TooltipContainer>
        </CSSTransition>
      </SpanStyled>
    </div>
  );
};

Tooltip.defaultProps = {
  type: 'hint',
};

Tooltip.propTypes = {
  closeLabel: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  displayTrigger: PropTypes.oneOf(['click', 'hover']),
  id: PropTypes.string,
  onHintClose: PropTypes.func,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  type: PropTypes.oneOf(['hint', 'tooltip']),
  visible: PropTypes.bool,
};

export default Tooltip;
