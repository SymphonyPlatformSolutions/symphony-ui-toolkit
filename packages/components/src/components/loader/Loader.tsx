import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderProps = {
  className?: string;
  /** Constantly animates, use when loading progress is unknown */
  type?: 'spinner';
  /** The variant to use */
  variant?: 'default' | 'primary' | 'attention' | 'warning' | 'ok';
  loadingText?: string;
  loadingTextPos?: 'bottom' | 'right';
  size?: 'small' | 'medium' | 'large';
};

const Loader: React.FC<LoaderProps> = ({
  className,
  variant = 'default',
  type,
  loadingText,
  loadingTextPos,
  size,
  ...rest
}: LoaderProps) => {
  const classes = classNames(
    className,
    `${prefix}-${type}`,
    { [`${prefix}--${variant}`]: variant },
    { [`${prefix}--${size}`]: size }
  );

  const textClasses = classNames(className, {
    [`${prefix}-textPos--${loadingTextPos}`]: loadingTextPos,
  });

  return loadingText ? (
    <div className={textClasses}>
      <i className={classes} {...rest}></i>
      <p className="tk-loader-text">{loadingText}</p>
    </div>
  ) : (
    <i className={classes} {...rest}></i>
  );
};

Loader.defaultProps = {
  type: 'spinner',
  loadingTextPos: 'bottom',
  size: 'medium',
};

Loader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner']),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'attention',
    'warning',
    'ok',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loadingText: PropTypes.string,
  loadingTextPos: PropTypes.oneOf(['bottom', 'right']),
};
export default Loader;
