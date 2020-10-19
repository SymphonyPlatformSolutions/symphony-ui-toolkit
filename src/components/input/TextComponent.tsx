import React, { useMemo, useState } from 'react';
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
  onChange?: (event) => any;
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

const propTypes = {
  ...TextComponentPropTypes,
  type: PropTypes.oneOf(Object.values(Types)).isRequired,
};

const TextComponent: React.FC<TextComponentPropsWithType> = ({id, type, disabled, label, masked, tooltip, tooltipCloseLabel, value, onChange, onBlur, ...rest}) => {
  // const ariaId: string;

  const [showTooltip, setShowTooltip] = useState(false);
  const [hideText, setHideText] = useState(masked || false);
  const [inputValue, setInputValue]= useState(value || '');

  // Generate unique ID if not provided
  const ariaId = useMemo(() => {
    return id || `hint-${shortid.generate()}`;
  },[id]);


  const onChangeHandler = (evt) => {
    const newValue = evt.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(evt);
    }
  };

  const handleViewText = (event) => {
    if (disabled) return;

    event.preventDefault();
    setHideText(!hideText);
  };

  const handleClickIcon = () => {
    setShowTooltip( !showTooltip );
  };

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
                id={ariaId}
                description={tooltip}
                closeLabel={tooltipCloseLabel}
                onHintClose={handleClickIcon}
                visible={showTooltip}
                placement={null}
              >
                <Icon
                  iconName="info-round"
                  handleClick={handleClickIcon}
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
          aria-describedby={tooltip && ariaId}
          className="tk-input"
          value={inputValue}
          onBlur={onBlur}
          onChange={onChangeHandler}
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
            tabIndex={inputValue.length === 0 ? -1 : 0}
            onClick={handleViewText}
            style={{
              display: masked && inputValue.length ? 'inline' : 'none',
            }}
          >
            {hideText ? 'show' : 'hide'}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
