import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-button';

type ButtonProps = {
  iconButton?: boolean,
  children?: React.ReactNode,
  className?: string,
  disabled?: boolean,
  loading?: boolean,
  type?: 'button' | 'reset' | 'submit',
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive'
};

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  iconButton,
  variant,
  loading,
  disabled,
  type,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    prefix,
    `${prefix}--${variant}`,
    iconButton && `${prefix}--icon`,
  );
  return (
    <button
      className={classes}
      disabled={loading || disabled}
      /* eslint-disable react/button-has-type */
      type={type}
      {...rest}
    >
      {loading ? <i className="animate-spin tk-icon-loading" /> : children}
    </button>
  );
};

Button.defaultProps = {
  iconButton: false,
  className: '',
  disabled: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

Button.displayName = 'Button';
export default Button;
