import * as React from 'react';
import { CSSProperties } from 'react';
import Select, { ActionMeta, createFilter } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';

import {
  ClearIndicator,
  Control,
  DefaultOptionRenderer,
  DefaultTagRenderer,
  DropdownIndicator,
  Input,
  MultiValueContainerOverride,
  SingleValue,
  NoOptionsMessage,
  DropdownList,
  LoadingMessage,
  firstOption,
} from './CustomRender';
import {
  DropdownOption,
  DropdownState,
  DropdownProps,
  LabelValue,
} from './interfaces';
import LabelTooltipDecorator from '../label-tooltip-decorator/LabelTooltipDecorator';
import { clsx } from 'clsx';
import { Keys } from '../common/eventUtils';

// css baseclass prefix
const prefix = 'tk-select';

export class Dropdown<T = LabelValue> extends React.Component<
  DropdownProps<T>,
  DropdownState<T>
> {
  myRef: any;
  searchHeaderOption: any;
  lastSelectedOption: any;
  onInitCalled: boolean = false;

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.searchHeaderOption = { ...firstOption };

    const {
      asyncOptions,
      addNewOptions,
      isMultiSelect,
      hideSelectedOptions,
      closeMenuOnSelect,
      displayArrowIndicator,
    } = this.props;

    this.state = {
      DropdownTag: this.getDropdownTag(asyncOptions, addNewOptions),
      selectedOption: null,
      hideSelectedOptions: hideSelectedOptions || isMultiSelect,
      closeMenuOnSelect: closeMenuOnSelect || !isMultiSelect,
      displayArrowIndicator: displayArrowIndicator || !isMultiSelect,
    };
  }

  componentDidMount() {
    const { onInit, value, isInitialized } = this.props;
    if (!this.onInitCalled && isInitialized !== false && onInit && value) {
      onInit(value as any);
      this.onInitCalled = true;
    }
  }

  componentDidUpdate() {
    const { onInit, value, isInitialized } = this.props;
    if (!this.onInitCalled && !!isInitialized && onInit && value) {
      onInit(value as any);
      this.onInitCalled = true;
    }
  }

  getDropdownTag = (asyncOptions, addNewOptions) => {
    let DropdownTag: any = Select;
    if (asyncOptions && !addNewOptions) {
      DropdownTag = AsyncSelect;
    } else if (asyncOptions && addNewOptions) {
      DropdownTag = AsyncCreatableSelect;
    } else if (!asyncOptions && addNewOptions) {
      DropdownTag = CreatableSelect;
    }
    return DropdownTag;
  };

  handleChange = (selectedOption, meta: ActionMeta<T>) => {
    const isClearingTermSearch =
      this.lastSelectedOption === this.searchHeaderOption && !selectedOption;
    this.lastSelectedOption = selectedOption;
    if (
      this.props.onChange &&
      !selectedOption?.searchHeader &&
      !isClearingTermSearch
    ) {
      this.props.onChange({ target: { value: selectedOption } });
    }
    if (this.props.onTermSearch && selectedOption?.searchHeader) {
      this.props.onTermSearch(selectedOption);
    }
    if (meta.action === 'clear' && this.props.onClear) {
      this.props.onClear();
    }
  };

  handleBlur = () => {
    const { value } = this.props;
    if (this.props.onBlur) {
      this.props.onBlur({ target: { value: value as any } });
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // also open menu with 'enter' key (not supported in the default react-select behavior)
    if (
      (e.target as HTMLElement).nodeName === 'INPUT' &&
      e.key === Keys.ENTER
    ) {
      this.myRef.current.setState({ menuIsOpen: true });
    } else if (
      (e.target as HTMLElement).nodeName === 'INPUT' &&
      e.key === Keys.ESC
    ) {
      // Avoid closing modal containing the dropdown when closing the dropdown via ESC
      if (this.myRef.current.state.menuIsOpen) {
        e.stopPropagation();
      }
    }

    this.props.onKeyDown?.(e);
  };

  private internalFiltering = this.props.filterFunction
    ? (o, input) => this.props.filterFunction(o.data, input)
    : createFilter(null);

  private filter = (o, input) => {
    return o.data.searchHeader || this.internalFiltering(o, input);
  };

  handleIsOptionDisabled = this.props.isOptionDisabled
    ? (option: T) => this.props.isOptionDisabled(option)
    : undefined;

  handleIsOptionSelected = this.props.isOptionSelected
    ? (option: T) => this.props.isOptionSelected(option)
    : (option: DropdownOption<T>, selectValue: T[]) =>
      selectValue?.some((i) => i === option);

  get internalOptions() {
    if (this.props?.options) {
      return this.props.enableTermSearch
        ? [this.searchHeaderOption as T, ...this.props.options]
        : this.props.options;
    }
  }

  internalAsyncOptions = async (inputValue: string) => {
    return this.props
      ?.asyncOptions(inputValue)
      .then(
        (options) =>
          new Promise((resolve) =>
            resolve(
              this.props.enableTermSearch
                ? [this.searchHeaderOption as T, ...options]
                : options
            )
          )
      );
  };

  bindValue = this.props.bindValue
    ? (option) => option[this.props.bindValue]
    : undefined;

  render() {
    const {
      hideSelectedOptions,
      closeMenuOnSelect,
      displayArrowIndicator,
      DropdownTag,
    } = this.state;

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      addNewOptions,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      asyncOptions,
      autoScrollToCurrent,
      bindLabel,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      bindValue,
      blurInputOnSelect,
      className,
      defaultOptions,
      defaultValue,
      enableTermSearch,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      filterFunction,
      iconName,
      id,
      inputAlwaysDisplayed,
      inputValue,
      isDisabled,
      isInputClearable,
      isMultiSelect,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isOptionDisabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isOptionSelected,
      isTypeAheadEnabled,
      label,
      maxHeight,
      maxMenuHeight,
      menuIsOpen,
      menuPlacement,
      menuPortalStyles,
      menuPortalTarget,
      menuShouldBlockScroll,
      menuShouldScrollIntoView,
      mode,
      name,
      noOptionMessage,
      placeHolder,
      helperText,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onBlur,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClear,
      onCopy,
      onCut,
      onDrag,
      onFocus,
      onInputChange,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onKeyDown,
      onKeyUp,
      onMenuOpen,
      onMenuClose,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onTermSearch,
      optionRenderer,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      options,
      showRequired,
      size,
      tabSelectsValue,
      tagRenderer,
      termSearchMessage,
      tooltip,
      tooltipCloseLabel,
      value,
      variant,
      ...otherProps
    } = this.props;

    return (
      <div
        className={clsx(
          className,
          'tk-input-group',
          `tk-input-group--${size}`,
          {
            'tk-input-group--disabled': isDisabled,
          }
        )}
      >
        <DropdownTag
          styles={{
            menuPortal: (base: CSSProperties) => ({
              ...base,
              ...menuPortalStyles,
            }),
            valueContainer: (base: CSSProperties) => ({
              ...base,
              maxHeight: `${maxHeight}px`,
            }),
            input: (base: CSSProperties) => ({
              ...base,
              margin: size === 'small' ? '0 2px' : undefined,
              color: 'inherit',
            }),
            multiValue: (base: CSSProperties) => ({ ...base, margin: '0' }),
          }}
          parentInstance={this}
          ref={this.myRef}
          selectRef={this.myRef}
          displayArrowIndicator={displayArrowIndicator}
          optionRenderer={optionRenderer}
          tagRenderer={tagRenderer}
          isClearable={isInputClearable}
          components={{
            DropdownIndicator,
            Control,
            SingleValue,
            Input,
            Option: DefaultOptionRenderer,
            MultiValueContainer: MultiValueContainerOverride,
            MultiValue: DefaultTagRenderer,
            ClearIndicator,
            MultiValueRemove: () => null,
            NoOptionsMessage,
            MenuList: DropdownList,
            LoadingIndicator: () => null,
            LoadingMessage,
          }}
          defaultValue={defaultValue}
          id={id}
          label={label}
          name={name}
          className={clsx(
            prefix,
            { [`${prefix}--${variant}`]: variant },
            { [`${prefix}--${size}`]: size }
          )}
          closeMenuOnSelect={closeMenuOnSelect}
          classNamePrefix={prefix}
          value={value}
          inputValue={inputValue}
          inputAlwaysDisplayed={inputAlwaysDisplayed}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onCopy={onCopy}
          onCut={onCut}
          onDrag={onDrag}
          onFocus={onFocus}
          onInputChange={onInputChange}
          onKeyDown={this.handleKeyDown}
          onKeyUp={onKeyUp}
          options={this.internalOptions}
          loadOptions={this.internalAsyncOptions}
          defaultOptions={defaultOptions !== undefined ? defaultOptions : true}
          hideSelectedOptions={hideSelectedOptions}
          placeholder={placeHolder}
          isMulti={isMultiSelect}
          isDisabled={isDisabled}
          iconName={iconName}
          noOptionMessage={noOptionMessage}
          filterOption={this.filter}
          isSearchable={isTypeAheadEnabled}
          isOptionDisabled={this.handleIsOptionDisabled}
          isOptionSelected={this.handleIsOptionSelected}
          menuPlacement={menuPlacement}
          maxMenuHeight={maxMenuHeight}
          mode={mode ? mode : 'aligned'}
          autoScrollToCurrent={autoScrollToCurrent}
          menuIsOpen={menuIsOpen}
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          tabSelectsValue={tabSelectsValue}
          enableTermSearch={enableTermSearch}
          termSearchMessage={termSearchMessage}
          getOptionValue={this.bindValue}
          getOptionLabel={bindLabel}
          blurInputOnSelect={blurInputOnSelect}
          menuPortalTarget={menuPortalTarget}
          menuShouldBlockScroll={menuShouldBlockScroll}
          menuShouldScrollIntoView={menuShouldScrollIntoView}
          {...otherProps}
        />
        <LabelTooltipDecorator
          htmlFor={id}
          label={label}
          placement={'top'}
          tooltip={tooltip}
          tooltipCloseLabel={tooltipCloseLabel}
          showRequired={showRequired}
        />
        {helperText && <div id={`${id}-input__helper`} className="tk-input__helper">{helperText}</div>}
      </div>
    );
  }

  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    addNewOptions: false,
    isInputClearable: false,
    isTypeAheadEnabled: true,
    autoScrollToCurrent: false,
    enableTermSearch: false,
    menuPlacement: 'auto',
    menuPortalStyles: {},
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: true,
    size: 'medium',
    bindLabel: (option) => option?.label,
  };
}

export default Dropdown;
