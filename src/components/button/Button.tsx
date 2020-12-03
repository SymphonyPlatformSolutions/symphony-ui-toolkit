import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-button';

type ButtonProps = {
  /** If true, add an Icon component as children */
  iconButton?: boolean;
   /** Content of the button*/
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  /** If true, substitutes the button content by an animated loader */
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
   /** The variant to use*/
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
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
    iconButton && `${prefix}--icon`
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

Button.propTypes = {
  iconButton: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'destructive']),
  onClick: PropTypes.func,
}
Button.displayName = 'Button';
export default Button;
