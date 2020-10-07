import React from 'react';
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
  disabled?: boolean;
  id?: string;
  label?: string;
  masked?: boolean;
  placeholder?: string;
  onChange?: (string) => any;
  onBlur?: () => any;
  tooltip?: string;
  tooltipCloseLabel?: string;
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
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  masked: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
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

  onChange = (evt) => {
    const newValue = evt.target.value;
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
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
      id,
      type,
      disabled,
      label,
      masked,
      tooltip,
      tooltipCloseLabel,
      onChange,
      onBlur,
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
      <div className="tk-input-group">
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
            onBlur={onBlur}
            onChange={this.onChange}
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
      </div>
    );
  }
}

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
