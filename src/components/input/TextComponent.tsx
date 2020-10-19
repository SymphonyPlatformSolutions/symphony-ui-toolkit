import React from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';

enum Types {
  TEXTAREA = 'TextArea',
  TEXTFIELD = 'TextField',
}

/** TODO: maybe move iconProps somewhere else as it only affect TextField */
type TextComponentProps = {
  className?: string;
  disabled?: boolean;
  iconProps?: TextComponentIconProps;
  id?: string;
  label?: string;
  masked?: boolean;
  placeholder?: string;
  onChange?: (event) => any;
  onClick?: () => any;
  onBlur?: () => any;
  onFocus?: () => any;
  onKeyDown?: (event) => any;
  tooltip?: string;
  tooltipCloseLabel?: string;
  value?: string;
};

type TextComponentIconProps = {
  iconName: string;
  ref?: any;
  tabIndex?: number;
  onClick?: () => any;
  onKeyDown?: (event) => any;
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  iconProps: PropTypes.exact({
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    ref: PropTypes.any,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
  }),
  label: PropTypes.string,
  masked: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  value: PropTypes.string,
};

class TextComponent extends React.Component<TextComponentPropsWithType> {
  private ariaId: string;

  public static propTypes = {
    ...TextComponentPropTypes,
    type: PropTypes.oneOf(Object.values(Types)).isRequired,
  };

  public state: any = {
    showTooltip: false,
    hideText: this.props.masked || false,
    value: this.props.value || '',
  };
  constructor(props) {
    super(props);
    this.ariaId = `hint-${shortid.generate()}`;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value)
      this.setState({
        value: nextProps.value || '',
      });
  }

  onChange = (evt) => {
    const newValue = evt.target.value;
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  };

  private handleViewText = (event) => {
    if (this.props.disabled) return;

    event.preventDefault();
    this.setState({
      hideText: !this.state.hideText,
    });
  };

  private handleClickIcon = () => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      className,
      id,
      iconProps,
      type,
      disabled,
      label,
      masked,
      tooltip,
      tooltipCloseLabel,
      onChange,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      ...rest
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    const { hideText, value } = this.state;

    let TagName;
    if (type == Types.TEXTAREA) {
      TagName = 'textarea';
    } else {
      TagName = 'input';
    }

    return (
      <div
        className={classNames('tk-input-group', {
          'tk-input-group--disabled': disabled,
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
            className={classNames('tk-input', className, {
              hasIcon: iconProps,
            })}
            value={value}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onChange={this.onChange}
            style={
              {
                WebkitTextSecurity:
                  type == Types.TEXTFIELD && masked && hideText && 'disc',
              } as React.CSSProperties
            }
            disabled={disabled}
          />
          {iconProps && type == Types.TEXTFIELD ? (
            <div
              ref={iconProps.ref}
              tabIndex={iconProps.tabIndex}
              className={`tk-input__icon ${className ? className : ''}`}
              style={{
                cursor: !disabled && iconProps.onClick ? 'pointer' : 'auto',
              }}
              onClick={!disabled ? iconProps.onClick : null}
              onKeyDown={!disabled ? iconProps.onKeyDown : null}
            >
              <Icon iconName={iconProps.iconName}></Icon>
            </div>
          ) : null}
          {type == Types.TEXTFIELD ? (
            <button
              className="tk-input__hide"
              tabIndex={value && value.length === 0 ? -1 : 0}
              onClick={this.handleViewText}
              style={{
                display: masked && value.length ? 'inline' : 'none',
              }}
            >
              {hideText ? 'show' : 'hide'}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
