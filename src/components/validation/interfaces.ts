export enum ACTION {
  RESET = 'reset',
  ON_INIT = 'onInit',
  ON_CHANGE = 'onChange',
}

export type EventWithValue<T> = {
  target: { value: T };
};

export type ErrorMessages = string | { [key: string]: string };

// Every component that want to be compatible with Validation Component should use this HasValidationProps props
export type HasValidationProps<T> = {
  onChange?: (event: EventWithValue<T>) => any;
  onBlur?: (event: EventWithValue<T>) => any;
  onInit?: (value: T) => any;
  onValidationChanged?: (errors: ErrorMessages) => any;
};
