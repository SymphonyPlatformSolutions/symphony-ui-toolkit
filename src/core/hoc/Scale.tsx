import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-size';


export enum Sizes {
  XX_SMALL = 'xx-small',
  X_SMALL = 'x-small',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  X_LARGE = 'x-large',
  XX_LARGE = 'xx-large',
}

type ScaleProps = {
  size: Sizes,
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
  size: Sizes.MEDIUM,
};

export default Scale;
