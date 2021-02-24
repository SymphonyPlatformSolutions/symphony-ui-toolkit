import * as React from 'react';
import classNames from 'classnames';
import {useEffect, useRef} from 'react';
import {Keys} from '../common/keyUtils';

interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  show?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
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

export const DropdownMenu: React.FC<DropdownMenuProps> = ({children, className, show = true, onClose, ...rest}: DropdownMenuProps) => {
  const classes = classNames(
    'tk-dropdown-menu',
    className,
  )

  const menu = useRef(null);
  const keyboardEventHandler = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === Keys.ESC && onClose) {
      onClose();
    }
  }

  const mouseEventHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (onClose && menu && !(e.composedPath() as any).includes(menu.current)) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', keyboardEventHandler);
    window.addEventListener('click', mouseEventHandler);

    return function cleanup() {
      window.removeEventListener('keyup', keyboardEventHandler);
      window.removeEventListener('click', mouseEventHandler);
    }
  })
  return show && (
    <div {...rest} className={classes} ref={menu}>
      {children}
    </div>
  )
}

