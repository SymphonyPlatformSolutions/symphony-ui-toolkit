import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type ProgressbarProps = {
  className?: string;
  progress?: 'determinate' | 'indeterminate';
  value?: '0' | '1' | '25' | '50' | '75' | '100';
};

const Progressbar: React.FC<ProgressbarProps> = ({
  className,
  progress,
  value,
  ...rest
}: ProgressbarProps) => {
  const classes = classNames(
    className,
    {
      [`${prefix}-${progress}`]: progress,
    },
    { [`${prefix}--${value}`]: value }
  );

  return (
    <div className="tk-loader-progressbar-container">
      <div className={classes} {...rest}></div>
    </div>
  );
};

Progressbar.defaultProps = {
  value: '50',
  progress: 'determinate',
};

Progressbar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.oneOf(['determinate', 'indeterminate']),
  value: PropTypes.oneOf(['0', '1', '25', '50', '75', '100']),
};
export default Progressbar;
