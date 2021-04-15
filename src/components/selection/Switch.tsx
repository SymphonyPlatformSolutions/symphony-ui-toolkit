import * as React from 'react';
import SelectionTypes from './SelectionTypes';
import { SelectionInput, SelectionInputPropTypes } from './SelectionInput';

const Switch = (props) => {
  return <SelectionInput type={SelectionTypes.SWITCH} {...props} />;
};

Switch.propTypes = SelectionInputPropTypes;

export default Switch;
