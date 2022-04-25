import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderProps = {
  className?: string;
  /** Constantly animates, use when loading progress is unknown */
  type?: 'spinner';
  /** The variant to use */
  variant?: 'primary' | 'attention' | 'warning' | 'ok';
  size?: 'small' | 'medium' | 'large';
};

const Loader: React.FC<LoaderProps> = ({
  className,
  variant,
  type,
  size,
  ...rest
}: LoaderProps) => {
  const classes = classNames(
    className,
    `${prefix}-${type}`,
    { [`${prefix}--${variant}`]: variant },
    { [`${prefix}--${size}`]: size }
  );
  return <i className={classes} {...rest}></i>;
};

Loader.defaultProps = {
  type: 'spinner',
  size: 'medium',
};

Loader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner']),
  variant: PropTypes.oneOf(['primary', 'attention', 'warning', 'ok']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
export default Loader;
