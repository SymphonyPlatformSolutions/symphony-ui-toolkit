import React, { useState } from 'react';
import {
  Common,
  CommonPropTypes,
  Types,
  LABEL_PLACEMENTS,
  CHECKBOX_STATES,
} from './Common';

const Checkbox = (props) => {
  const [checkedState, setCheckedState] = useState(
    props.checkedState || CHECKBOX_STATES.UNCHECKED
  );

  const onClickCallback = () => {
    if (checkedState === CHECKBOX_STATES.CHECKED) {
      setCheckedState(CHECKBOX_STATES.UNCHECKED);
    } else {
      setCheckedState(CHECKBOX_STATES.CHECKED);
    }
  };

  return (
    <Common
      type={Types.CHECKBOX}
      labelPlacement={props.labelPlacement || LABEL_PLACEMENTS.RIGHT}
      checkedState={checkedState}
      handleClick={onClickCallback}
      {...props}
    />
  );
};

Checkbox.propTypes = CommonPropTypes;

export default Checkbox;
