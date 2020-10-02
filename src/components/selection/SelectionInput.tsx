import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import SelectionTypes from './SelectionTypes';
import LabelPlacements from './LabelPlacements';

interface SelectionInputProps {
  id?: string;
  name: string;
  label?: string;
  labelPlacement?: LabelPlacements;
  value: string;
  checked?: string;
  onClick?: (event) => void;
  onChange?: (event) => void;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

interface SelectionInputPropsWithType extends SelectionInputProps {
  type: SelectionTypes;
}

const SelectionInput: React.FC<SelectionInputPropsWithType> = ({
  id,
  type,
  name,
  label,
  labelPlacement,
  value,
  onClick,
  onChange,
  required,
  disabled,
  tabIndex,
  checked,
  ...otherProps
}) => {
  // Generate unique ID if not provided
  const memoizedId = useMemo(() => {
    return id || `${type}-${shortid.generate()}`;
  }, [id]);

  // Default labelPlacement on right if not provided
  labelPlacement = labelPlacement || LabelPlacements.RIGHT;

  // Used for the keyboard navigation
  const [isFocused, setFocus] = useState(false);

  // Accessibility keyboard navigation
  useEffect(() => {
    const keyPressHandler = (event) => {
      // Space key (https://www.w3.org/TR/uievents/#fixed-virtual-key-codes)
      // Space code (https://w3c.github.io/uievents-code/) Not supported on IE
      if (
        onClick &&
        !disabled &&
        isFocused &&
        (event.code === 'Space' || event.keyCode === 32)
      ) {
        onClick(event);
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [isFocused, onClick]);

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
    <div
      className={classNames(
        tkClassName,
        `${tkClassName}__labelPlacement--${labelPlacement}`,
        {
          [`${tkClassName}--disabled`]: disabled,
          [`${tkClassName}--focused`]: isFocused,
          [`${tkClassName}--mixed`]: checked === 'mixed',
        }
      )}
      tab-index="-1"
    >
      <div className={`${tkClassName}__inputContainer`}>
        <input
          id={memoizedId}
          className={`${tkClassName}__input`}
          type={type}
          name={name}
          value={value}
          checked={checked === 'checked' ? true : null}
          disabled={disabled}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onClick={onClick}
          onChange={onChange}
          required={required}
          tabIndex={tabIndex}
          {...otherProps}
        />
        <span className={classNames(`${tkClassName}__icon`)} aria-hidden></span>
      </div>
      <label
        className={classNames(
          `${tkClassName}__label`,
          `${tkClassName}__label--${labelPlacement}`
        )}
        htmlFor={memoizedId}
      >
        {label}
      </label>
    </div>
  );
};

const SelectionInputPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(Object.values(LabelPlacements)),
  value: PropTypes.string.isRequired,
  checked: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

SelectionInput.propTypes = {
  ...SelectionInputPropTypes,
  type: PropTypes.oneOf(Object.values(SelectionTypes)),
};

export { SelectionInput, SelectionInputProps, SelectionInputPropTypes };
