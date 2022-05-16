import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderBetaProps = {
  className?: string;
  /** Variant is only used on the spinner */
  variant?: 'default' | 'primary' | 'attention' | 'warning' | 'ok';
  /** Direction is only used on the spinner */
  direction?: 'vertical' | 'horizontal';
  /** Size is only used on the spinner */
  size?: 'small' | 'medium' | 'large';
  type?: 'spinner' | 'linear';
  loadingText?: string;
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
  const radius = 1.5,
    circumference = 2 * radius * Math.PI;
  const maxCount = 100;
  const offset = -(circumference / maxCount) * value + 'em';

  const classes = classNames(className, `${prefix}--${type}-${progress}`, {
    [`${prefix}-${size}`]: size,
  });
  const variants = classNames(className, `${prefix}-${variant}`);

  const textClasses = classNames(className, {
    [`${prefix}--${type}--${direction}`]: direction,
  });

  const linearClasses = classNames(className, `${prefix}--${type}-${progress}`);

  const textDirection = classNames(
    className,
    `${prefix}--${type}-${size}--${direction}-text`
  );

  const progressCheck = () =>
    progress === 'determinate' && type === 'linear'
      ? { width: `${value}%` }
      : null;

  React.useEffect(() => {
    if (type === 'spinner') {
      loadSpinner();
    }
  }, [value]);

  const loadSpinner = () => {
    const els = document.querySelectorAll('circle');
    Array.prototype.forEach.call(els, function (el) {
      el.setAttribute('stroke-dasharray', circumference + 'em');
      el.setAttribute('r', radius + 'em');
    });

    document
      .querySelector('.radial-progress-center')
      .setAttribute('r', radius - 0.01 + 'em');
  };

  return type === 'linear' ? (
    <>
      <div className="tk-loader--linear-container">
        <div className={linearClasses} style={progressCheck()} {...rest}></div>
      </div>
      <p className="tk-loader--linear-text">{loadingText}</p>
    </>
  ) : (
    <>
      <div>
        <div className={classes + ' ' + textClasses}>
          <svg>
            <circle
              className={variants + ' ' + 'radial-progress-background'}
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="0em"
              strokeDashoffset="0em"
            ></circle>
            <circle
              className="radial-progress-cover"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="0em"
              strokeDashoffset={offset}
            ></circle>
            <circle
              className="radial-progress-center"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="0em"
              strokeDashoffset="0em"
            ></circle>
          </svg>
          <p className={textDirection}>{loadingText}</p>
        </div>
      </div>
    </>
  );
};

LoaderBeta.defaultProps = {
  type: 'spinner',
  direction: 'vertical',
  size: 'medium',
  variant: 'primary',
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
