export enum ACTION {
  RESET = 'reset',
  ON_INIT = 'onInit',
  ON_CHANGE = 'onChange',
}

export type EventWithValue<T, U = Record<string, unknown>> = {
  target: { value: T } & U;
};

export type ErrorMessages = string | { [key: string]: string };

// Every component that want to be compatible with Validation Component should use this HasValidationProps props
export type HasValidationProps<T, U = Record<string, unknown>> = {
  onChange?: (event: EventWithValue<T, U>) => any;
  onBlur?: (event: EventWithValue<T, U>) => any;
  onInit?: (value: T) => any;
  onValidationChanged?: (errors: ErrorMessages) => any;
};
