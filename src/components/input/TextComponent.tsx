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

const prefix = 'tk-input';

export type InputBaseProps = {
  onCopy?: (event) => any;
  onCut?: (event) => any;
  onDrag?: (event) => any;
};

type TextComponentProps = {
  /** React Element to display inside the Field, on the right side */
  rightDecorators?: JSX.Element | JSX.Element[];
  className?: string;
  /** When present, it specifies that the field is disabled. */
  disabled?: boolean;
  /** React Element to display inside the Field, on the left side */
  iconElement?: JSX.Element;
  id?: string;
  label?: string;
  /** Force the text to display masked "••••" */
  isMasked?: boolean;
  /** @deprecated Deprecated, please use rightDecorators instead */
  masked?: boolean;
  placeholder?: string;
  onClick?: () => any;
  onFocus?: () => any;
  onKeyDown?: (event) => any;
  showRequired?: boolean;
  /** When present, it specifies that the field is read-only. */
  readOnly?: boolean;
  /** Size of the button */
  size?: 'small' | 'medium';
  value?: string;
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
  rightDecorators: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
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
  readOnly: PropTypes.bool,
  showRequired: PropTypes.bool,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tooltipCloseLabel: PropTypes.string,
  value: PropTypes.string,
};

const TextComponent: React.FC<
  TextComponentPropsWithType &
    React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> = React.forwardRef(
  (
    {
      rightDecorators,
      className,
      id,
      iconElement,
      isMasked,
      type,
      disabled,
      label,
      placeholder,
      masked,
      readOnly,
      size,
      showRequired,
      tooltip,
      tooltipCloseLabel,
      value,
      onInit,
      onChange,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onValidationChanged,
      ...rest
    },
    ref
  ) => {
    const [hideText, setHideText] = useState(masked || false);

    useEffect(() => {
      if (onInit && value) {
        onInit(value);
      }
    }, []);

    // Generate unique ID if not provided
    const inputId = useMemo(() => {
      return id || `${prefix}-${shortid.generate()}`;
    }, [id]);

    const tooltipId = useMemo(() => `tk-hint-${shortid.generate()}`, []);

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

    const shouldHideText = (isMasked || (masked && hideText));
    const typeTextField = type === Types.TEXTFIELD ? shouldHideText ? 'password' : 'text' : undefined;

    return (
      <div
        className={classNames(`${prefix}-group`, `${prefix}-group--${size}`, {
          [`${prefix}-group--disabled`]: disabled,
          [`${prefix}-group--readonly`]: readOnly,
        })}
      >

        <div
          className={classNames(
            className,
            `${prefix}__container`,
            `${prefix}__container--${size}`,
            {
              [`${prefix}__container--disabled`]: disabled,
              [`${prefix}__container--readonly`]: readOnly,
            }
          )}
        >
          <TagName
            id={inputId}
            ref={ref}
            aria-autocomplete="none"
            aria-describedby={tooltip && tooltipId}
            aria-label={label}
            aria-placeholder={placeholder}
            aria-readonly={readOnly}
            aria-multiline={type === Types.TEXTAREA}
            className={classNames(prefix, `${prefix}--${size}`)}
            disabled={disabled}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onChange={onChange}
            placeholder={placeholder}
            role="textbox"
            type={typeTextField}
            readOnly={readOnly}
            value={value}
            {...rest}
          />

          {rightDecorators && type == Types.TEXTFIELD ? (
            <span className={`${prefix}__right-decorators`}>
              {Array.isArray(rightDecorators)
                ? rightDecorators.map((decorator) => decorator)
                : rightDecorators}
            </span>
          ) : null}
          {type == Types.TEXTFIELD && masked && value?.length ? (
            <button
              className={`${prefix}__hide`}
              tabIndex={value && value.length === 0 ? -1 : 0}
              onClick={handleViewText}
            >
              {hideText ? 'show' : 'hide'}
            </button>
          ) : null}
          {iconElement && type == Types.TEXTFIELD
            ? // Clone the iconElement in order to attach className '${prefix}__icon'
            React.cloneElement(iconElement, {
              className: classNames(
                `${prefix}__icon`,
                iconElement.props.className
              ),
            })
            : null}
        </div>
        <LabelTooltipDecorator
          id={tooltipId}
          htmlFor={inputId}
          label={label}
          placement={'top'}
          tooltip={tooltip}
          tooltipCloseLabel={tooltipCloseLabel}
          showRequired={showRequired}
        />
      </div>
    );
  }
);

TextComponent.defaultProps = {
  size: 'medium',
};


TextComponent.propTypes = {
  ...TextComponentPropTypes,
  ...InputBasePropTypes,
  type: PropTypes.oneOf(Object.values(Types)).isRequired,
};
TextComponent.displayName = 'TextComponent';

export { TextComponentPropTypes, TextComponentProps, TextComponent, Types };
