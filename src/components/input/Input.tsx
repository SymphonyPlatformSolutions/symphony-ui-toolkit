import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';
import { ValidatorFn } from 'core/validators/validators';
import Icon from '../icon';
import shortid from 'shortid';
import styled from 'styled-components';

type InputProps = {
  validator?: ValidatorFn | Array<ValidatorFn>;
  dirty?: boolean;
  touched?: boolean;
  label?: string;
  tooltip?: string;
  tooltipCloseLabel?: string;
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
  font-size: 16px;
`;

export default class Input extends React.Component<InputProps> {
  private ariaId: string;

  public state: any = {
    dirty: false,
    touched: false,
    value: this.props.value || '',
    errorMessages: []
  };
  constructor(props) {
    super(props);
    this.ariaId = `hint-${shortid.generate()}`;
  }

  get touched() {
    return this.state.touched;
  }

  get dirty() {
    return this.state.dirty || this.props.dirty;
  }

  componentWillMount() {
    const { dirty, touched } = this.props;
    if (dirty || touched) {
      this.validateAndUpdateState(this.state.value);
    }
  }

  componentDidUpdate(prevProps) {
    const { dirty, touched } = this.props;
    
    const isDirtyUpdate = dirty && prevProps.dirty !== dirty;
    const isTouchedUpdate = touched && prevProps.touched !== touched;
    if (isDirtyUpdate || isTouchedUpdate) {
      this.validateAndUpdateState(this.state.value);
    }
  }

  onChange(evt) {
    const newValue = evt.target.value;
    this.setState({ dirty: true, value: newValue });
    this.validateAndUpdateState(newValue);
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  onBlur(): void {
    this.setState({ touched: true });
    this.validateAndUpdateState(this.state.value);
  }

  validateAndUpdateState(value: string): void {
    this.validate(value).then(errorMessages => {
      this.setState({ errorMessages });
    });
  }

  async validate(value: string): Promise<string[]> {
    let errors;
    let valid = true;
    const errorMessages = [];
    if (this.props.validator) {
      if (this.props.validator instanceof Array) {
        const errorsMap = await Promise.all(
          this.props.validator.map(validator => validator(value))
        );
        errors = errorsMap.reduce((prev, curr) => ({ ...prev, ...curr }), {});
      } else {
        errors = await this.props.validator(value);
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
    const {
      touched,
      validator,
      dirty,
      label,
      tooltip,
      tooltipCloseLabel,
      errors,
      onValidationChanged,
      onChange,
      value,
      ...rest
    } = this.props;

    const { errorMessages } = this.state;
    return (
      <div
        className={classNames('tk-input-group', {
          'tk-input-group--error': errorMessages.length,
        })}
      >
        {label || tooltip ? (
          <InputHeader className="tk-input-group__header">
            {label ? <label className="tk-label">{label}</label> : null}
            {tooltip ? (
              <InputTooltip>
                <Icon
                  iconName="info-round"
                  tooltip={{
                    id: this.ariaId,
                    description: tooltip,
                    closeLabel: tooltipCloseLabel,
                  }}
                />
              </InputTooltip>
            ) : null}
          </InputHeader>
        ) : null}
        <input
          aria-describedby={tooltip && this.ariaId}
          className="tk-input"
          value={this.state.value}
          onBlur={() => this.onBlur()}
          onChange={(evt) => this.onChange(evt)}
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
