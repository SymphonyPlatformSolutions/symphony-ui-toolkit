import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import shortid from 'shortid';
import Icon from '../icon';

const Input = styled.input`
  // Hide the input without using 'display:none'.
  // Otherwise it will hide the checkbox from both browser and assistive technology (AT) users,
  // and we would also lose keyboard interactions.
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

const GlobalContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CheckboxComponent = styled.div`
  display: flex;
  align-items: center;
  &.CheckboxContainer-label__top {
    flex-direction: column-reverse;
  }
  &.CheckboxContainer-label__left {
    flex-direction: row-reverse;
  }
  &.CheckboxContainer-label__bottom {
    flex-direction: column;
  }
`;

const IconContainer = styled.span`
  cursor: pointer;
`;

enum LabelPlacements {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

const Checkbox = ({
  id,
  type = 'checkbox',
  label,
  name,
  value,
  checked,
  required,
  tabIndex,
  labelPlacement,
  handleClick = (any) => {},
  disabled,
}) => {
  const [isChecked, setChecked] = useState(checked);

  const memoizedId = useMemo(() => {
    return id || `checkbox-${shortid.generate()}`;
  }, [id]);

  const labelPlacementClass = `CheckboxContainer-label__${labelPlacement}`;
  const iconName = `${type}-${isChecked ? 'on' : 'off'}`;
  const onClickCallback = useCallback(() => {
    setChecked(!isChecked);
    handleClick(isChecked);
  }, [isChecked]);
  return (
    <GlobalContainer>
      <CheckboxComponent
        className={classNames(labelPlacementClass, 'tk-checkbox')}
      >
        <IconContainer onClick={onClickCallback} aria-hidden>
          <Icon iconName={iconName} />
          <Input
            type="checkbox"
            id={memoizedId}
            name={name}
            value={value}
            checked={checked}
            required={required}
            tabIndex={tabIndex}
            disabled={disabled}
          />
        </IconContainer>
        <label htmlFor={memoizedId}>{label}</label>
      </CheckboxComponent>
    </GlobalContainer>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  labelPlacement: PropTypes.oneOf(Object.values(LabelPlacements)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
