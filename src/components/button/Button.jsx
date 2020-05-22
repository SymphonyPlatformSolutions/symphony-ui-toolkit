import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-button';

const Button = ({
  children,
  className,
  iconButton,
  variant,
  loading,
  disabled,
  type,
  ...rest
}) => {
  const classes = classNames(
    className,
    prefix,
    `${prefix}--${variant}`,
    loading && `${prefix}--loading`,
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
      {loading ? <i className="animate-spin tk-ic-loading" /> : children}
    </button>
  );
};

Button.propTypes = {
  iconButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'destructive']),
};

Button.defaultProps = {
  iconButton: false,
  className: '',
  disabled: false,
  loading: null,
  type: 'button',
  variant: 'primary',
};

Button.displayName = 'Button';

export default Button;
