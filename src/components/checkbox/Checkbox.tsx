import React, { useState, useCallback } from 'react';
import {
  Common,
  CommonPropTypes,
  Types,
  LABEL_PLACEMENTS,
  CHECKBOX_STATES,
} from './Common';

const Checkbox = (props) => {
  const [isChecked, setChecked] = useState(props.checked);

  const onClickCallback = useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);

  return (
    <Common
      type={Types.CHECKBOX}
      labelPlacement={props.labelPlacement || LABEL_PLACEMENTS.RIGHT}
      checked={isChecked}
      handleClick={onClickCallback}
      {...props}
    />
  );
};

Checkbox.propTypes = CommonPropTypes;

export default Checkbox;
