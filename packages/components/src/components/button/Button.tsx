import * as React from 'react';
import * as PropTypes from 'prop-types';
import { clsx } from 'clsx';

const prefix = 'tk-button';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  /** If true, add an Icon component as children */
  iconButton?: boolean;
  /** Content of the button*/
  children?: React.ReactNode;
  /** Optional CSS class name */
  className?: string;
  disabled?: boolean;
  /** If true, substitutes the button content by an animated loader */
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Color variant of the button*/
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'primary-destructive' | 'secondary-destructive' | 'tertiary-destructive' | 'tertiary-accent';
  /** Size of the button */
  size?: 'large' | 'small' | 'medium';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button = React.forwardRef(({
  children,
  className,
  iconButton,
  variant,
  loading,
  disabled,
  type,
  size,
  iconRight,
  iconLeft,
  ...rest
}: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {
  const classes = clsx(
    className,
    prefix,
    `${prefix}--${variant}`,
    `${prefix}--${size}`,
    { [`${prefix}--icon`]: iconButton, 'loading': loading, [`${prefix}--icon-left`]: iconLeft, [`${prefix}--icon-right`]: iconRight },
  );

  if (variant === 'destructive') {
    console.warn('The button variant: \'destructive\' will be deprecated.\n Please use: \'primary-destructive\' instead')
  }

  return (
    <button
      aria-label={loading ? 'loading' : null}
      className={classes}
      disabled={loading || disabled}
      ref={ ref }
      style={{ color: loading ? 'transparent' : null }}
      /* eslint-disable react/button-has-type */
      type={type}
      {...rest}
    >
      {loading && <i className="tk-button-icon--loading animate-spin tk-icon-loading" />}
      {iconLeft}{children}{iconRight}
    </button >
  );
});

Button.defaultProps = {
  iconButton: false,
  className: '',
  disabled: false,
  loading: false,
  type: 'button',
  variant: 'primary',
  size: 'medium',
};

Button.propTypes = {
  iconButton: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'destructive', 'primary-destructive', 'secondary-destructive', 'tertiary-destructive', 'tertiary-accent']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
}
Button.displayName = 'Button';
export default Button;
