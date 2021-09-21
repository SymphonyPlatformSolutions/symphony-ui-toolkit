import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-button';

export type ButtonProps = {
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
   /** The variant to use*/
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'primary-destructive' | 'secondary-destructive'|'tertiary-destructive' |'tertiary-accent';
  size?: 'large' | 'small' | 'medium';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  iconButton,
  variant,
  loading,
  disabled,
  type,
  size,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    prefix,
    `${prefix}--${variant.replace('-', '--')}`,
    iconButton && `${prefix}--icon`,
    `${loading ? 'loading' : ''}`,
    `${prefix}--${size}`
  );
  if(variant==='destructive') {
    console.warn('The button variant: \'destructive\' will be deprecated.\n Please use: \'primary-destructive\', \'secondary-destructive\' or \'tertiary-destructive\' instead')
  }
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
  size: 'medium',
};

Button.propTypes = {
  iconButton: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary' , 'secondary' , 'tertiary' , 'destructive' , 'primary-destructive' , 'secondary-destructive','tertiary-destructive' ,'tertiary-accent']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large' , 'medium']),
}
Button.displayName = 'Button';
export default Button;
