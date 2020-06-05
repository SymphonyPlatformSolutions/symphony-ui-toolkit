/**
 * A ValidatorFn takes a value as a string and returns an error object {'validationName':true}
 * ex: Required => {'required':true}
 * Some Validators make generate several errors
 * ex: EmailOrUsername => {'email':true, 'username':true}
 * Validators could be combined using Combine validator
 * Returns null if no validation error
 */
export type ValidatorFn = (value: string) => { [id: string]: boolean } | null;

/**
 * Checks if a mandatory value isn't empty , returns {required:true} if error, return null if it's not empty
 * @param value Value to test
 */
const Required: ValidatorFn = value => {
  if (!value) {
    return { required: true };
  }
  return null;
};

/**
 * Checks if a provided value is a number , returns {number:true} if not a number, return null number
 * @param value Value to test
 */
const Number: ValidatorFn = value => {
  if (isNaN(value as any)) {
    return { number: true };
  }
  return null;
};

/**
 * Factory that returns a validator to test if value matches the provided pattern
 * Return {pattern:true} if no match,
 * @param value Value to test
 */
const Pattern = (regex: string | RegExp) => {
  return value => {
    if (new RegExp(regex).test(value)) {
      return null;
    }
    return { pattern: true };
  };
};

export const Validators = { Required, Number, Pattern };
