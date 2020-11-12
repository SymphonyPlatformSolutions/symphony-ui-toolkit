import * as React from 'react';
import SelectionTypes from './SelectionTypes';
import { SelectionInput, SelectionInputPropTypes } from './SelectionInput';

const Radio = (props) => {
  return <SelectionInput type={SelectionTypes.RADIO} {...props} />;
};

Radio.propTypes = SelectionInputPropTypes;

export default Radio;
