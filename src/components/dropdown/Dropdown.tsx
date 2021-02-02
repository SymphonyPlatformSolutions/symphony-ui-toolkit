import * as React from 'react';
import Select from 'react-select';
import { Option } from 'react-select/src/filters';
import {
  ClearIndicator,
  Control,
  DefaultOptionRenderer,
  DefaultTagRenderer,
  DropdownIndicator,
  MultiValueContainerOverride,
  MultiValueRemove,
  SingleValue,
  NoOptionsMessage,
} from './CustomRender';
import {
  DropdownOption,
  LabelValue,
  OptionRendererProps,
  TagRendererProps,
} from './interfaces';

// css baseclass prefix
const prefix = 'tk-select';

export type DropdownProps<T> = {
  options: DropdownOption<T>[];
  defaultValue?: T;
  /** Enables the indicator to expand the Dropdown */
  displayArrowIndicator?: boolean;
  isDisabled?: boolean;
  id?: string;
  placeHolder?: string;
  label?: string;
  onBlur?: (e) => any;
  className?: string;
  /** Used to override the default appearance of the list items. */
  optionRenderer?:
    | React.Component<OptionRendererProps<T>, any>
    | React.FunctionComponent<OptionRendererProps<T>>;
  /** Used to override the default appearance of the dropdown select input item/s */
  tagRenderer?:
    | React.Component<TagRendererProps<T>, any>
    | React.FunctionComponent<TagRendererProps<T>>;
  /* It renders an icon on the left side of the dropdown input*/
  iconName?: string;
  /** Close the expanded menu when the user selects an option */
  closeMenuOnSelect?: boolean;
  /** Hide the selected option from the list */
  hideSelectedOptions?: boolean;
   /** Is the select value clearable */
  isInputClearable?: boolean;
  /** Allows the usage of the component in controlled value mode */
  value?: T;
  /** Decides if an item with data and current input value should be displayed in dropdown menu or not **/
  filterFunction?: (data: Option, inputValue: string) => boolean;
  /** Mesage to display if there isn't any match in the search input */
  noOptionMessage?: string;
} & (OnChangeMultiProps<T> | OnChangeSingleProps<T>);

type OnChangeMultiProps<T> = {
  /** Support multiple selected options */
  isMultiSelect: true;
  onChange?: (value: T[]) => any;
};
type OnChangeSingleProps<T> = {
  isMultiSelect?: false;
  onChange?: (value: T) => any;
};

type DropdownState<T> = {
  selectedOption: T;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  displayArrowIndicator?: boolean;
};

class Dropdown<T = LabelValue> extends React.Component<
  DropdownProps<T>,
  DropdownState<T>
> {
  state = {
    selectedOption: null,
    hideSelectedOptions:
      this.props?.isMultiSelect || !!this.props?.hideSelectedOptions,
    closeMenuOnSelect: !!(
      !this.props?.isMultiSelect || this.props?.closeMenuOnSelect
    ),
    displayArrowIndicator: !!(
      !this.props?.isMultiSelect || this.props?.displayArrowIndicator
    ),
  };

  handleChange = (selectedOption) => {
    if (this.props.onChange) {
      this.props.onChange(selectedOption);
    }
  };

  render() {
    const {
      hideSelectedOptions,
      closeMenuOnSelect,
      displayArrowIndicator,
    } = this.state;
    const {
      isMultiSelect,
      isDisabled,
      placeHolder,
      options,
      id,
      defaultValue,
      onBlur,
      isInputClearable,
      label,
      optionRenderer,
      iconName,
      tagRenderer,
      value,
      filterFunction,
      noOptionMessage,
    } = this.props;

    return (
      <div>
        <Select
          displayArrowIndicator={displayArrowIndicator}
          optionRenderer={optionRenderer}
          tagRenderer={tagRenderer}
          isClearable={isInputClearable}
          label={label}
          components={{
            DropdownIndicator,
            Control,
            SingleValue,
            Option: DefaultOptionRenderer,
            MultiValueContainer: MultiValueContainerOverride,
            MultiValue: DefaultTagRenderer,
            ClearIndicator,
            MultiValueRemove,
            NoOptionsMessage
          }}
          defaultValue={defaultValue}
          id={id}
          className={prefix}
          closeMenuOnSelect={closeMenuOnSelect}
          classNamePrefix={prefix}
          value={value}
          onChange={this.handleChange}
          onBlur={onBlur}
          options={options}
          hideSelectedOptions={hideSelectedOptions}
          placeholder={placeHolder}
          isMulti={isMultiSelect}
          isDisabled={isDisabled}
          iconName={iconName}
          filterOption={filterFunction}
          noOptionMessage={noOptionMessage}
          isSearchable
          menuIsOpen
        />
      </div>
    );
  }

  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    isInputClearable: false,
  };
}

export default Dropdown;
