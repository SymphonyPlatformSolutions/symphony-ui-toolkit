import Icon from '../icon';
import * as React from 'react';
import  { components } from 'react-select';
import * as PropTypes from 'prop-types';

export const Option = props => {
  const OptionRender = props?.selectProps?.optionRenderer;
  return (<div> {OptionRender ?
    <components.Option {...props} >
      <OptionRender {...props} />
    </components.Option> : <components.Option {...props} />}</div>
  );
};

Option.propTypes = {
  selectProps: PropTypes.object
}

export const SingleValue = props => {
  const ValueRender = props.selectProps.optionRenderer;
  return (<div> {ValueRender ?
    <components.SingleValue {...props}>
      <ValueRender {...props} />
    </components.SingleValue> : <components.SingleValue {...props} />}</div>
  );
};

SingleValue.propTypes = {
  selectProps: PropTypes.object
}

export const MultiValue = props => {
  const ValueRender = props.selectProps.optionRenderer;
  return (<div> {ValueRender ?
    <components.MultiValue {...props}>
      <ValueRender {...props} />
    </components.MultiValue>
    : <components.MultiValue {...props} />}</div>)
}

MultiValue.propTypes = {
  selectProps: PropTypes.object
}

export const MultiValueRemove = props => {
  const TagRemove = props.selectProps.tagRemoveRenderer;
  return (<div className="tk-d-flex"> {(TagRemove && !!props.selectProps.isTagClearable) ?
    <div className="tk-d-flex tk-tag-remove">
      <components.MultiValueRemove {...props} >
        <TagRemove  {...props} className="tk-tag-remove" />
      </components.MultiValueRemove> </div> :
    (<div className="tk-d-flex"> { props.selectProps.isTagClearable ?
      <components.MultiValueRemove {...props}>
        <Icon iconName="cross" />
      </components.MultiValueRemove> : <div className="tk-d-none" />}</div>)}</div>
  );
};

MultiValueRemove.propTypes = {
  selectProps: PropTypes.object
}

export const DropdownIndicator = props => {
  return (<div>{props?.selectProps?.isMulti ?
    (<div>{props?.selectProps?.isMulti && props?.selectProps?.displayArrowIndicator ?
      <components.DropdownIndicator {...props} /> : <components.DropdownIndicator {...props} className="tk-d-none" />}</div>) :
    <components.DropdownIndicator {...props}>
      <Icon iconName={props?.selectProps.menuIsOpen ? 'drop-up' : 'drop-down'} className="tk-text-color"></Icon>
    </components.DropdownIndicator>}</div>
  );
};

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object
}

export const Control = props => {
  return (<div className="tk-input-group__header">
    {<label className="tk-label">{props?.selectProps?.label}</label>}
    <components.Control {...props} /></div>);
}

Control.propTypes = {
  selectProps: PropTypes.object
}