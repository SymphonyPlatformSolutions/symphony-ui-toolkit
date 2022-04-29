import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderBetaProps = {
  className?: string;
  /** The variant to use */
  type?: 'spinner' | 'linear';
  variant?: 'default' | 'primary' | 'attention' | 'warning' | 'ok';
  loadingText?: string;
  direction?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
  progress?: 'determinate' | 'indeterminate';
  value?: number;
};

const LoaderBeta: React.FC<LoaderBetaProps> = ({
  className,
  type,
  variant = 'default',
  loadingText,
  direction,
  size,
  progress,
  value,
  ...rest
}: LoaderBetaProps) => {
  const classes = classNames(
    className,
    `${prefix}-${type}-${progress}`,
    { [`${prefix}--${variant}`]: variant },
    { [`${prefix}--${size}`]: size }
  );

  const textClasses = classNames(className, {
    [`${prefix}-${type}--${direction}`]: direction,
  });

  const linearClasses = classNames(className, `${prefix}-${type}-${progress}`, {
    [`${prefix}--${value}`]: value,
  });

  return type === 'spinner' && loadingText ? (
    <div className={textClasses}>
      <i className={classes} {...rest}></i>
      <p className="tk-loader-spinner-text">{loadingText}</p>
    </div>
  ) : type === 'linear' ? (
    <>
      <div className="tk-loader-linear-container">
        <div className={linearClasses} {...rest}></div>
      </div>
      <p className="tk-loader-linear-text">{loadingText}</p>
    </>
  ) : (
    <i className={classes} {...rest}></i>
  );
};

LoaderBeta.defaultProps = {
  type: 'spinner',
  direction: 'vertical',
  size: 'medium',
  variant: 'default',
  progress: 'determinate',
  value: 50,
};

LoaderBeta.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner', 'linear']),
  progress: PropTypes.oneOf(['determinate', 'indeterminate']),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'attention',
    'warning',
    'ok',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loadingText: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  value: PropTypes.number,
};
export default LoaderBeta;
