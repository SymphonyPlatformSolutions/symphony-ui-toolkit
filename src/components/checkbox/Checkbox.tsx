import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import shortid from 'shortid';

const CheckboxContainer = styled.div`
  display: flex;
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

enum LabelPlacements {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

const Checkbox = (props) => {
  const {
    label,
    name,
    value,
    checked,
    required,
    tabIndex,
    labelPlacement,
  } = props;
  const id = props.id || `checkbox-${shortid.generate()}`;
  const labelPlacementClass = `CheckboxContainer-label__${labelPlacement}`;
  return (
    <CheckboxContainer
      className={classNames(labelPlacementClass, 'tk-checkbox')}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        required={required}
        tabIndex={tabIndex}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  labelPlacement: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default Checkbox;
