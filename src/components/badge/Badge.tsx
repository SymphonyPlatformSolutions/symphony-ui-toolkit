import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { BadgeProps } from './interfaces';

const prefix = 'tk-badge';

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  const classes = classNames(
    className,
    prefix,
    `${prefix}--${variant}`,
  );
  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  );
};

Badge.defaultProps = {
  variant:'default',  
}

Badge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'positive' , 'neutral' , 'attention' , 'warning' , 'external']),
}
Badge.displayName = 'Badge';
export default Badge;
