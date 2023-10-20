import * as React from 'react';
import { clsx } from 'clsx';

const prefix = 'tk-card';

type CardProps = React.HTMLProps<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  // eslint-disable-next-line react/prop-types
  className,
  children,
  ...rest
}: CardProps) => {
  const classes = clsx(
    className,
    prefix,
  );
  return (<div className={classes} {...rest}>{children}</div>);
}

export default Card;
