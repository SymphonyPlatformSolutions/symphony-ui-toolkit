import * as React from 'react';

export type DrawerProps = React.HTMLProps<HTMLDivElement> & {
  /** The drawer width */
  width?: number;
  /** The side the drawer will slide from */
  position?: 'right' | 'left';
  /** Whether the drawer should be positioned relatively to the whole window */
  relativeToWindow?: boolean;
  className?: string;
  children?: React.ReactNode;
  /** Whether close button should be present */
  closeButton?: boolean;
  /** Is the drawer shown or hidden */
  show?: boolean;
  onClose?: () => void;
  /** If true, other elements will become non-interactive while drawer is open */
  hasBackdrop?: boolean;
};

export type DrawerContentProps = React.HTMLProps<HTMLDivElement>;
