import React, {
  useMemo,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
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

  const [isSelected, setSelected] = useState(
    selectionState === CheckboxStates.CHECKED
  );

  // Input element
  const inputRef = useRef(null);

  // Accessibility keyboard navigation
  useEffect(() => {
    const keyPressHandler = (event) => {
      // Space key (https://www.w3.org/TR/uievents/#fixed-virtual-key-codes)
      // Space code (https://w3c.github.io/uievents-code/) Not supported on IE
      if (
        handleClick &&
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
    <div className={`${tkClassName}__container`}>
      <div
        className={classNames(
          tkClassName,
          `${tkClassName}--${selectionState}`,
          `${tkClassName}__labelPlacement--${labelPlacement}`,
          {
            [`${tkClassName}--disabled`]: disabled,
            [`${tkClassName}--focused`]: isFocused,
          }
        )}
        tabIndex={tabIndex || 0}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <div className={`${tkClassName}__inputContainer`} tab-index="-1">
          <input
            ref={inputRef}
            className={`${tkClassName}__input`}
            type={type}
            id={memoizedId}
            name={name}
            value={value}
            checked={isSelected}
            required={required}
            disabled={disabled}
            onClick={memoizeOnClick}
            onChange={memoizeOnChange}
            tabIndex={-1}
            {...otherProps}
          />
          <span
            className={classNames(
              `${tkClassName}__icon`,
              `${tkClassName}__icon--${selectionState}`
            )}
            aria-hidden
          ></span>
        </div>
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
      </div>
    </div>
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
