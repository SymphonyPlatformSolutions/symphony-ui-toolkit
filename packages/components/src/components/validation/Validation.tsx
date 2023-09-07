import classNames from 'classnames';
import { debounce, isEmpty } from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ValidatorFn, Validators } from '../../core/validators/validators';
import { ACTION, ErrorMessages } from './interfaces';

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
  children?: React.ReactNode;
  onValidationChanged?: (
    isValid: boolean,
    errorsMap?: { [id: string]: boolean }
  ) => void;
  validateOnInit?: string;
  validator?: ValidatorFn | ValidatorFn[];
  errorMessage?: ErrorMessages;
  errors?: string[];
}
interface ValidationPropsUncontrolled extends ValidationProps {
  validator: ValidatorFn | ValidatorFn[]; // object of {'error name1': boolean, 'error name2': boolean, ...}
  errorMessage: ErrorMessages; // dictionary of {'error name1': 'error text1', 'error name2': 'error text2', ...}
}
interface ValidationPropsControlled extends ValidationProps {
  errors: string[]; // list of ['error text1', 'error text2'] to display
}

class Validation extends React.Component<
  ValidationPropsControlled | ValidationPropsUncontrolled | ValidationProps
> {
  public static propTypes = ValidationPropTypes;

  public state: any = {
    errors: [],
    errorsChildMap: null,
    isValid: null,
    initialValue: null,
    lastValue: null,
    lastAction: null,
  };

  private debouncedUpdateState = debounce(this.updateState);

  componentDidMount() {
    if (this.props.validateOnInit || this.props.errors) {
      this.updateState(this.props.validateOnInit);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // call updateState whenever value or errorsChildMap change
    if (
      this.state.lastAction !== ACTION.RESET &&
      this.state.lastAction !== ACTION.ON_INIT &&
      (prevState.lastValue !== this.state.lastValue ||
        prevState.errorsChildMap !== this.state.errorsChildMap)
    ) {
      this.debouncedUpdateState(this.state.lastValue);
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
      onInit: (value: any) => {
        this.setState({
          initialValue: value,
          lastValue: value,
          lastAction: ACTION.ON_INIT,
        });
        if (child.props.onInit) {
          child.props.onInit(value);
        }
      },
      onChange: (event: any) => {
        this.setState({
          lastValue: event.target.value,
          lastAction: ACTION.ON_CHANGE,
        });
        if (child.props.onChange) {
          child.props.onChange(event);
        }
      },
      onBlur: async (event: any) => {
        // on blur should not change the value 
        this.debouncedUpdateState(this.state.lastValue);
        if (child.props.onBlur) {
          child.props.onBlur(event);
        }
      },
      onValidationChanged: (errorsChildMap: ErrorMessages) => {
        this.setState({ errorsChildMap });
      },
    });
  }

  public async updateState(value: string): Promise<string[]> {
    let errorsMap = {};
    let valid = true;
    let errors = [];
    let validationResults;
    if (this.props.validator) {
      if (this.props.validator instanceof Array) {
        validationResults = await Promise.all(
          this.props.validator.map((validator) => validator(value))
        );
        errorsMap = validationResults.reduce(
          (prev, curr) => ({ ...prev, ...curr }),
          {}
        );
      } else {
        errorsMap = await this.props.validator(value);
      }
    }

    valid = (!errorsMap || isEmpty(errorsMap)) && !this.state.errorsChildMap;
    if (this.props.onValidationChanged && valid !== this.state.isValid) {
      this.props.onValidationChanged(valid, errorsMap);
    }

    // compute props errors
    if (!valid && this.props.errorMessage) {
      Object.entries(errorsMap).forEach(([errorId, errorVal]) => {
        if (errorVal) {
          if (this.props.errorMessage instanceof Object) {
            errors.push(this.props.errorMessage[errorId]);
          } else {
            errors.push(this.props.errorMessage);
          }
        }
      });
    }

    // compute child errors
    if (!valid && this.state.errorsChildMap) {
      Object.entries(this.state.errorsChildMap).forEach(
        ([errorId, errorVal]) => {
          if (errorVal) {
            if (
              this.props.errorMessage instanceof Object &&
              this.props.errorMessage[errorId]
            ) {
              // get message error from props if exists in errorMessage
              errors.push(this.props.errorMessage[errorId]);
            } else {
              // otherwise display the default one
              errors.push(errorVal);
            }
          }
        }
      );
    }

    if (this.props.errors) {
      errors = this.props.errors;
    }
    // don't change the value here otherwise there are risks we get into an infinite loop
    this.setState({ isValid: valid, errors });
    return errors;
  }

  /**
   * Reset to default value and reset errors
   */
  public reset(): void {
    this.setState({
      lastValue: this.state.initialValue,
      lastAction: ACTION.RESET,
      isValid: null,
      errors: [],
      errorsChildMap: null,
    });
  }

  /**
   * Force validation to refresh, and return isValid state when triggered (used in Elements form before submission)
   */
  public async refreshValidation(): Promise<boolean> {
    await this.updateState(this.state.lastValue);
    return this.state.isValid;
  }

  render() {
    const { children, validator } = this.props;

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
      childWithValidation = this.getChildWithValidation(child);
    }

    const size = childWithValidation?.props?.['size']; // Experimental - Put itself automatically in small variant if the child is small
    const hasErrors = this.state.errors && this.state.errors.length;

    // aria-label to true if Validation contains a Required
    const ariaRequired = validator instanceof Array ? !!validator.find(v => v === Validators.Required) : validator === Validators.Required;
    return (
      <span
        className={classNames('tk-validation', {
          'tk-validation--error': hasErrors,
          [`tk-validation--${size}`]: size,
        })}
        aria-required={ariaRequired}
      >
        {childWithValidation}
        {hasErrors ? (
          <ul className="tk-validation__errors">
            {this.state.errors.map((error, index) => (
              <li key={index} aria-errormessage={error}>{error}</li>
            ))}
          </ul>
        ) : null}
      </span>
    );
  }
}

export default Validation;
