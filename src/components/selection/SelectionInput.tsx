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

Input.displayName = 'Input';

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

SelectionInputDiv.displayName = 'SelectionInputDiv';

const IconContainer = styled.span`
  cursor: pointer;
  position: relative;
`;

interface SelectionInputProps {
  id?: string;
  name: string;
  label?: string;
  labelPlacement?: LabelPlacements;
  value: string;
  selectionState?: CheckboxStates;
  handleClick?: (event) => void;
  handleChange?: (event) => void;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

interface SelectionInputPropsWithType extends SelectionInputProps {
  type: Types;
}

const SelectionInput: React.FC<SelectionInputPropsWithType> = ({
  id,
  type,
  name,
  label,
  labelPlacement,
  value,
  selectionState,
  handleClick,
  handleChange,
  required,
  disabled,
  tabIndex,
  ...otherProps
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
      if (!disabled && handleClick) {
        handleClick(event);
      }
    },
    [disabled, handleClick]
  );

  const memoizeOnChange = useCallback(
    (event) => {
      if (!disabled && handleChange) {
        handleChange(event);
      }
    },
    [disabled, handleChange]
  );

  // Component gets focus
  const onFocusHandler = () => {
    setFocus(true);
  };

  // Component loses focus.
  const onBlurHandler = () => {
    setFocus(false);
  };

  const tkClassName = `tk-${type.valueOf()}`;

  return (
    <GlobalContainer>
      <SelectionInputDiv
        className={classNames(
          tkClassName,
          `${tkClassName}__labelPlacement--${labelPlacement}`,
          {
            [`${tkClassName}--checked`]:
              selectionState !== CheckboxStates.UNCHECKED,
            [`${tkClassName}--disabled`]: disabled,
            [`${tkClassName}--focused`]: isFocused,
          }
        )}
        tabIndex={tabIndex || 0}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <IconContainer
          className={classNames(`${tkClassName}__icon`, {
            [`${tkClassName}__icon--checked`]:
              selectionState !== CheckboxStates.UNCHECKED,
          })}
          tab-index="-1"
        >
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
            {...otherProps}
          />
          <Icon iconName={`${iconType}-${selectionState}`} aria-hidden />
        </IconContainer>
        <label
          className={classNames(
            `${tkClassName}__label`,
            `${tkClassName}__label--${labelPlacement}`
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

const SelectionInputPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(Object.values(LabelPlacements)),
  value: PropTypes.string.isRequired,
  selectionState: PropTypes.oneOf(Object.values(CheckboxStates)),
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

export {
  SelectionInput,
  SelectionInputProps,
  SelectionInputPropTypes,
  Types,
  LabelPlacements,
};
