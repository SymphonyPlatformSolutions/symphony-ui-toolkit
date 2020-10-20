import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-size';




type ScaleProps = {
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large',
  className?: string,

};

const Scale: React.SFC<ScaleProps> = ({
  size,
  className,
  ...rest
}: ScaleProps) => {
  const classes = classNames(
    className,
    `${prefix}-${size}`,
  );
  return (
    <div
      className={classes}
      {...rest}>
    </div>
  );
};

Scale.defaultProps = {
  size: 'medium',
};

export default Scale;
