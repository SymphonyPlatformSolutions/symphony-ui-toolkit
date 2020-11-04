import * as React from 'react';
import classNames from 'classnames';

type ModalProps = {
  size: 'small' | 'medium' | 'large' | 'full-width';
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean;
  onClose?: () => void;
}

type ModalContentProps = {
  children?: React.ReactNode;
}

const prefix = 'tk-dialog';
const buildClass = (classStr: string) => `${prefix}__${classStr}`

export const ModalTitle: React.FC<ModalContentProps> = ({children}: ModalContentProps) => <div className={buildClass('title')}>{children}</div>

export const ModalHeader: React.FC<ModalContentProps> = ({children}: ModalContentProps) => <div className={buildClass('header')}>{children}</div>

export const ModalBody: React.FC<ModalContentProps> = ({children}: ModalContentProps) => <div className={buildClass('body')}>{children}</div>

export const ModalFooter: React.FC<ModalContentProps> = ({children}: ModalContentProps) => <div className={buildClass('footer')}>{children}</div>

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const containerClasses = classNames(
    props.className,
    `${prefix}-backdrop`
  )
  const sizeClasses = classNames(
    prefix,
    `${prefix}--${props.size}`
  )

  return (
    <div className={containerClasses}>
      <div className={sizeClasses}>
        {props.closeButton &&  <button className={buildClass('close')} onClick={props.onClose}/>}
        {props.children}
      </div>
    </div>
  )
}

