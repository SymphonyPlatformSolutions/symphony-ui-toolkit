import * as React from 'react';
import SelectionTypes from './SelectionTypes';
import { SelectionInput, SelectionInputProps, SelectionInputPropTypes } from './SelectionInput';

const Radio = (props: SelectionInputProps) => {
  return <SelectionInput type={SelectionTypes.RADIO} {...props} />;
};

Radio.propTypes = SelectionInputPropTypes;

export default Radio;
