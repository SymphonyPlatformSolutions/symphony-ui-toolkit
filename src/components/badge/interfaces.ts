export type BadgeProps = {
  /** Content of the badge */
  children?: React.ReactNode;
  className?: string;
  /** The variant to use */
  variant?: 'default' | 'positive' | 'neutral' | 'attention' | 'warning' | 'external';
  /** The size to use */
  size?: 'small' | 'medium';
};
