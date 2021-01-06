import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import SelectionTypes from './SelectionTypes';
import SelectionStatus from './SelectionStatus';
import LabelPlacements from './LabelPlacements';
import { Keys } from '../date-picker/utils/keyUtils';

interface SelectionInputProps {
  id?: string;
  name: string;
  label?: string;
  labelPlacement?: LabelPlacements;
  value: string;
  status?: SelectionStatus;
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
  status,
  ...otherProps
}) => {
  // Generate unique ID if not provided
  const memoizedId = useMemo(() => {
    return id || `${type}-${shortid.generate()}`;
  }, [id]);

  // Default labelPlacement on right if not provided
  labelPlacement = labelPlacement || LabelPlacements.RIGHT;

  const [isFocused, setFocus] = useState(false);

  // Used for the keyboard navigation
  // focus-visible: true when the focus was obtained by keyboard navigation (like :focus-visible pseudo class)
  const [isFocusVisible, setFocusVisible] = useState(false);

  // Accessibility keyboard navigation
  useEffect(() => {
    const keyPressHandler = (event) => {
      // Space key (https://www.w3.org/TR/uievents/#fixed-virtual-key-codes)
      // Space code (https://w3c.github.io/uievents-code/) Not supported on IE
      if (
        onClick &&
        !disabled &&
        isFocused &&
        (event.key === Keys.SPACE || event.key === Keys.SPACEBAR)
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

  useEffect(() => {
    const keyUpHandler = (event) => {
      if (
        isFocused &&
        // Tab and Shift+Tab navigation
        (event.key === Keys.TAB ||
          // Arrow navigation in Radio Component
          (type === SelectionTypes.RADIO &&
            (event.key === Keys.ARROW_LEFT ||
              event.key === Keys.ARROW_UP ||
              event.key === Keys.ARROW_RIGHT ||
              event.key === Keys.ARROW_DOWN)))
      ) {
        setFocusVisible(true);
      }
    };
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [isFocused, isFocusVisible]);

  // Component gets focus
  const onFocusHandler = () => {
    setFocus(true);
  };

  // Component loses focus.
  const onBlurHandler = () => {
    setFocus(false);
    setFocusVisible(false);
  };

  const tkClassName = `tk-${type.valueOf()}`;

  return (
    <div
      className={classNames(
        tkClassName,
        `${tkClassName}__labelPlacement--${labelPlacement}`,
        {
          [`${tkClassName}--focused`]: isFocused,
          [`${tkClassName}--focus-visible`]: isFocusVisible,
          [`${tkClassName}--mixed`]: status === SelectionStatus.MIXED,
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
          checked={status === SelectionStatus.CHECKED ? true : null}
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
  status: PropTypes.oneOf(Object.values(SelectionStatus)),
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
