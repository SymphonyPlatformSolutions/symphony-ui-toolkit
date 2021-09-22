import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

type DrawerProps = {
  width?: number;
  position?: 'right' | 'left';
  relativeTo?: 'parent' | 'window';
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean;
  show?: boolean;
  onClose?: () => void;
  hasBackdrop?: boolean;
};

type DrawerContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const prefix = 'tk-drawer';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

const componentFactory =  ({
  className,
  children,
  ...rest
}: DrawerContentProps, name: string) => (
  <div className={classNames(buildClass(name), className)} {...rest}>
    {children}
  </div>
);

export const DrawerTitle: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'title');
export const DrawerBody: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'body');
export const DrawerFooter: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'footer');

const Drawer: React.FC<DrawerProps> = ({
  width = 350,
  position = 'right',
  relativeTo = 'window',
  className,
  children,
  closeButton = true,
  show = true,
  onClose = () => null,
  hasBackdrop = false,
  ...rest
}: DrawerProps) => {
  const minWidth = 200;
  const positionClasses = classNames({
    [`${prefix}--${position}`]: position,
    [`${prefix}-visible`]: show,
    [`${prefix}-hidden`]: !show,
  });
  const relativeToClasses = classNames({
    [`${prefix}--relative-to-${relativeTo}`]: relativeTo,
  });

  const handleContentClick = (event: React.MouseEvent<HTMLElement>) =>
    event.stopPropagation();
  const handleClose = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  return (
    <div>
      {hasBackdrop && show && (
        <div
          className={classNames(
            `${prefix}-backdrop`,
            relativeToClasses
          )}
          onClick={handleClose}
        />
      )}
      <div
        {...rest}
        role="dialog"
        className={classNames(
          prefix,
          positionClasses,
          relativeToClasses,
          className
        )}
        style={{ width: width > minWidth ? width + 'px' : minWidth + 'px' }}
        onClick={handleContentClick}
      >
        {closeButton && (
          <Icon
            iconName="cross"
            aria-label="close"
            className={classNames(buildClass('close'))}
            onClick={onClose}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default Drawer;
