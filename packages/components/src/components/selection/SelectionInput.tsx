import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import SelectionTypes, { SelectionInputTypes } from './SelectionTypes';
import SelectionStatus, { getCheckedValue } from './SelectionStatus';
import LabelPlacements from './LabelPlacements';
import { Keys } from '../common/eventUtils';
import { HasValidationProps } from '../validation/interfaces';

interface SelectionInputProps {
  id?: string;
  name: string;
  label?: string;
  labelPlacement?: LabelPlacements;
  value: string;
  status?: SelectionStatus;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event) => void;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

type SelectionInputPropsWithType = {
  type: SelectionTypes,
} & SelectionInputProps & HasValidationProps<string>

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onInit,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onValidationChanged,
  ...otherProps
}) => {
  // Generate unique ID if not provided
  const memoizedId = useMemo(() => {
    return id || `${type}-${shortid.generate()}`;
  }, [id]);

  // Default labelPlacement on right if not provided
  labelPlacement = labelPlacement || LabelPlacements.RIGHT;

  const [isFocused, setFocus] = useState(false);

  // Use in a data attribute to provide the checked information on the root node of the component
  const [isChecked, setIsChecked] = useState(getCheckedValue(status));

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

  useEffect(() => {
    setIsChecked(getCheckedValue(status));
  }, [status]);

  // Component gets focus
  const onFocusHandler = () => {
    setFocus(true);
  };

  // Component loses focus.
  const onBlurHandler = () => {
    setFocus(false);
    setFocusVisible(false);
  };

  const onChangeHandler = (event) => {
    setIsChecked(
      event && event.target && getCheckedValue(event.target.checked)
    );
    if (onChange) {
      // Forward the event to the onChange method defined by the user
      onChange(event);
    }
  };

  const tkClassName = `tk-${type.valueOf()}`;

  // Define 'checked' or 'defaultChecked' props depending if the component is a controlled component or not
  const checkedProps = {};
  if (status) {
    // Either 'checked' or 'defaultChecked' props must be defined but not both at the same time
    if (onChange) {
      // Controlled Component
      checkedProps['checked'] = getCheckedValue(status);
    } else {
      // Uncontrolled Component
      checkedProps['defaultChecked'] = getCheckedValue(status);
    }
  }

  return (
    <div
      className={classNames(
        tkClassName,
        `${tkClassName}__labelPlacement--${labelPlacement}`,
        {
          [`${tkClassName}--focused`]: isFocused,
          [`${tkClassName}--focus-visible`]: isFocusVisible,
          [`${tkClassName}--mixed`]: status === SelectionStatus.MIXED,
          [`${tkClassName}--disabled`]: disabled,
        }
      )}
      tab-index="-1"
      data-checked={isChecked}
    >
      <div className={`${tkClassName}__inputContainer`}>
        <input
          id={memoizedId}
          className={`${tkClassName}__input`}
          type={SelectionInputTypes[type]}
          name={name}
          value={value}
          {...checkedProps}
          disabled={disabled}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onClick={onClick}
          onChange={onChangeHandler}
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
  onInit: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

SelectionInput.propTypes = {
  ...SelectionInputPropTypes,
  type: PropTypes.oneOf(Object.values(SelectionTypes)),
};

export { SelectionInput, SelectionInputProps, SelectionInputPropTypes };
