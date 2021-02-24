import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-size';

export type ScaleProps = {
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large',
  /** Optional CSS class name */
  className?: string,

};

export const Scale: React.FC<ScaleProps> = ({
  size,
  className,
  ...rest
}: ScaleProps) => {
  const classes = classNames(
    className,
    `${prefix}-${size}`,
  );
  return (
    <span data-testid="scale"
      className={classes}
      {...rest}>
    </span>
  );
};

Scale.defaultProps = {
  size: 'medium',
};
