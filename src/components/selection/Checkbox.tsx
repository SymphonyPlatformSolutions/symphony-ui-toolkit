import React, { useState, useEffect } from 'react';
import CheckboxStates from './CheckboxStates';
import {
  SelectionInput,
  SelectionInputPropTypes,
  Types,
  LabelPlacements,
} from './SelectionInput';

const Checkbox = (props) => {
  const [checkedState, setCheckedState] = useState(
    props.selectionState || CheckboxStates.UNCHECKED
  );

  useEffect(() => {
    if (props.defaultSelectionState) {
      setCheckedState(props.defaultSelectionState);
    }
  }, [props.defaultSelectionState, setCheckedState]);

  const onClickHandler = () => {
    if (checkedState === CheckboxStates.CHECKED) {
      setCheckedState(CheckboxStates.UNCHECKED);
    } else {
      setCheckedState(CheckboxStates.CHECKED);
    }
  };

  return (
    <SelectionInput
      type={Types.CHECKBOX}
      labelPlacement={props.labelPlacement || LabelPlacements.RIGHT}
      selectionState={checkedState}
      handleClick={onClickHandler}
      {...props}
    />
  );
};

Checkbox.propTypes = SelectionInputPropTypes;

export default Checkbox;
