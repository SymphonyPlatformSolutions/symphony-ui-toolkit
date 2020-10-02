import React, { useState, useEffect } from 'react';
import SelectionStates from './SelectionStates';
import {
  SelectionInput,
  SelectionInputProps,
  SelectionInputPropTypes,
  Types,
  LabelPlacements,
} from './SelectionInput';

interface CheckboxProps extends SelectionInputProps {
  defaultSelectionState?: SelectionStates;
}

const Checkbox: React.FC<CheckboxProps> = ({
  labelPlacement,
  handleClick,
  selectionState,
  defaultSelectionState,
  ...otherProps
}) => {
  const [checkedState, setCheckedState] = useState(
    selectionState || SelectionStates.UNCHECKED
  );

  useEffect(() => {
    if (defaultSelectionState) {
      setCheckedState(defaultSelectionState);
    }
  }, [defaultSelectionState, setCheckedState]);

  const onClickHandler = (event) => {
    if (!selectionState) {
      // If the selection state is not given in props, then we use the internal state component,
      // otherwise we let the parent component defines if the component is checked or not
      if (checkedState === SelectionStates.CHECKED) {
        setCheckedState(SelectionStates.UNCHECKED);
      } else {
        setCheckedState(SelectionStates.CHECKED);
      }
    }
    // Call user handleClick method if defined
    if (handleClick) handleClick(event);
  };

  return (
    <SelectionInput
      type={Types.CHECKBOX}
      labelPlacement={labelPlacement || LabelPlacements.RIGHT}
      selectionState={checkedState}
      handleClick={onClickHandler}
      {...otherProps}
    />
  );
};

Checkbox.propTypes = SelectionInputPropTypes;

export default Checkbox;
