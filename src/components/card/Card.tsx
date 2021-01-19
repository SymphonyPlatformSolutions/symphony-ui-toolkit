import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-card';

type CardProps = {
  className?: string;
   /** Content of the card */
  children?: React.ReactNode;
}

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
