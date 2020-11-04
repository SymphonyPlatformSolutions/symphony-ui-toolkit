import * as React from 'react';
import classNames from 'classnames';

type ModalProps = {
  title?: string;
  size: 'small' | 'medium' | 'large' | 'full-width';
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const prefix = 'tk-dialog';
const buildClass = (classStr: string) => `${prefix}__${classStr}`

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
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
        {props.title && <div className={buildClass('title')}>{props.title}</div>}
        <button className={buildClass('close')} onClick={props.onClose}/>
        {props.header && <div className={buildClass('header')}>{props.header}</div>}
        {props.body && <div className={buildClass('body')}>{props.body}</div>}
        {props.footer && <div className={buildClass('footer')}>{props.footer}</div>}
      </div>
    </div>
  )
}

export default Modal;
