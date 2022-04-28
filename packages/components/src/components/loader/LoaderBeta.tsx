import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderBetaProps = {
  className?: string;
  type?: 'spinner';
  /** The variant to use */
  variant?: 'default' | 'primary' | 'attention' | 'warning' | 'ok';
  loadingText?: string;
  loadingTextPos?: 'bottom' | 'right';
  size?: 'small' | 'medium' | 'large';
};

const LoaderBeta: React.FC<LoaderBetaProps> = ({
  className,
  type,
  variant = 'default',
  loadingText,
  loadingTextPos,
  size,
  ...rest
}: LoaderBetaProps) => {
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

LoaderBeta.defaultProps = {
  type: 'spinner',
  loadingTextPos: 'bottom',
  size: 'medium',
  variant: 'default',
};

LoaderBeta.propTypes = {
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
export default LoaderBeta;
