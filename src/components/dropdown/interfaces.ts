export interface OptionRendererProps<T> {
  data: T;
}

export interface TagRendererProps<T> extends OptionRendererProps<T> {
  remove: () => any;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface DropdownOptionsGroup<T> {
  label: string;
  options : T[];
}

export type DropdownOption<T> = T | DropdownOptionsGroup<T>;