import { safeRegexExecute } from './patternValidator/safeRegexExecute';

/**
 * A ValidatorFn takes a value as a string and returns an error object {'validationName':true}
 * ex: Required => {'required':true}
 * Some Validators make generate several errors
 * ex: EmailOrUsername => {'email':true, 'username':true}
 * Validators could be combined using Combine validator
 * Returns null if no validation error
 */
export type ValidatorFn = (value: string) => Promise<{ [id: string]: boolean }> | Promise<null>;

/**
 * Checks if a mandatory value isn't empty , returns {required:true} if error, return null if it's not empty
 * @param value Value to test
 */
const Required: ValidatorFn = value => {
  if (!value) {
    return Promise.resolve({ required: true });
  }
  return Promise.resolve(null);
};

/**
 * Checks if a provided value has the minimum length, returns {minlength:true} if error, return null if value has the minimum length
 * @param value Value to test
 */
const MinLength = (minlength: Number): ValidatorFn => {
  return value => {
    if (minlength <= value.length) {
      return Promise.resolve(null);
    }
    return Promise.resolve({ minlength: true });
  };
};

/**
 * Checks if a provided value is a number , returns {number:true} if not a number, return null if number
 * @param value Value to test
 */
const Number: ValidatorFn = value => {
  if (isNaN(value as any)) {
    return Promise.resolve({ number: true });
  }
  return Promise.resolve(null);
};

/**
 * Factory that returns a validator to test if value matches the provided pattern
 * Return {pattern:true} if no match,
 * @param value Value to test
 */
const Pattern = (regex: string | RegExp): ValidatorFn => {
  return async (value) => {
    const regexMatch = await safeRegexExecute(regex, value);
    if (!regexMatch) {
      return Promise.resolve({ pattern: true });
    }
    return Promise.resolve(null);
  };
};

export const Validators = { Required, MinLength, Number, Pattern };
