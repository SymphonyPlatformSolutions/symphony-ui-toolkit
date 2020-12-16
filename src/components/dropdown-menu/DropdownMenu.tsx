import * as React from 'react';
import classNames from 'classnames';

interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface DropdownMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const DropdownMenuDivider: React.FC = () => <div className="tk-dropdown-menu-divider"></div>

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({children, className, onClick}: DropdownMenuItemProps) => {
  const classes = classNames(
    'tk-dropdown-menu__item',
    className,
  )

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({children, className, ...rest}: DropdownMenuProps) => {
  const classes = classNames(
    'tk-dropdown-menu',
    className,
  )

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

