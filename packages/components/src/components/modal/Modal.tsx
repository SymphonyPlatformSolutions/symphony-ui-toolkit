import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { clsx } from 'clsx';
import { Keys } from '../common/eventUtils';
import { SvgIcon } from '../icon';
import { Icons } from '..';

import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 200;

  > svg {
    fill: var(--tk-dialog-cross-color, #7c7f86);
    :hover {
      fill: var(--tk-dialog-hover-cross-color, #525760);
    }
  }
`

interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  size: 'small' | 'medium' | 'large' | 'full-width';
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean;
  parentNode?: Element;
  show?: boolean;
  onClose?: () => void;
}

type ModalContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const prefix = 'tk-dialog';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

export const ModalTitle: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div className={clsx(buildClass('title'), className)} {...rest}>{children}</div>;

export const ModalHeader: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div className={clsx(buildClass('header'), className)} {...rest}>{children}</div >;

export const ModalBody: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div className={clsx(buildClass('body'), 'styled-scrollbars', className)} {...rest}>{children}</div>;

export const ModalFooter: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div className={clsx(buildClass('footer'), className)} {...rest}>{children}</div >;

const Modal: React.FC<ModalProps> = ({
  size,
  className,
  children,
  closeButton,
  onClose,
  parentNode,
  show,
  ...rest
}: ModalProps) => {
  const containerClasses = clsx(className, `${prefix}-backdrop`);
  const sizeClasses = clsx(prefix, { [`${prefix}--${size}`]: size });
  const handleContentClick = (event: React.MouseEvent<HTMLElement>) => event.stopPropagation();
  const onMouseDown = (event: React.MouseEvent) => event.stopPropagation();
  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (onClose && event.key === Keys.ESC) {
      event.stopPropagation();
      onClose();
    }
  };

  const domResult = (
    <div
      onMouseDown={onMouseDown}
      {...rest}
      className={containerClasses}
      onClick={onClose}
      onKeyUp={handleKeyUp}
      tabIndex={-1}
    >
      <div role="dialog" className={sizeClasses} onClick={handleContentClick}>
        {closeButton && (
          <Button
            aria-label="close"
            onClick={onClose}
            type="button"
          >
            <SvgIcon
              icon={Icons.Cross}
            />
          </Button>
        )}
        {children}
      </div>
    </div>
  );

  return show
    ? parentNode
      ? ReactDOM.createPortal(domResult, parentNode)
      : domResult
    : null;
};

export default Modal;
