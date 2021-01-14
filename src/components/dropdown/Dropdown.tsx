import {Option, SingleValue, MultiValue, DropdownIndicator, MultiValueRemove, Control} from './CustomRender';
import * as React from 'react';
import Select from 'react-select';

const prefix = 'tk-select';

export interface CustomRenderProps<T> {
  data: T;
}
export interface DefaultOptions {
  label: string;
  value: string;
}
export interface groupedOptions extends DefaultOptions {
  label: string;
  value: string;
}


export type DropdownProps = {
  options: any;
  className?: string;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiSelect?: boolean;
  isInputClearable?: boolean;
  id?: string;
  placeHolder?: string;
  label?: string
  defaultValue?: any;
  onBlur?: any;
  optionRenderer?: React.ReactNode;
  tagRenderer?: React.ReactNode;
  tagRemoveRenderer?: React.ReactNode;
  displayArrowIndicator?: boolean;
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
    const { isMultiSelect, isDisabled, placeHolder, options, id, defaultValue, onBlur, isInputClearable, label, optionRenderer, tagRemoveRenderer } = this.props;

    return (
      <div>
        <Select
          displayArrowIndicator={displayArrowIndicator}
          tagRemoveRenderer={tagRemoveRenderer}
          optionRenderer={optionRenderer}
          isClearable={isInputClearable}
          label={label}
          components={{ DropdownIndicator, Control, SingleValue, Option, MultiValue, MultiValueRemove }}
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
        />
      </div>
    );
  }
  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    isLoading: false,
    isInputClearable: false,
  }
}

export default Dropdown;