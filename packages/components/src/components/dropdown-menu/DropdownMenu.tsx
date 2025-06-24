import * as React from 'react';
import { clsx } from 'clsx';
import { Keys } from '../common/eventUtils';
import { Loader } from '..';
import { useCallback, useEffect, useRef } from 'react';

interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  show?: boolean;
  onClose?: () => void;
}

interface DropdownMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  loading?: boolean;
  /** To select a certain option in the menu without having to use document.querySelector */
  forwardRef?: React.RefObject<HTMLDivElement>;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

export const DropdownMenuDivider: React.FC = () => <div className="tk-dropdown-menu-divider"></div>

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children, className, onClick, forwardRef, loading, ...rest
}: DropdownMenuItemProps) => {
  const classes = clsx(
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

  const onKeyDownHandler = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
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
      if (loading) {
        return;
      }

      e.stopPropagation();
      onClick(e);
      break;
    }
  }, [loading])

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (loading) {
      return;
    }

    onClick?.(event);
  }, [loading])

  return <div {...rest} className={classes} role="menu-item" onClick={onClickHandler} ref={forwardRef} onKeyDown={onKeyDownHandler} tabIndex={0}>
    {loading ? <Loader variant="primary" /> : children}
  </div>
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className,
  show = true,
  onClose,
  ...rest
}: DropdownMenuProps) => {
  const classes = clsx(
    'tk-dropdown-menu',
    className,
  )

  const ref = useRef<HTMLDivElement>(null);
  const [ownerDocument, setOwnerDocument] = React.useState<Document | null>(null);

  const refCallback = (node: HTMLDivElement | null) => {
    ref.current = node;
    if (node !== null) {
      setOwnerDocument(node.ownerDocument);
    }
  };

  const keyboardEventHandler = (e: KeyboardEvent) => {
    e.stopPropagation();
    if(e.key === Keys.ESC) {
      onClose?.();
    }
  }

  const mouseEventHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (ref.current && !e.composedPath().includes(ref.current)) {
      onClose?.();
    }
  }

  const removeListeners = () => {
    ownerDocument?.removeEventListener('keyup', keyboardEventHandler);
    ownerDocument?.removeEventListener('click', mouseEventHandler);
  }

  useEffect(() => {
    if(!show) {
      removeListeners();
      return;
    }
    ownerDocument?.addEventListener('keyup', keyboardEventHandler);
    ownerDocument?.addEventListener('click', mouseEventHandler);
    return () => {
      removeListeners();
    }
  }, [ownerDocument, removeListeners, show])

  return show && <div
    className={classes}
    ref={ refCallback }
    role="menu"
    {...rest}
  >
    {children}
  </div>
};

