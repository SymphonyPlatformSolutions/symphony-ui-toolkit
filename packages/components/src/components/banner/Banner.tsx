import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { BannerType, BannerProps } from './interfaces';

export const Banner: React.FC<BannerProps> = ({
  className,
  isClosable,
  onClose,
  actionText,
  onAction,
  content,
  show,
  variant,
  size,
  ...otherProps
}) => {

  if (!show) {
    return null
  }

  return (
    <div className={classNames(
      'tk-banner',
      `tk-banner--${variant}`,
      `tk-banner--${size}`,
      { [className]: !!className },
    )}
    {...otherProps}
    >
      {/* Variant icon */}
      <div className="tk-banner__variant-icon" />

      {/* Content */}
      <div className="tk-banner__content">{content}</div>

      {/* Action (optional) */}
      {actionText && onAction && (
        <button type="button" onClick={onAction} className="tk-banner__action">
          {actionText}
        </button>
      )}

      {/* Close button (optional) */}
      {isClosable && onClose && (
        <div className="tk-banner__close" onClick={onClose} />
      )}

    </div>
  )
}

Banner.defaultProps = {
  variant: BannerType.INFO,
  size: 'medium',
  show: true,
}

Banner.propTypes = {
  className: PropTypes.string,
  isClosable: PropTypes.bool,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(BannerType)),
  size: PropTypes.oneOf(['small', 'medium']),
  actionText: PropTypes.string,
  onAction: PropTypes.func,
};
