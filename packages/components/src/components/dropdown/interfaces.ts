import { CSSProperties } from 'react';
import { MenuPlacement } from 'react-select';
import Select from 'react-select';
import { HasTooltipProps } from '../tooltip/interfaces';
import { HasValidationProps } from '../validation/interfaces';
export interface OptionRendererProps<T> {
  data: T;
}

export type HTMLInputProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'onChange' | 'value' | 'size' | 'defaultValue'
>;

export interface TagRendererProps<T> extends OptionRendererProps<T> {
  remove: () => any;
}

export interface LabelValue<T = string, O = void> {
  label: string;
  value: T;
  data?: O; // Optional data
}

interface DropdownOptionsGroup<T> {
  label: string;
  options: T[];
}

export interface SearchHeaderOption {
  readonly searchHeader: boolean;
  readonly value: string;
}

export type DropdownState<T> = {
  selectedOption: T;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  displayArrowIndicator?: boolean;
  DropdownTag: Select | any;
};

export type DropdownOption<T> = T | DropdownOptionsGroup<T>;

type MultiModeProps<T> = {
  /** Support multiple selected options */
  isMultiSelect: true;
  defaultValue?: T[];
  value?: T[];
} & HasValidationProps<T[]>;

type SingleModeProps<T> = {
  isMultiSelect: false;
  /** Default value selected on the Dropdown */
  defaultValue?: T;
  /** Allows the usage of the component in controlled value mode */
  value?: T;
} & HasValidationProps<T>;

type AsyncProps<T> = {
  options?: undefined;
  /** Load the options that populate the dropdown from a returned promise */
  asyncOptions: (inputValue: string) => Promise<DropdownOption<T>[]>;
  /**
   * The default set of options to show before the user starts searching. When
   * set to `true`, the results for asyncOptions('') will be autoloaded.
   */
  defaultOptions?: DropdownOption<T>[] | boolean;
} & HasValidationProps<T>;

type CreatableProps<T> = {
  /** Decides if the user can create new options at runtime */
  addNewOptions?: boolean;
  /** Function returning the created option based on the input value */
  getNewOptionData?: (inputValue: string) => T,
  /** Function telling if the inputValue can be converted into a new option */
  isValidNewOption?: (inputValue: string, value: any[], options: DropdownOption<any>[]) => boolean,
} & HasValidationProps<T>;

type SyncProps<T> = {
  /** Array of options that populate the dropdown menu */
  options: DropdownOption<T>[];
  asyncOptions?: undefined;
  defaultOptions?: undefined;
} & HasValidationProps<T>;

export type MenuPortalProps = {
  /** Custom styles applied on menu portal */
  menuPortalStyles?: CSSProperties;
  /** Whether the menu should use a portal, and where it should attach */
  menuPortalTarget?: HTMLElement;
  /** Whether to block scroll events when the menu is open */
  menuShouldBlockScroll?: boolean;
};

export type DropdownProps<T> = {
  /** Allows to scroll automatically to selected option */
  autoScrollToCurrent?: boolean;
  /** Path in custom object to the unique identifier of the option */
  bindValue?: string;
  /** Path in custom object to the label of the option */
  bindLabel?: (option: any) => string;
  /** Blur the field when an item is selected */
  blurInputOnSelect?: boolean;
  /** Optional CSS class name for the dropdown container */
  className?: string;
  /** Close the expanded menu when the user selects an option */
  closeMenuOnSelect?: boolean;
  /** Enables the indicator to expand the Dropdown */
  displayArrowIndicator?: boolean;
  /** Display a fixed option on the header of the Dropdown with the searched term */
  enableTermSearch?: boolean;
  /** Decides if an item with data and current input value should be displayed in dropdown menu or not */
  filterFunction?: (data: T, inputValue: string) => boolean;
  /** Helper text for the dropdown */
  helperText?: string;
  /** Hide the selected option from the list */
  hideSelectedOptions?: boolean;
  /** If provided, it renders an icon on the left side of the dropdown input*/
  iconName?: string;
  id?: string;
  /** If provided, it decides if the input should always be displayed even if the option is selected*/
  inputAlwaysDisplayed?: boolean;
  /** The value of the search input */
  inputValue?: string;
  /** Used for async dropdowns, especially with initial values, should be true when 'value' field is correctly populated. */
  isInitialized?: boolean;
  /** Is the select value clearable */
  isInputClearable?: boolean;
  /** If false, user can not type on the control Input */
  isTypeAheadEnabled?: boolean;
  /** Decides if an item with data and current input value should be disabled in dropdown menu or not */
  isOptionDisabled?: (data: T) => boolean;
  /** Decides if an item with data and current input value should be selected in dropdown menu or not */
  isOptionSelected?: (data: T) => boolean;
  /** Is the dropdown disabled */
  isDisabled?: boolean;
  /** Label text for the dropdown */
  label?: string;
  /** Maximum height of the menu before scrolling */
  maxMenuHeight?: number;
  /** Max height of the select input before scrolling */
  maxHeight?: number;
  /** Whether the Dropdown menu is expanded */
  menuIsOpen?: boolean;
  /** Placement of the menu in relation to the control */
  menuPlacement?: MenuPlacement;
  /** Whether the Dropdown menu should scroll into view when pressed */
  menuShouldScrollIntoView?: boolean;
  /** Styling options depending on the need */
  mode?: 'nested' | 'aligned';
  name?: string;
  /** Mesage to display if there isn't any match in the search input */
  noOptionMessage?: string;
  /** Placeholder text for the dropdown */
  placeHolder?: string;
  /** Custom component used to override the default appearance of the list items. */
  optionRenderer?:
  | React.Component<OptionRendererProps<T>, any>
  | React.FunctionComponent<OptionRendererProps<T>>;
  /** Handle blur events on the control */
  onBlur?: (e) => any;
  /** Handle key down events on the select */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /** Handle key up events on the select */
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /** Handle change events on the input */
  onInputChange?: (string, any) => any;
  /** Handle clear event */
  onClear?: () => any;
  /** Handle focus event */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Handle the menu opening */
  onMenuOpen?: () => void;
  /** Handle the menu closing */
  onMenuClose?: () => void;
  /** Handle the selection of search by term option */
  onTermSearch?: (option: SearchHeaderOption) => any;
  /** Flag to show the label with a specific styling if the field is required */
  showRequired?: boolean;
  /** Size of the dropdown */
  size?: 'small' | 'medium' | 'large';
  /** Select the currently focused option when the user presses tab */
  tabSelectsValue?: boolean;
  /** Custom component used to override the default appearance of the dropdown select input item/s */
  tagRenderer?:
  | React.Component<TagRendererProps<T>, any>
  | React.FunctionComponent<TagRendererProps<T>>;
  /** Message to be display on the header of the menu list when searching by term */
  termSearchMessage?: ((term: string) => string) | string;
  /** Color variant of the dropdown */
  variant?: 'destructive';
} & HTMLInputProps &
  MenuPortalProps &
  HasTooltipProps &
  (MultiModeProps<T> | SingleModeProps<T>) &
  (AsyncProps<T> | SyncProps<T>) &
  CreatableProps<T>;
