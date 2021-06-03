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

 interface DropdownOptionsGroup<T> {
  label: string;
  options : T[];
}

export interface SearchHeaderOption {
  readonly searchHeader: boolean;
  readonly value: string;
}

export type DropdownOption<T> = T | DropdownOptionsGroup<T>;

export const firstOption: Readonly<SearchHeaderOption> = {
  searchHeader: true,
  value: '',
};