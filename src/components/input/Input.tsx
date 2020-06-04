import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';
import { ValidatorFn } from 'core/validators/validators';

type InputProps = {
  validator?: ValidatorFn | Array<ValidatorFn>;
  dirty?: boolean;
  touched?: boolean;
  label?: string;
  errors?: { [id: string]: string };
  onValidationChanged?: (boolean) => any;
  onChange?: (string) => any;
  value?: string;
  placeholder?: string;
};

export default class Input extends React.Component<InputProps> {
  public state: any = {
    dirty: false,
    touched: false,
    value: this.props.value || ''
  };
  constructor(props) {
    super(props);
  }

  get touched() {
    return this.state.touched;
  }

  get dirty() {
    return this.state.dirty || this.props.dirty;
  }

  onChange(evt) {
    this.setState({ dirty: true, value: evt.target.value });
    if (this.props.onChange) {
      this.props.onChange(evt.target.value);
    }
  }

  onBlur(): void {
    this.setState({ touched: true });
  }

  validate(value: string): string[] {
    let errors;
    let valid = true;
    const errorMessages = [];
    if ((this.touched || this.dirty) && this.props.validator) {
      if (this.props.validator instanceof Array) {
        errors = this.props.validator
          .map(validator => validator(value))
          .reduce((prev, curr) => ({ ...prev, ...curr }), {});
      } else {
        errors = this.props.validator(value);
      }
      valid = !errors || isEmpty(errors);
      if (this.props.onValidationChanged) {
        this.props.onValidationChanged(valid);
      }
    }
    if (!valid && this.props.errors) {
      Object.entries(errors).forEach(entry => {
        if (entry[1]) {
          errorMessages.push(this.props.errors[entry[0]]);
        }
      });
    }
    return errorMessages;
  }

  render() {
    const errorMessages = this.validate(this.state.value);
    /* eslint-disable */
    const {
      touched,
      validator,
      dirty,
      label,
      errors,
      onValidationChanged,
      onChange,
      value,
      ...rest
    } = this.props;
    /* eslint-enable */
    return (
      <div
        className={classNames('tk-input-group', {
          'tk-input-group--error': errorMessages.length
        })}
      >
        {this.props.label ? (
          <label className="tk-label">{this.props.label}</label>
        ) : null}
        <input
          className="tk-input"
          value={this.state.value}
          onBlur={() => this.onBlur()}
          onChange={evt => this.onChange(evt)}
          {...rest}
        />
        {errorMessages.map((errMsg, i) => (
          <div className="tk-input-error" key={i}>
            {errMsg}
          </div>
        ))}
      </div>
    );
  }
}
