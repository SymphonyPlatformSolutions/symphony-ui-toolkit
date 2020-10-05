import React from 'react';
import SelectionTypes from './SelectionTypes';
import { SelectionInput, SelectionInputPropTypes } from './SelectionInput';

const Checkbox = (props) => {
  return <SelectionInput type={SelectionTypes.CHECKBOX} {...props} />;
};

Checkbox.propTypes = SelectionInputPropTypes;

export default Checkbox;
