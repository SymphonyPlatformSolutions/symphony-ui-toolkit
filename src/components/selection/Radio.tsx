import React from 'react';
import CheckboxStates from './CheckboxStates';
import {
  SelectionInput,
  SelectionInputProps,
  SelectionInputPropTypes,
  Types,
  LabelPlacements,
} from './SelectionInput';

interface RadioProps extends SelectionInputProps {
  defaultSelectionState?: CheckboxStates;
}

const Radio: React.FC<RadioProps> = ({ labelPlacement, ...otherProps }) => {
  return (
    <SelectionInput
      type={Types.RADIO}
      labelPlacement={labelPlacement || LabelPlacements.RIGHT}
      {...otherProps}
    />
  );
};

Radio.propTypes = SelectionInputPropTypes;

export default Radio;
