import * as React from 'react';
import { clsx } from 'clsx';
import Icon from '../icon/FontIcon';
import { DrawerProps, DrawerContentProps } from './interfaces';

const prefix = 'tk-drawer';
const buildClass = (classStr: string) => `${prefix}__${classStr}`;

const componentFactory =  ({
  className,
  children,
  ...rest
}: DrawerContentProps, name: string) => (
  <div className={clsx(buildClass(name), className)} {...rest}>
    {children}
  </div>
);

export const DrawerTitle: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'title');
export const DrawerBody: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'body');
export const DrawerFooter: React.FC<DrawerContentProps> = (props: DrawerContentProps) => componentFactory(props, 'footer');

export const Drawer: React.FC<DrawerProps> = ({
  width = 350,
  position = 'right',
  relativeToWindow = false,
  className,
  children,
  closeButton = true,
  show = true,
  onClose = () => null,
  hasBackdrop = false,
  ...rest
}: DrawerProps) => {
  const minWidth = 200;
  const positionClasses = clsx({
    [`${prefix}--${position}`]: position,
    [`${prefix}-hidden`]: !show,
  });
  const relativeToClasses = clsx({
    [`${prefix}--relative-to-window`]: relativeToWindow,
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
          className={clsx(
            `${prefix}-backdrop`,
            relativeToClasses
          )}
          onClick={handleClose}
        />
      )}
      <div
        {...rest}
        role="dialog"
        className={clsx(
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
            className={clsx(buildClass('close'))}
            onClick={onClose}
          />
        )}
        {children}
      </div>
    </div>
  );
};
