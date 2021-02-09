import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import Icon from '../icon';
import Tooltip from '../tooltip';
import { HasValidationProps } from 'components/validation/Validation';

enum Types {
  TEXTAREA = 'TextArea',
  TEXTFIELD = 'TextField',
}

export type InputBaseProps = {
  onCopy?: (event) => any;
  onCut?: (event) => any;
  onDrag?: (event) => any;
}

type TextComponentProps = {
  className?: string;
  disabled?: boolean;
  iconElement?: JSX.Element;
  id?: string;
  label?: string;
  masked?: boolean;
  placeholder?: string;
  onClick?: () => any;
  onFocus?: () => any;
  onKeyDown?: (event) => any;
  tooltip?: string;
  tooltipCloseLabel?: string;
  value?: string;
} & HasValidationProps<string>;

type TextComponentPropsWithType = TextComponentProps & InputBaseProps & {
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

export const InputBasePropTypes = {
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onDrag: PropTypes.func,
}

const TextComponentPropTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  iconElement: PropTypes.element,
  label: PropTypes.string,
  masked: PropTypes.bool,
  placeholder: PropTypes.string,
  onInit: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipCloseLabel: PropTypes.string,
  value: PropTypes.string,
};

const TextComponent: React.FC<TextComponentPropsWithType> = ({
  className,
  id,
  iconElement,
  type,
  disabled,
  label,
  placeholder,
  masked,
  tooltip,
  tooltipCloseLabel,
  value,
  onInit,
  onChange,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hideText, setHideText] = useState(masked || false);

  useEffect(()=> {
    if(onInit && value){
      onInit(value);
    }
  },[]);

  // Generate unique ID if not provided
  const ariaId = useMemo(() => {
    return id || `hint-${shortid.generate()}`;
  }, [id]);

  const handleViewText = (event) => {
    if (disabled) return;

    event.preventDefault();
    setHideText(!hideText);
  };

  const handleClickIcon = useCallback(() => {
    setShowTooltip(!showTooltip);
  }, [showTooltip]);

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
                id={ariaId}
                description={tooltip}
                closeLabel={tooltipCloseLabel}
                onHintClose={handleClickIcon}
                visible={showTooltip}
                placement={'top'}
              >
                <Icon iconName="info-round" onClick={handleClickIcon} />
              </Tooltip>
            </TextComponentTooltip>
          ) : null}
        </TextComponentHeader>
      ) : null}
      <div className="tk-input__container">
        <TagName
          id={id}
          aria-autocomplete="none"
          aria-describedby={tooltip && ariaId}
          aria-label={label}
          aria-placeholder={placeholder}
          aria-readonly={disabled}
          aria-multiline={type === Types.TEXTAREA}
          className={classNames('tk-input', className, {
            'tk-input--with-icon': iconElement,
          })}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onChange={onChange}
          type={type === Types.TEXTFIELD ? 'text' : null}
          style={
            {
              WebkitTextSecurity:
                type == Types.TEXTFIELD && masked && hideText && 'disc',
            } as React.CSSProperties
          }
          disabled={disabled}
          {...rest}
        />
        {iconElement && type == Types.TEXTFIELD
        // Clone the iconElement in order to attach className 'tk-input__icon'
          ? React.cloneElement(iconElement, {
            className: classNames(
              'tk-input__icon',
              iconElement.props.className
            ),
          })
          : null}
        {type == Types.TEXTFIELD ? (
          <button
            className="tk-input__hide"
            tabIndex={value && value.length === 0 ? -1 : 0}
            onClick={handleViewText}
            style={{
              display: masked && value && value.length ? 'inline' : 'none',
            }}
          >
            {hideText ? 'show' : 'hide'}
          </button>
        ) : null}
      </div>
    </div>
  );
};

TextComponent.propTypes = {
  ...TextComponentPropTypes,
  ...InputBasePropTypes,
  type: PropTypes.oneOf(Object.values(Types)).isRequired,
};

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
