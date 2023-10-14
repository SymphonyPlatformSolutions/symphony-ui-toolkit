import * as React from 'react';
import * as PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { BadgeProps } from './interfaces';

const prefix = 'tk-badge';

const Badge: React.FC<BadgeProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  variant,
  size,
  ...rest
}) => {
  const classes = clsx(
    className,
    prefix,
    `${prefix}--${variant}`,
    `${prefix}--${size}`,
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
  size: 'medium'
}

Badge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'positive' , 'neutral' , 'attention' , 'warning' , 'external']),
  size: PropTypes.oneOf(['small', 'medium']),
}
Badge.displayName = 'Badge';
export default Badge;
