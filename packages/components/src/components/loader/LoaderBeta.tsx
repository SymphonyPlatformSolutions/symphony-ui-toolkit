import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderProps = {
  className?: string;
  /** Constantly animates, use when loading progress is unknown */
  type?: 'spinner' | 'progressbar';
  /** The variant to use */
  variant?: 'default' | 'primary' | 'attention' | 'warning' | 'ok';
  loadingText?: string;
  loadingTextPos?: 'bottom' | 'right';
  size?: 'small' | 'medium' | 'large';
  progress?: 'determinate' | 'indeterminate';
  value?: '0' | '1' | '25' | '50' | '75' | '100';
};

const Loader: React.FC<LoaderProps> = ({
  className,
  variant = 'default',
  type,
  loadingText,
  loadingTextPos,
  size,
  progress,
  value,
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

  const valueClasses = classNames(
    className,
    `${prefix}-${type}`,
    { [`${prefix}--${variant}`]: variant },
    { [`${prefix}--${size}`]: size },
    {
      [`${prefix}--${value}`]: value,
    }
  );

  const progressClasses = classNames(className, {
    [`${prefix}-${progress}`]: progress,
  });

  return loadingText ? (
    <div className={textClasses}>
      <i className={classes} {...rest}></i>
      <p className="tk-loader-text">{loadingText}</p>
    </div>
  ) : type === 'progressbar' ? (
    <div className={progressClasses}>
      <div className={valueClasses} {...rest}></div>
    </div>
  ) : (
    <i className={classes} {...rest}></i>
  );
};

Loader.defaultProps = {
  type: 'spinner',
  loadingTextPos: 'bottom',
  size: 'medium',
  value: '50',
  progress: 'determinate',
};

Loader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner', 'progressbar']),
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
  progress: PropTypes.oneOf(['determinate', 'indeterminate']),
  value: PropTypes.oneOf(['0', '1', '25', '50', '75', '100']),
};
export default Loader;
