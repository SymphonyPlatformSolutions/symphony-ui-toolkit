import React, { useState, useCallback } from 'react';
import { Common, CommonPropTypes, Types } from './Common';

const Radio = (props) => {
  const [isChecked, setChecked] = useState(props.checked);

  const onClickCallback = useCallback(() => {
    setChecked(!isChecked);
    props.handleClick && props.handleClick(!isChecked);
  }, [isChecked]);

  return <Common type={Types.RADIO} handleClick={onClickCallback} {...props} />;
};

Radio.propTypes = CommonPropTypes;

export default Radio;
