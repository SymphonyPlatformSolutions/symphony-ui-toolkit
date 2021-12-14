import * as React from 'react';
import { CSSProperties } from 'react';
import Select, { ActionMeta, createFilter } from 'react-select';
import AsyncSelect from 'react-select/async';
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
  firstOption
} from './CustomRender';
import {
  DropdownOption,
  DropdownState,
  DropdownProps,
  LabelValue,
} from './interfaces';
import LabelTooltipDecorator from '../label-tooltip-decorator/LabelTooltipDecorator';
import classNames from 'classnames';

// css baseclass prefix
const prefix = 'tk-select';

export class Dropdown<T = LabelValue> extends React.Component<
  DropdownProps<T>,
  DropdownState<T>
> {
  myRef: any;
  searchHeaderOption: any;
  lastSelectedOption: any;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.searchHeaderOption = { ...firstOption };
    this.state = {
      DropdownTag: this.props.options ? Select : AsyncSelect,
      selectedOption: null,
      hideSelectedOptions:
        this.props.hideSelectedOptions === undefined
          ? this.props?.isMultiSelect
          : this.props.hideSelectedOptions,
      closeMenuOnSelect:
        this.props.closeMenuOnSelect === undefined
          ? !this.props?.isMultiSelect
          : this.props.closeMenuOnSelect,
      displayArrowIndicator:
        this.props.displayArrowIndicator === undefined
          ? !this.props?.isMultiSelect
          : this.props.displayArrowIndicator,
    };
  }

  componentDidMount() {
    const { onInit, value } = this.props;
    if (onInit && value) {
      onInit(value as any);
    }
  }

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

  private internalFiltering = this.props.filterFunction
    ? (o, input) => this.props.filterFunction(o.data, input)
    : createFilter(null);

  private filter = (o, input) => {
    return o.data.searchHeader || this.internalFiltering(o, input);
  };

  handleIsOptionDisabled = this.props.isOptionDisabled
    ? (option: any) => this.props.isOptionDisabled(option.data)
    : undefined;

  handleIsOptionSelected = this.props.isOptionSelected
    ? (option: any) => this.props.isOptionSelected(option.data)
    : (option: DropdownOption<T>, selectValue: T[]) => selectValue?.some(i => i === option);

  get internalOptions() {
    if (this.props?.options) {
      return this.props.enableTermSearch
        ? [this.searchHeaderOption as T, ...this.props.options]
        : this.props.options;
    }
  }

  internalAsyncOptions = async (inputValue: string) => {
    return this.props?.asyncOptions(inputValue)
      .then(options => new Promise(resolve =>
        resolve(this.props.enableTermSearch ?
          [this.searchHeaderOption as T, ...options]
          : options))
      )
  }

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
      autoScrollToCurrent,
      blurInputOnSelect,
      className,
      defaultOptions,
      defaultValue,
      enableTermSearch,
      iconName,
      id,
      inputAlwaysDisplayed,
      inputValue,
      isDisabled,
      isInputClearable,
      isMultiSelect,
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
      onCopy,
      onCut,
      onDrag,
      onFocus,
      onInputChange,
      onKeyDown,
      onKeyUp,
      onMenuOpen,
      onMenuClose,
      optionRenderer,
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
      <div className={classNames(className, 'tk-input-group', `tk-input-group--${size}`)}>
        <DropdownTag
          {...otherProps}
          styles={{
            menuPortal: (base: CSSProperties) => ({ ...base, ...menuPortalStyles }),
            valueContainer: (base: CSSProperties) => ({
              ...base, maxHeight: `${maxHeight}px`
            }),
            input: (base: CSSProperties) => ({...base, margin: (size === 'small') ? '0 2px' : undefined, color: 'inherit'}),
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
            LoadingMessage
          }}
          defaultValue={defaultValue}
          id={id}
          name={name}
          className={classNames(prefix, {[`${prefix}--${variant}`]: variant}, {[`${prefix}--${size}`]: size})}
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
          onKeyDown={onKeyDown}
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
          blurInputOnSelect={blurInputOnSelect}
          menuPortalTarget={menuPortalTarget}
          menuShouldBlockScroll={menuShouldBlockScroll}
          menuShouldScrollIntoView={menuShouldScrollIntoView}
        />
        <LabelTooltipDecorator
          htmlFor={id}
          label={label}
          placement={'top'}
          tooltip={tooltip}
          tooltipCloseLabel={tooltipCloseLabel}
          showRequired={showRequired}
        />
      </div>
    );
  }

  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    isInputClearable: false,
    isTypeAheadEnabled: true,
    autoScrollToCurrent: false,
    enableTermSearch: false,
    menuPlacement: 'auto',
    menuPortalStyles: {},
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: true,
    size: 'medium'
  };
}

export default Dropdown;
