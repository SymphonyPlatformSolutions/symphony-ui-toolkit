import {Option, SingleValue, MultiValueContainer, MultiValue,DropdownIndicator, MultiValueRemove, Control, ClearIndicator, } from './CustomRender';
import * as React from 'react';
import Select from 'react-select';

const prefix = 'tk-select';

export interface TagRendererProps<T> {
  data: T;
  removeProps?: {onClick: () => any};
}
export interface OptionRendererProps<T> {
  data: T;
}
export interface SelectedValue {
  label: string;
  value: string;
  name?:string;
}
export interface IconPickerOptions {
  label: string,
  options: SelectedValue[],
}
export interface TimeZoneOptions {
  label: string,
  value?: string,
  options?: SelectedValue[],
}

export type DropdownProps = {
  options: any;
  /** Close the expanded menu when the user selects an option */
  displayArrowIndicator?: boolean;
  isDisabled?: boolean;
  isMultiSelect?: boolean;
  id?: string;
  placeHolder?: string;
  label?: string
  defaultValue?: any;
  onBlur?: any;
  className?: string;
  /** Used to override the default appearance of the list items. */
  optionRenderer?: React.ReactNode;
  /** Used to override the default appearance of the dropdown select input item/s */
  tagRenderer?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  /* It renders an icon on the left side of the dropdown input*/
  iconName?: string;
  closeMenuOnSelect?: boolean;
  /** Hide the selected option from the list */
  hideSelectedOptions?: boolean;
  /** Enables the indicator to clear the value from the Dropdown */
  isInputClearable?: boolean;
  /** Enables the indicator to expand the Dropdown */
}

type DropdownState = {
  selectedOption: any;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  displayArrowIndicator?: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {

  state = {
    selectedOption: null,
    hideSelectedOptions: (this.props?.isMultiSelect || !!this.props?.hideSelectedOptions),
    closeMenuOnSelect: !!(!this.props?.isMultiSelect || this.props?.closeMenuOnSelect),
    displayArrowIndicator: !!(!this.props?.isMultiSelect || this.props?.displayArrowIndicator)
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption, hideSelectedOptions, closeMenuOnSelect, displayArrowIndicator } = this.state;
    const { isMultiSelect, isDisabled, placeHolder, options, id, defaultValue, onBlur, isInputClearable, label, optionRenderer, iconName,tagRenderer, } = this.props;

    return (
      <div>
        <Select
          displayArrowIndicator={displayArrowIndicator}
          optionRenderer={optionRenderer}
          tagRenderer={tagRenderer}
          isClearable={isInputClearable}
          label={label}
          components={{ DropdownIndicator, Control, SingleValue, Option, MultiValueContainer,MultiValue, ClearIndicator, MultiValueRemove}}
          defaultValue={defaultValue}
          id={id}
          className={prefix}
          closeMenuOnSelect={closeMenuOnSelect}
          classNamePrefix={prefix}
          value={selectedOption}
          onChange={this.handleChange}
          onBlur={onBlur}
          options={options}
          hideSelectedOptions={hideSelectedOptions}
          placeholder={placeHolder}
          isMulti={isMultiSelect}
          isDisabled={isDisabled}
          iconName={iconName}
        />
      </div>
    );
  }
  
  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    isInputClearable: false,
    placement: 'bottom'
  }
}

export default Dropdown;