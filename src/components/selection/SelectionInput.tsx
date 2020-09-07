import React, { useMemo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import shortid from 'shortid';
import Icon from '../icon';
import CheckboxStates from './CheckboxStates';

enum Types {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

enum LabelPlacements {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

const Input = styled.input`
  // Hide the input without using 'display:none'.
  // Otherwise it will hide the checkbox from both browser and assistive technology (AT) users,
  // and we would also lose keyboard interactions.
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

const GlobalContainer = styled.div`
  display: inline-block;
`;

const SelectionInputDiv = styled.div`
  display: flex;
  align-items: center;
  &.tk-checkbox__labelPlacement {
    &--top {
      flex-direction: column-reverse;
    }
    &--left {
      flex-direction: row-reverse;
    }
    &--bottom {
      flex-direction: column;
    }
  }
`;

const IconContainer = styled.span`
  cursor: pointer;
  position: relative;
`;

interface SelectionInputProps {
  id?: string;
  type: Types;
  name: string;
  label: string;
  labelPlacement?: LabelPlacements;
  value: string;
  selectionState?: CheckboxStates;
  defaultSelectionState?: CheckboxStates;
  handleClick?: (event) => void;
  handleChange?: (event) => void;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

const SelectionInput: React.FC<SelectionInputProps> = ({
  id,
  type,
  name,
  label,
  labelPlacement,
  value,
  selectionState,
  defaultSelectionState,
  handleClick = (event) => {},
  handleChange = (event) => {},
  required,
  disabled,
  tabIndex,
}) => {
  const memoizedId = useMemo(() => {
    // Generate unique ID
    return id || `${type}-${shortid.generate()}`;
  }, [id]);

  // Used for the keyboard navigation
  const [isFocused, setFocus] = useState(false);

  // Icon to use
  const iconType = type === 'radio' ? 'radio-button' : type;

  // Accessibility keyboard navigation
  useEffect(() => {
    const keyPressHandler = (event) => {
      // Space key (https://www.w3.org/TR/uievents/#fixed-virtual-key-codes)
      // Space code (https://w3c.github.io/uievents-code/) Not supported on IE
      if (
        !disabled &&
        isFocused &&
        (event.code === 'Space' || event.keyCode === 32)
      ) {
        handleClick(event);
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [isFocused, handleClick]);

  const memoizeOnClick = useCallback(
    (event) => {
      if (!disabled) {
        handleClick(event);
      }
    },
    [disabled, handleClick]
  );

  const memoizeOnChange = useCallback(
    (event) => {
      if (!disabled) {
        handleChange(event);
      }
    },
    [disabled, handleChange]
  );

  // Component gets focus
  const onFocusHandler = (e) => {
    setFocus(true);
  };

  // Component loses focus.
  const onBlurHandler = (e) => {
    setFocus(false);
  };

  return (
    <GlobalContainer>
      <SelectionInputDiv
        className={classNames(
          `tk-${type.valueOf()}`,
          `tk-checkbox__labelPlacement--${labelPlacement}`,
          {
            'tk-checkbox--checked': selectionState !== CheckboxStates.UNCHECKED,
            'tk-checkbox--disabled': disabled,
            'tk-checkbox--focused': isFocused,
          }
        )}
        tabIndex={tabIndex || 0}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <IconContainer className="tk-checkbox__icon" tab-index="-1">
          <Input
            type={type}
            id={memoizedId}
            name={name}
            value={value}
            checked={selectionState === CheckboxStates.CHECKED}
            required={required}
            disabled={disabled}
            onClick={memoizeOnClick}
            onChange={memoizeOnChange}
            tabIndex={-1}
          />
          <Icon iconName={`${iconType}-${selectionState}`} aria-hidden />
        </IconContainer>
        <label
          className={classNames(
            'tk-checkbox__label',
            `tk-checkbox__label--${labelPlacement}`
          )}
          htmlFor={memoizedId}
          tabIndex={-1}
        >
          {label}
        </label>
      </SelectionInputDiv>
    </GlobalContainer>
  );
};

interface SelectionInputProps {
  id?: string;
  type: Types;
  name: string;
  label: string;
  labelPlacement?: LabelPlacements;
  value: string;
  selectionState?: CheckboxStates;
  defaultSelectionState?: CheckboxStates;
  handleClick?: (event) => void;
  handleChange?: (event) => void;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

const SelectionInputPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelPlacement: PropTypes.oneOf(Object.values(LabelPlacements)),
  value: PropTypes.string.isRequired,
  selectionState: PropTypes.oneOf(Object.values(CheckboxStates)),
  defaultSelectionState: PropTypes.oneOf(Object.values(CheckboxStates)),
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

SelectionInput.propTypes = {
  ...SelectionInputPropTypes,
  type: PropTypes.oneOf(Object.values(Types)),
};

export { SelectionInput, SelectionInputPropTypes, Types, LabelPlacements };
