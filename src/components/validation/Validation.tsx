import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';

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
};

const Validation = ({
  validator,
  errorMessage,
  onValidationChanged,
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

  const childrenWithValidation = React.Children.map(
    otherProps.children,
    (child) => {
      if (!React.isValidElement(child)) {
        console.error('Child is not a valid React element', child);
      }
      return React.cloneElement(child, {
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
    }
  );

  return (
    <span
      className={classNames('tk-validation', {
        'tk-validation--error': errors && errors.length,
      })}
    >
      {childrenWithValidation}
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
