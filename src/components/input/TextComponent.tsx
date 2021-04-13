import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';

import { HasValidationProps } from '../validation/interfaces';
import { HasTooltipProps } from '../tooltip/interfaces';
import LabelTooltipDecorator from '../label-tooltip-decorator/LabelTooltipDecorator';

enum Types {
  TEXTAREA = 'TextArea',
  TEXTFIELD = 'TextField',
}

export type InputBaseProps = {
  onCopy?: (event) => any;
  onCut?: (event) => any;
  onDrag?: (event) => any;
};

type TextComponentProps = {
  /** React Element to display inside of the Field, on the right side */
  decoratorElement?: JSX.Element; // what do you think about the name?
  className?: string;
  disabled?: boolean;
  /** React Element to display outside the Field, on the left side */
  iconElement?: JSX.Element;
  id?: string;
  label?: string;
  /** Force the text to display masked "••••" */
  isMasked?: boolean;
  /** Deprecated, please use decoratorElement instead */
  masked?: boolean;
  placeholder?: string;
  onClick?: () => any;
  onFocus?: () => any;
  onKeyDown?: (event) => any;
  value?: string;
  showRequired?: boolean;
} & HasTooltipProps &
  HasValidationProps<string>;

type TextComponentPropsWithType = TextComponentProps &
  InputBaseProps & {
    type: Types;
  };

export const InputBasePropTypes = {
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onDrag: PropTypes.func,
};

const TextComponentPropTypes = {
  decoratorElement: PropTypes.element,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  iconElement: PropTypes.element,
  isMasked: PropTypes.bool,
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
  showRequired: PropTypes.bool,
};

const TextComponent: React.FC<TextComponentPropsWithType> = ({
  decoratorElement,
  className,
  id,
  iconElement,
  isMasked,
  type,
  disabled,
  label,
  placeholder,
  masked,
  tooltip,
  tooltipCloseLabel,
  value,
  showRequired,
  onInit,
  onChange,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onValidationChanged,
  ...rest
}) => {
  const [hideText, setHideText] = useState(masked || false);

  useEffect(() => {
    if (onInit && value) {
      onInit(value);
    }
  }, []);

  // Generate unique ID if not provided
  const ariaId = useMemo(() => {
    return id || `hint-${shortid.generate()}`;
  }, [id]);

  const handleViewText = (event) => {
    if (disabled) return;

    event.preventDefault();
    setHideText(!hideText);
  };

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
      <LabelTooltipDecorator
        id={ariaId}
        label={label}
        placement={'top'}
        tooltip={tooltip}
        tooltipCloseLabel={tooltipCloseLabel}
        showRequired={showRequired}
      />
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
                type == Types.TEXTFIELD &&
                (isMasked || (masked && hideText)) &&
                'disc',
            } as React.CSSProperties
          }
          disabled={disabled}
          {...rest}
        />
        {iconElement && type == Types.TEXTFIELD
          ? // Clone the iconElement in order to attach className 'tk-input__icon'
            React.cloneElement(iconElement, {
              className: classNames(
                'tk-input__icon',
                iconElement.props.className
              ),
            })
          : null}
        {decoratorElement && type == Types.TEXTFIELD
          ? // Clone the decoratorElement in order to attach className 'tk-input__hide'
            React.cloneElement(decoratorElement, {
              className: classNames(
                'tk-input__hide',
                decoratorElement.props.className
              ),
            })
          : null}
        {type == Types.TEXTFIELD && masked && value?.length ? (
          <button
            className="tk-input__hide"
            tabIndex={value && value.length === 0 ? -1 : 0}
            onClick={handleViewText}
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
