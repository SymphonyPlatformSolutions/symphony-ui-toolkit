import * as React from 'react';
import classNames from 'classnames';
import { components } from 'react-select';
import Icon from '../icon';
import Loader from '../loader';
import { SearchHeaderOption } from './interfaces';

/**
 * Useful to stop propagating on mouse down events in custom renderers
 * This way Dropdown won't be opened with custom delete
 * @param e Propagated event
 */
const stopPropagation = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

/** The following components are defined to override
 * the appereace of the react-select library components **/
export const DefaultOptionRenderer = (props: any) => {
  const { classNamePrefix, enableTermSearch, inputValue, mode } = props?.selectProps;
  const OptionRenderer = props?.selectProps?.optionRenderer;
  const isSelected = props.isSelected;
  const isSearchHeaderOption = props?.data?.searchHeader;
  if (props.selectProps?.autoScrollToCurrent) {
    React.useEffect(() => {
      if (props.isSelected) {
        const domItem = document.getElementById(props.innerProps.id);
        !!domItem?.scrollIntoView &&
          domItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }, [isSelected]);
  }
  const rendererProps = {
    data: props.data,
    inputValue: props.selectProps?.inputValue,
  };
  return isSearchHeaderOption && enableTermSearch ? (
    inputValue && 
      <components.Option {...props}>
        <HeaderComp {...props} />
      </components.Option>
  ) : <>
    {OptionRenderer ? 
      <div className="tk-option">
        <components.Option {...props}>
          <OptionRenderer {...rendererProps} />
        </components.Option>
      </div>
      : <div className="tk-option">
        <components.Option {...props} className={classNames(classNamePrefix && mode ? `${classNamePrefix}__option--${mode}` : null)}/>
      </div>
    }
  </>;
};

// Specific Input to fix input not displayed in React-Select
// See https://github.com/JedWatson/react-select/issues/3068
// See https://github.com/JedWatson/react-select/discussions/4302
export const Input = (props: any) => {
  const inputAlwaysDisplayed = props?.selectProps?.inputAlwaysDisplayed;
  return <components.Input 
    {...props} onKeyUp={props?.selectProps?.onKeyUp}  
    isHidden={inputAlwaysDisplayed ? !inputAlwaysDisplayed : false}/>;
}
export const SingleValue =  ({ children, data, selectProps, ...props }: any) => {
  const InputRenderer = selectProps?.tagRenderer;
  const inputValue = selectProps?.parentInstance?.searchHeaderOption?.value;
  const rendererProps = { data };
  const isSearchHeaderSelected = rendererProps.data.searchHeader;
  return (
    <components.SingleValue {...props}>
      { isSearchHeaderSelected ?  <div>{inputValue}</div> :  (InputRenderer ? <InputRenderer {...rendererProps} /> : children )}
    </components.SingleValue>);
};

export const DefaultTagRenderer = (props: any) => {
  const TagRender = props.selectProps?.tagRenderer;
  const rendererProps = { remove: props.removeProps.onClick, data: props.data };
  return (<>
    {TagRender ? 
      <div onMouseDown={stopPropagation}>
        <TagRender {...rendererProps} />
      </div>
      : <components.MultiValue {...props}>
        <div onMouseDown={stopPropagation} className="tk-px-1" style={{display:'flex'} }>
          <div className="tk-tag tk-pr-1">
            {props.data?.label}
          </div>
          <div>
            <Icon iconName="cross" onClick={props.removeProps.onClick}/>
          </div>
        </div>
      </components.MultiValue>}
  </>);
};

export const MultiValueContainerOverride = ({ children, ...props }: any) => 
  <components.MultiValueContainer {...props}>
    <div>{children}</div>
  </components.MultiValueContainer>;

/**
 * This component controls the behavior of the expandable arrow displayed on
 * the right side of the Dropdown component.
 * Default: visible -> Simple select | hidden -> Multiple Select (isMulti prop)
 * The displayArrowIndicator prop from the Dropdown can override it
 */
export const DropdownIndicator = (props: any) => {
  const { isMulti, displayArrowIndicator, menuIsOpen } = props?.selectProps;
  return !displayArrowIndicator ? null : 
    (<components.DropdownIndicator {...props}>
      {!isMulti &&<Icon iconName={menuIsOpen ? 'drop-up' : 'drop-down'} className="tk-select__single-value"/>}
    </components.DropdownIndicator>);
};

export const ClearIndicator = (props: any) =>
  <components.ClearIndicator {...props}>
    <Icon iconName="cross-round"/>
  </components.ClearIndicator>;

export const Control = ({ children, selectProps, ...props }: any) => {
  const {iconName} = selectProps;
  return (<div className="tk-input-group__header">
    {<label className="tk-label tk-mb-h">{selectProps?.label}</label>}
    <components.Control {...props} className="tk-input__container">
      {iconName && <Icon iconName={iconName} className="tk-input__icon" tabIndex={0}/>}
      {children}
    </components.Control>
  </div>);
};

export const NoOptionsMessage = ({selectProps, ...props}: any) =>
  <components.NoOptionsMessage {...props}>
    <div>{selectProps?.noOptionMessage}</div>
  </components.NoOptionsMessage>;

const HeaderComp = (props: any) => {
  const { termSearchMessage, inputValue } = props.selectProps;
  return (<div>
    <Icon iconName="right-arrow" className="tk-mr-1h"/>
    <span>
      {termSearchMessage && typeof termSearchMessage === 'string'
        ? termSearchMessage : termSearchMessage ? termSearchMessage(inputValue) : 'Search for term '}
        &apos;{inputValue}&apos;
    </span>
  </div>);
};

/* Override default loading styles to the react-select */
export const LoadingMessage = () => <div className="tk-select-loading"><Loader/></div>;

/* This component is used when the enableTermSearch prop
 * is activated to handle the header Option selection */
export const DropdownList = ({selectProps, ...props}: any) => {
  if (selectProps?.enableTermSearch) {
    const select = selectProps?.selectRef?.current?.select;
    const  selectValueSync  = select?.state?.selectValue;
    const  selectValueAsync  = select?.state?.value?.searchHeader;
    const { searchHeaderOption } = selectProps?.parentInstance;
    const { inputValue } = selectProps;
    // Focus on first option and differenciate between Group Options and simple options
    let focusThis = props?.children[1]?.props.data;
    if (focusThis?.options) {
      focusThis = props?.children[1].props?.options[0]?.data;
    }
    focusThis = focusThis || searchHeaderOption;
    // Clear the value if header option is selected
    if (selectValueSync && selectValueSync[0]?.searchHeader ) {
        select?.clearValue();
    }
    if (selectValueAsync) {
      select?.select?.clearValue();
    }
    // Initially, remove the focus from the headerOption
    React.useEffect(() => {
      select?.setState({ focusedOption: null });
    }, [selectProps.selectRef]);
    // Update the focus depending on the inputValue. 
    React.useEffect(() => {
      select?.setState({ focusedOption: focusThis });
      selectProps.parentInstance.searchHeaderOption.value = inputValue;
    }, [inputValue]);
    // Skip focusing on the headerOption if the inputValue is empty
    React.useEffect(() => {
      if(select?.state?.focusedOption?.value === '') {
        select?.setState({ focusedOption: focusThis });
      }
    }, [select?.state?.focusedOption]);
  }
  return <components.MenuList {...props}>{props.children}</components.MenuList>;
};

export const firstOption: Readonly<SearchHeaderOption> = {
  searchHeader: true,
  value: '',
};