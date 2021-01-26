import Icon from '../icon';
import * as React from 'react';
import  { components } from 'react-select';
import * as PropTypes from 'prop-types';
import { IconPickerOptions, OptionRendererProps, SelectedValue, TagRendererProps } from './Dropdown';

const stopPropagation = (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.info('Stop propagation');
}

const onTagRemoveClick = (e, props) => {
  props?.removeProps?.onClick();
}

/** The following components are defined to override 
 * the appereace of the react-select library components **/

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
  const ValueRender = props.selectProps?.tagRenderer;
  return (<div> {ValueRender ?
    <components.MultiValue {...props} className="tk-tag">
      <div onMouseDown={stopPropagation}>
        <ValueRender {...props}/>
      </div>
    </components.MultiValue>
    : <components.MultiValue {...props} >
      <div onMouseDown={stopPropagation} >
        <span>Arreglame Anna</span>
        <Icon iconName="cross" onClick={e => onTagRemoveClick(e,props)}/>
      </div>
    </components.MultiValue>}</div>
  );
}

MultiValue.propTypes = {
  selectProps: PropTypes.object
}

export const MultiValueContainer = ({ children, ...props }) => {
  return (
    <components.MultiValueContainer {...props}>
      <div>{children}</div>
    </components.MultiValueContainer>
  );
}

MultiValueContainer.propTypes = {
  selectProps: PropTypes.object
}

export const MultiValueRemove = () => {
  return ('');
};

export const DropdownIndicator = props => {
  return (<div>{props?.selectProps?.isMulti ?
    (<div>{props?.selectProps?.isMulti && props?.selectProps?.displayArrowIndicator ?
      <components.DropdownIndicator {...props} /> : <components.DropdownIndicator {...props} className="tk-d-none" />}</div>) :
    <components.DropdownIndicator {...props}>
      <Icon iconName={props?.selectProps.menuIsOpen ? 'drop-up' : 'drop-down'} className="tk-select__single-value"></Icon>
    </components.DropdownIndicator>}</div>
  );
};

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object
}

export const ClearIndicator = props => {
  return (
    <components.ClearIndicator {...props}>
      <Icon iconName="cross-round"></Icon>
    </components.ClearIndicator>
  );
};

ClearIndicator.propTypes = {
  selectProps: PropTypes.object
}

export const Control = ({ children, ...props }) => {
  const iconName = props.selectProps.iconName;
  return (<div className="tk-input-group__header">
    {<label className="tk-label tk-mb-h">{props?.selectProps?.label}</label>}
    {iconName ?
      <components.Control {...props} className="tk-input__container" >
        <div className="tk-input__icon">
          <Icon
            iconName={iconName}
            tabIndex={0}
          ></Icon>
        </div>
        {children}
      </components.Control> : <components.Control {...props} >
      {children}
      </components.Control>}
  </div>
  );
}

Control.propTypes = {
  selectProps: PropTypes.object,
  children: PropTypes.element
}

export const iconData: SelectedValue[] = [
  { value: '1', label: 'app' },
  { value: '2', label: 'bot' },
  { value: '9', label: 'hide' },
  { value: '10', label: 'link' },
  { value: '3', label: 'adjust' },
  { value: '4', label: 'archive' },
  { value: '5', label: 'cashtag' },
  { value: '6', label: 'emoticon' },
  { value: '7', label: 'following' },
  { value: '8', label: 'flags' }
];

export const IconPickerTag = (props: TagRendererProps<IconPickerOptions>) => {
  const {data, removeProps} = props;
  return (
    <div>
      {data.label}
      <Icon className="tk-pl-1" iconName={data.label} />
      <Icon className="tk-pl-1" iconName="cross" onClick={removeProps?.onClick} />
    </div>
  );
};

IconPickerTag.propTypes = {
  data: PropTypes.object,
  removeProps: PropTypes.object,
}

export const IconPickerOption = (props: OptionRendererProps<IconPickerOptions>) => {
  const {data} = props;
  return (
    <div>
      {data.label}
      <Icon className="tk-pl-1" iconName={data.label} />
    </div>
  );
};

IconPickerOption.propTypes = {
  data: PropTypes.object,
}