/**
 * A ValidatorFn takes a value as a string and returns an error object {'validationName':true}
 * ex: Required => {'required':true}
 * Some Validators make generate several errors
 * ex: EmailOrUsername => {'email':true, 'username':true}
 * Validators could be combined using Combine validator
 * Returns null if no validation error
 */
export type ValidatorFn = (value: string) => { [id: string]: boolean } | null;

const Required: ValidatorFn = value => {
  if (!value) {
    return { required: true };
  }
  return null;
};

const Number: ValidatorFn = value => {
  if (isNaN(value as any)) {
    return { number: true };
  }
  return null;
};

const Pattern = (regex: string | RegExp) => {
  return value => {
    if (new RegExp(regex).test(value)) {
      return null;
    }
    return { pattern: true };
  };
};

export const Validators = { Required, Number, Pattern };
