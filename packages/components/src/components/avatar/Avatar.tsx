import * as React from 'react'
import classNames from 'classnames';

interface AvatarProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  size: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  bordered?: boolean;
  variant: 'square' | 'round';
  children?: React.ReactNode;
  className?: string;
}

type AvatarBadgeProps = {
  position: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
}

type BasicIndicatorProps = {
  position: 'top' | 'bottom';
  variant: 'attention' | 'ok' | 'offline' | 'warning';
}
const prefix = 'tk-avatar'

export const BasicIndicator: React.FC<BasicIndicatorProps> = ({position, variant}: BasicIndicatorProps) => {
  const classes = classNames(
    'tk-avatar__badge',
    `tk-avatar__badge--${position}`,
    `tk-bg-color--${variant}`,
  )
  return (
    <span
      className={classes}
      style={{width:'30%', height:'30%', borderRadius:'50%'}}
    >
    </span>
  )
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({position, children, className}: AvatarBadgeProps) => {
  const classes = classNames(
    'tk-avatar__badge',
    `tk-avatar__badge--${position}`,
    className

  )
  return (
    <span className={classes}>
      {children}
    </span>
  )
}

export const Avatar: React.FC<AvatarProps> = ({
  size,
  bordered,
  children,
  className,
  variant,
  ...otherProps
}: AvatarProps) => {
  const classes = classNames(
    prefix,
    `${prefix}--${size}`,
    {[`${prefix}--border`]: bordered},
    {[`${prefix}--square`]: variant === 'square'},
    className
  )
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}
