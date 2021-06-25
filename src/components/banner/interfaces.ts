export type BannerProps = {
  /** Optional CSS class name */
  className?: string;
  /** If true, close icon will be placed to the right */
  isClosable?: boolean;
  /** Function to call on close action */
  onClose?: () => void;
  /** Content of the Banner */
  content: string;
  /** If Banner should be shown or not */
  show?: boolean;
  /** Style of the banner */
  variant?: BannerType;
  /** Text of the action button */
  actionText?: string;
  /** Function to call on action click */
  onAction?: () => void;
  /** Size of the banner */
  size?: 'small' | 'medium';

  /** other props */
  [otherProps: string]: any,
}

export enum BannerType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}
