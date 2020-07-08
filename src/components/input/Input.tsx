import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';
import { ValidatorFn } from 'core/validators/validators';
import InfoHint from '../info-hint';
import styled from 'styled-components';

type InputProps = {
  validator?: ValidatorFn | Array<ValidatorFn>;
  dirty?: boolean;
  touched?: boolean;
  label?: string;
  tooltip?: string;
  errors?: { [id: string]: string };
  onValidationChanged?: (boolean) => any;
  onChange?: (string) => any;
  value?: string;
  placeholder?: string;
};

const InputHeader = styled.div`
  display: flex;
  align-items: center;
`;

const InputTooltip = styled.div`
  display: inline-block;
  margin-left: auto;
`;

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
      Object.entries(errors).forEach(([errorId, errorVal]) => {
        if (errorVal) {
          errorMessages.push(this.props.errors[errorId]);
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
      tooltip,
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
        {this.props.label || this.props.tooltip ? (<InputHeader>
          {this.props.label ? (
            <label className="tk-label">{this.props.label}</label>
          ) : null}
          {this.props.tooltip ? (
            <InputTooltip><InfoHint title={this.props.tooltip}/></InputTooltip>
          ) : null}
        </InputHeader>) : null
        }
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
