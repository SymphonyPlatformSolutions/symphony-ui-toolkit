import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-card';

type CardProps = React.HTMLProps<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  className,
  children,
  ...rest
}: CardProps) => {
  const classes = classNames(
    className,
    prefix,
  );
  return (<div className={classes} {...rest}>{children}</div>);
}

export default Card; 
