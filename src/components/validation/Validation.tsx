import * as React from 'react';
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

type errorMessage = string | { [key: string]: string };

interface ValidationProps {
  onValidationChanged?: (isValid: boolean, errorsMap?: {[id:string] : boolean}) => void;
  validateOnInit?: string;
  validator?: ValidatorFn | ValidatorFn[];
  errorMessage?: errorMessage;
  errors?: errorMessage[];
}
interface ValidationPropsUncontrolled extends ValidationProps {
  validator: ValidatorFn | ValidatorFn[];
  errorMessage: errorMessage;
}
interface ValidationPropsControlled extends ValidationProps {
  errors: errorMessage[];
}

class Validation extends React.Component<ValidationPropsControlled | ValidationPropsUncontrolled> {
  public static propTypes = ValidationPropTypes;

  public state: any = {
    errors: [],
    isValid: null,
    lastValue: null,
  };

  componentDidMount() {
    if (this.props.validateOnInit || this.props.errors) {
      this.updateState(this.props.validateOnInit);
    }
    if(this.props.errors && (this.props.errorMessage || this.props.validator) ) {
      throw new Error (`The Validation Component 'props' are not compatible. You can either use the Validation Component on a Controlled mode or Uncontrolled. \n
      For Uncontrolled mode use: errorMessage and validator 'props'.\n
      For Controlled mode use: errors 'props'.\n `); 
    }
  }

  /**
   * Return the child component.
   * The onChange and onBlur methods are wrapped to call the validate method
   * @param child A React Element
   */
  private getChildWithValidation(child) {
    if (!React.isValidElement(child)) {
      console.error('Child is not a valid React element', child);
    }
    return React.cloneElement(child as any, {
      onChange: (event: any) => {
        this.updateState(event.target.value);
        if (child.props.onChange) {
          child.props.onChange(event);
        }
      },
      onBlur: (event: any) => {
        this.updateState(event.target.value);
        if (child.props.onBlur) {
          child.props.onBlur(event);
        }
      },
    });
  }

  public async updateState(value: string): Promise<string[]> {
    let errorsMap;
    let valid = true;
    let errorMessages = [];
    let validationResults;
    if (this.props.validator) {
      if (this.props.validator instanceof Array) {
        validationResults = await Promise.all(
          this.props.validator.map((validator) => validator(value))
        );
        errorsMap = validationResults.reduce((prev, curr) => ({ ...prev, ...curr }), {});
      } else {
        errorsMap = await this.props.validator(value);
      }
      valid = !errorsMap || isEmpty(errorsMap);
      if (this.props.onValidationChanged && valid !== this.state.isValid) {
        this.props.onValidationChanged(valid, errorsMap);
      }
    }
    if (!valid && this.props.errorMessage) {
      Object.entries(errorsMap).forEach(([errorId, errorVal]) => {
        if (errorVal) {
          if (this.props.errorMessage instanceof Object) {
            errorMessages.push(this.props.errorMessage[errorId]);
          } else {
            errorMessages.push(this.props.errorMessage);
          }
        }
      });
    }
    if(this.props.errors) {
      errorMessages = this.props.errors;
    }
    this.setState({ isValid: valid, errors: errorMessages, lastValue: value });
    return errorMessages;
  }

  /**
   * Reset to default value and reset errors
   */
  public reset(): void {
    this.setState({ isValid: null, errors: [] });
  }

  /**
   * Force validation to refresh, and return isValid state when triggered (used in Elements form before submission)
   */
  public async refreshValidation(): Promise<boolean> {
    await this.updateState(this.state.lastValue);
    return this.state.isValid;
  }

  render() {
    const { children } = this.props;

    let childWithValidation;
    if (React.Children.count(children) === 0) {
      console.error('The Validation component requires one child component.');
    } else if (React.Children.count(children) > 1) {
      console.error(
        `The Validation component can wrap only one component. Found: ${React.Children.count(
          children
        )}`,
        children
      );
    } else {
      const child = React.Children.only(children);
      childWithValidation = this.props.validator ? this.getChildWithValidation(child) : child;
    }

    return (
      <span
        className={classNames('tk-validation', {
          'tk-validation--error': this.state.errors && this.state.errors.length,
        })}
      >
        {childWithValidation}
        {this.state.errors && this.state.errors.length ? (
          <ul className="tk-validation__errors">
            {this.state.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        ) : null}
      </span>
    );
  }
}

export default Validation;
