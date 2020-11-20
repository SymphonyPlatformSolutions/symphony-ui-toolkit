import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-loader';

type LoaderProps = {
  className?: string;
  type?: 'spinner';
  variant?: 'primary' | 'attention' | 'warning' | 'ok';
};

const Loader: React.SFC<LoaderProps> = ({
  className,
  variant,
  type,
  ...rest
}: LoaderProps) => {
  const classes = classNames(
    className,
    `${prefix}-${type}`,
    `${prefix}--${variant}`,
    
  );
  return (
    <i
      className={classes}
      {...rest}
    >
    </i>
  );
};

Loader.defaultProps = {
  type: 'spinner',
};

Loader.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['spinner']),
  variant: PropTypes.oneOf(['primary', 'attention', 'warning', 'ok']),
}
export default Loader;
