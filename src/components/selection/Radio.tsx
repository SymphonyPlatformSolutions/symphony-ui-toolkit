import React, { useState, useCallback } from 'react';
import {
  SelectionInput,
  SelectionInputPropTypes,
  Types,
} from './SelectionInput';

const Radio = (props) => {
  const [isChecked, setChecked] = useState(props.checked);

  const onClickCallback = useCallback(() => {
    setChecked(!isChecked);
    props.handleClick && props.handleClick(!isChecked);
  }, [isChecked]);

  return (
    <SelectionInput
      type={Types.RADIO}
      handleClick={onClickCallback}
      {...props}
    />
  );
};

Radio.propTypes = SelectionInputPropTypes;

export default Radio;
