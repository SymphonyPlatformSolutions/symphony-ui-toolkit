import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Keys } from '../common/keyUtils';

type ModalProps = {
  size: 'small' | 'medium' | 'large' | 'full-width';
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean;
  parentNode?: Element;
  show?: boolean;
  onClose?: () => void;
};

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
}: ModalContentProps) => <div {...rest} className={classNames(buildClass('title'), className)}>{children}</div>;

export const ModalHeader: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div {...rest} className={classNames(buildClass('header'), className)}> {children}</div >;

export const ModalBody: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div {...rest} className={classNames(buildClass('body'), className)}>{children}</div>;

export const ModalFooter: React.FC<ModalContentProps> = ({
  className,
  children,
  ...rest
}: ModalContentProps) => <div {...rest} className={classNames(buildClass('footer'), className)}> {children}</div >;

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
  const containerClasses = classNames(className, `${prefix}-backdrop`);
  const sizeClasses = classNames(prefix, { [`${prefix}--${size}`]: size });
  const handleContentClick = (event: React.MouseEvent<HTMLElement>) =>
    event.stopPropagation();
  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (onClose && event.key === Keys.ESC) {
      event.stopPropagation();
      onClose();
    }
  };

  const domResult = (
    <div
      {...rest}
      className={containerClasses}
      onClick={onClose}
      onKeyUp={handleKeyUp}
      tabIndex={-1}
    >
      <div role="dialog" className={sizeClasses} onClick={handleContentClick}>
        {closeButton && (
          <button
            type="button"
            aria-label="close"
            className={buildClass('close')}
            onClick={onClose}
          />
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
