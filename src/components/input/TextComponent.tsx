import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';
import { ValidatorFn } from 'core/validators/validators';
import Icon from '../icon';
import shortid from 'shortid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tooltip from '../tooltip';

enum Types {
  TEXTAREA = 'TextArea',
  TEXTFIELD = 'TextField',
}

type TextComponentProps = {
  dirty?: boolean;
  disabled?: boolean;
  errors?: { [id: string]: string };
  id?: string;
  label?: string;
  masked?: boolean;
  placeholder?: string;
  onValidationChanged?: (boolean) => any;
  onChange?: (string) => any;
  tooltip?: string;
  tooltipCloseLabel?: string;
  touched?: boolean;
  validator?: ValidatorFn | Array<ValidatorFn>;
  value?: string;
};

type TextComponentPropsWithType = TextComponentProps & {
  type: Types;
};

const TextComponentHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TextComponentTooltip = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 16px;
`;

const TextComponentPropTypes = {
  dirty: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
  label: PropTypes.string,
  masked: PropTypes.bool,
  placeholder: PropTypes.string,
  onValidationChanged: PropTypes.func,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  touched: PropTypes.bool,
  validator: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
  value: PropTypes.string,
};

class TextComponent extends React.Component<TextComponentPropsWithType> {
  private ariaId: string;

  public static propTypes = {
    ...TextComponentPropTypes,
    type: PropTypes.oneOf(Object.values(Types)).isRequired,
  };

  public state: any = {
    dirty: false,
    touched: false,
    isValid: true,
    showTooltip: false,
    hideText: this.props.masked || false,
    value: this.props.value || '',
    errorMessages: [],
  };
  constructor(props) {
    super(props);
    this.ariaId = `hint-${shortid.generate()}`;
  }

  get touched() {
    return this.state.touched || this.props.touched;
  }

  get dirty() {
    return this.state.dirty || this.props.dirty;
  }

  componentDidMount() {
    const { dirty, touched } = this.props;
    if (dirty || touched) {
      this.resetErrors();
    }
  }

  componentDidUpdate(prevProps) {
    const { dirty, touched } = this.props;

    const isDirtyUpdated = prevProps.dirty !== dirty;
    const isTouchedUpdated = prevProps.touched !== touched;
    if (isDirtyUpdated || isTouchedUpdated) {
      this.resetErrors();
    }
  }

  private onChange(evt) {
    const newValue = evt.target.value;
    this.setState({ dirty: true, value: newValue }, () =>
      this.validate(newValue)
    );

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  private onBlur(): void {
    this.setState({ touched: true }, () => this.validate(this.state.value));
  }

  private resetErrors() {
    this.setState({ dirty: false, touched: false }, () =>
      this.validate(this.state.value)
    );
  }

  private handleViewText = (event) => {
    if (this.props.disabled) return;

    event.preventDefault();
    this.setState({
      hideText: !this.state.hideText,
    });
  };

  private async validate(value: string): Promise<string[]> {
    let errors;
    let valid = true;
    const errorMessages = [];
    if ((this.dirty || this.touched) && this.props.validator) {
      if (this.props.validator instanceof Array) {
        const errorsMap = await Promise.all(
          this.props.validator.map((validator) => validator(value))
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
    this.setState({ isValid: valid, errorMessages });
    return errorMessages;
  }

  private handleClickIcon = () => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  /**
   * Reset to default value and reset errors, callback onChange props
   */
  public reset(): void {
    const { value } = this.props;
    const defaultValue = value || '';
    this.setState({ value: defaultValue });
    this.resetErrors();
    if (this.props.onChange) {
      this.props.onChange(defaultValue);
    }
  }

  /**
   * Force validation to refresh, and return isValid state when triggered (used in Elements form before submission)
   */
  public async refreshValidation(): Promise<boolean> {
    return new Promise((resolve) => {
      this.setState({ dirty: true, touched: true }, async () => {
        this.validate(this.state.value).then(() => {
          const { isValid } = this.state;
          resolve(isValid);
        });
      });
    });
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      id,
      type,
      touched,
      validator,
      dirty,
      disabled,
      label,
      masked,
      tooltip,
      tooltipCloseLabel,
      errors,
      onValidationChanged,
      onChange,
      ...rest
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    const { errorMessages, hideText, value } = this.state;

    let TagName;
    if (type == Types.TEXTAREA) {
      TagName = 'textarea';
    } else {
      TagName = 'input';
    }

    return (
      <div
        className={classNames('tk-input-group', {
          'tk-input-group--error': errorMessages.length,
        })}
      >
        {label || tooltip ? (
          <TextComponentHeader className="tk-input-group__header">
            {label ? (
              <label className="tk-label" htmlFor={id}>
                {label}
              </label>
            ) : null}
            {tooltip ? (
              <TextComponentTooltip>
                <Tooltip
                  id={this.ariaId}
                  description={tooltip}
                  closeLabel={tooltipCloseLabel}
                  onHintClose={this.handleClickIcon}
                  visible={this.state.showTooltip}
                  placement={null}
                >
                  <Icon
                    iconName="info-round"
                    handleClick={this.handleClickIcon}
                  />
                </Tooltip>
              </TextComponentTooltip>
            ) : null}
          </TextComponentHeader>
        ) : null}
        <div className="tk-input__container">
          <TagName
            {...rest}
            id={id}
            aria-describedby={tooltip && this.ariaId}
            className="tk-input"
            value={value}
            onBlur={() => this.onBlur()}
            onChange={(evt) => this.onChange(evt)}
            style={
              {
                WebkitTextSecurity:
                  type == Types.TEXTFIELD && masked && hideText && 'disc',
              } as React.CSSProperties
            }
            disabled={disabled}
          />
          {type == Types.TEXTFIELD ? (
            <button
              className="tk-input__hide"
              tabIndex={value.length === 0 ? -1 : 0}
              onClick={this.handleViewText}
              style={{
                display: masked && value.length ? 'inline' : 'none',
              }}
            >
              {hideText ? 'show' : 'hide'}
            </button>
          ) : null}
        </div>
        {errorMessages.map((errMsg, i) => (
          <div className="tk-input__error" key={i}>
            {errMsg}
          </div>
        ))}
      </div>
    );
  }
}

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
