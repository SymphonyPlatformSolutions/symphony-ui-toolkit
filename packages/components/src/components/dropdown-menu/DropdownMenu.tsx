import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Keys } from '../common/eventUtils';
import { Loader } from '..';

interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  show?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

interface DropdownMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  /** To select a certain option in the menu without having to use document.querySelector */
  forwardRef?: React.RefObject<HTMLDivElement>;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

export const DropdownMenuDivider: React.FC = () => <div className="tk-dropdown-menu-divider"></div>

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children, className, onClick, forwardRef, loading, ...rest
}: DropdownMenuItemProps) => {
  const classes = classNames(
    'tk-dropdown-menu__item',
    className,
    { ['tk-dropdown-menu__item--loading']: loading },
  )

  const focusNextOption = (current: HTMLDivElement, direction: number) => {
    const options = (Array.from(current.parentElement.getElementsByClassName('tk-dropdown-menu__item'))) as HTMLDivElement[];
    let currentOptionPosition = options.indexOf(current);
    currentOptionPosition = currentOptionPosition > -1 ? currentOptionPosition : 0;
    const nextElementPosition = (currentOptionPosition + options.length + direction) % options.length;

    options[nextElementPosition].focus();
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
    case Keys.ARROW_DOWN :
      e.stopPropagation();
      focusNextOption(e.currentTarget, 1);
      break;
    case Keys.ARROW_UP:
      e.stopPropagation();
      focusNextOption(e.currentTarget, -1);
      break;
    case Keys.ENTER:
      e.stopPropagation();
      onClick(e);
      break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (loading) {
      return;
    }

    onClick?.(event);
  } 

  return (
    <div {...rest} className={classes} onClick={onClickHandler} ref={forwardRef} onKeyDown={onKeyDownHandler} tabIndex={-1}>
      {loading ? <Loader variant="primary" /> : children}
    </div>
  )
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({children, className, show = true, onClose, ...rest}: DropdownMenuProps) => {
  const classes = classNames(
    'tk-dropdown-menu',
    className,
  )

  const menu = useRef<HTMLDivElement>();
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

  const removeListeners = useCallback(() => {
    window.removeEventListener('keyup', keyboardEventHandler);
    window.removeEventListener('click', mouseEventHandler);
  }, [])

  useEffect(() => {
    if (!show) {
      removeListeners();
      return;
    }
    
    window.addEventListener('keyup', keyboardEventHandler);
    window.addEventListener('click', mouseEventHandler);

    return () => {
      removeListeners()
    }
  }, [show, removeListeners])
  
  return show && (
    <div {...rest} className={classes} ref={menu}>
      {children}
    </div>
  )
};

