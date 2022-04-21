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
  loadingText?: string;
  loadingTextPos?: 'bottom' | 'right';
};

const Loader: React.FC<LoaderProps> = ({
  className,
  variant,
  type,
  loadingText,
  loadingTextPos,
  ...rest
}: LoaderProps) => {
  const classes = classNames(className, `${prefix}-${type}`, {
    [`${prefix}--${variant}`]: variant,
  });
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
};

Loader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner']),
  variant: PropTypes.oneOf(['primary', 'attention', 'warning', 'ok']),
  loadingText: PropTypes.string,
  loadingTextPos: PropTypes.oneOf(['bottom', 'right']),
};
export default Loader;
