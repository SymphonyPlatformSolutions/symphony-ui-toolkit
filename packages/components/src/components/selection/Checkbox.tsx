import * as React from 'react';
import SelectionTypes from './SelectionTypes';
import { SelectionInput, SelectionInputProps, SelectionInputPropTypes } from './SelectionInput';

const Checkbox = (props: SelectionInputProps) => {
  return <SelectionInput type={SelectionTypes.CHECKBOX} {...props} />;
};

Checkbox.propTypes = SelectionInputPropTypes;

export default Checkbox;
