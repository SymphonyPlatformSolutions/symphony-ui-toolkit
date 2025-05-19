import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { clsx } from 'clsx';
import { EventListener, Keys } from '../common/eventUtils';
import { SvgIcon } from '../icon';
import { Icons } from '..';

interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  size: 'small' | 'medium' | 'large' | 'full-width';
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean;
  focusTrapEnabled?: boolean;
  parentNode?: Element;
  show?: boolean;
  onClose?: () => void;
  ariaLabel?: string;
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

const FOCUSABLE_ELEMENTS = 'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';

// Utility function to get focusable elements
const getFocusableElements = (container: HTMLElement) => {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS));
};

// Focus trap handler
const handleTabKey = (event: KeyboardEvent, modal: HTMLDivElement) => {
  const focusableElements = getFocusableElements(modal);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const realFocusableElements = focusableElements.filter(element => element.tabIndex !== -1);
  const realFistElement = realFocusableElements[0];
  const realLastElement = realFocusableElements[realFocusableElements.length - 1];

  if (event.key === Keys.TAB) {
    if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === realFistElement)) {
      realLastElement.focus();
      event.preventDefault();
    } else if(!event.shiftKey && (document.activeElement === lastElement || document.activeElement === realLastElement)) {
      realFistElement.focus();
      event.preventDefault();
    }
  }
};

const Modal: React.FC<ModalProps> = ({
  size,
  className,
  children,
  closeButton,
  onClose,
  focusTrapEnabled = true,
  parentNode,
  show,
  ariaLabel,
  ...rest
}: ModalProps) => {

  let previousFocusedElement;
  const modalRef = React.useRef<HTMLDivElement>(null);
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

  React.useEffect(() => {
    if (show && focusTrapEnabled) {
      // Keeps a reference to the element that had the focus before opening the Modal, restore it when we close the modal
      previousFocusedElement = document.activeElement;

      const trapFocus = () => {
        if (modalRef.current) {
          const focusableElements = getFocusableElements(modalRef.current);

          // Focus the first element if available
          focusableElements[0]?.focus();

          // Add event listener for Tab key
          const onKeyDown = (e: KeyboardEvent) => handleTabKey(e, modalRef.current);
          document.addEventListener(EventListener.keydown, onKeyDown);

          // Cleanup event listener
          return () => {
            document.removeEventListener(EventListener.keydown, onKeyDown);
            previousFocusedElement?.focus();
          }
        }
      };

      const cleanup = trapFocus();
      return cleanup;
    }
  }, [show, focusTrapEnabled]);

  const domResult = (
    <div
      onMouseDown={onMouseDown}
      {...rest}
      className={containerClasses}
      onClick={onClose}
      onKeyUp={handleKeyUp}
      tabIndex={-1}
    >
      <div ref={modalRef} role="dialog" aria-label={ariaLabel} className={sizeClasses} onClick={handleContentClick}>
        {closeButton && (
          <button
            aria-label="close"
            className={clsx(buildClass('close'), className)}
            onClick={onClose}
            type="button"
          >
            <SvgIcon icon={Icons.Cross} />
          </button>
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
