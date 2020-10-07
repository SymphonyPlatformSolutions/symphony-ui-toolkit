import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import { ValidatorFn } from '../../core/validators/validators';

const ValidationPropTypes = {
  validator: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  onValidationChanged: PropTypes.func,
  validateOnInit: PropTypes.string,
};

interface ValidationProps {
  validator: ValidatorFn | ValidatorFn[];
  errorMessage: string | { [key: string]: string };
  onValidationChanged?: (isValid: boolean) => void;
  validateOnInit?: string;
}

const Validation: React.FC<ValidationProps> = ({
  validator,
  errorMessage,
  onValidationChanged,
  validateOnInit,
  ...otherProps
}) => {
  const [errors, setErrors] = useState([]);
  const [isValid, setValid] = useState(null);
  const validate = async (value: string): Promise<string[]> => {
    let errors;
    let valid = true;
    const errorMessages = [];
    if (validator) {
      if (validator instanceof Array) {
        const errorsMap = await Promise.all(
          validator.map((validator) => validator(value))
        );
        errors = errorsMap.reduce((prev, curr) => ({ ...prev, ...curr }), {});
      } else {
        errors = await validator(value);
      }
      valid = !errors || isEmpty(errors);
      if (onValidationChanged && valid !== isValid) {
        setValid(valid);
        onValidationChanged(valid);
      }
    }
    if (!valid && errorMessage) {
      Object.entries(errors).forEach(([errorId, errorVal]) => {
        if (errorVal) {
          if (errorMessage instanceof Object) {
            errorMessages.push(errorMessage[errorId]);
          } else {
            errorMessages.push(errorMessage);
          }
        }
      });
    }
    setErrors(errorMessages);
    return errorMessages;
  };

  const getChildWithValidation = (child) => {
    if (!React.isValidElement(child)) {
      console.error('Child is not a valid React element', child);
    }
    return React.cloneElement(child as any, {
      onChange: (value) => {
        validate(value as any);
        if (child.props.onChange) {
          child.props.onChange(value);
        }
      },
      onBlur: (event: any) => {
        validate(event.target.value);
        if (child.props.onBlur) {
          child.props.onBlur(event);
        }
      },
    });
  };

  let childWithValidation;
  if (React.Children.count(otherProps.children) === 0) {
    console.error('The Validation component requires one child component.');
  } else if (React.Children.count(otherProps.children) > 1) {
    console.error(
      `The Validation component can wrap only one component. Found: ${React.Children.count(
        otherProps.children
      )}`,
      otherProps.children
    );
  } else {
    const child = React.Children.only(otherProps.children);
    childWithValidation = getChildWithValidation(child);
  }

  if (validateOnInit !== null && validateOnInit !== undefined) {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      validate(validateOnInit);
    }, [validateOnInit]);
  }

  return (
    <span
      className={classNames('tk-validation', {
        'tk-validation--error': errors && errors.length,
      })}
    >
      {childWithValidation}
      {errors ? (
        <ul className="tk-validation__errors">
          {errors.map((error, index) => (
            <li className="tk-validation__error" key={index}>
              {error}
            </li>
          ))}
        </ul>
      ) : null}
    </span>
  );
};

Validation.propTypes = ValidationPropTypes;

export default Validation;
