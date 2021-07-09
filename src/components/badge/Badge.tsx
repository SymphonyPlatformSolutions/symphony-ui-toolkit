import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'tk-badge';

export type BadgeProps = {
  /** Content of the badge */
  children?: React.ReactNode;
  className?: string;
  /** The variant to use */
  variant?: 'positive' | 'neutral' | 'attention' | 'warning' | 'external';
};

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


Badge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['positive', 'neutral', 'attention', 'warning', 'external']),
}
Badge.displayName = 'Badge';
export default Badge;
