import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-typography';
type variant = 'italic' | 'bold';

type TypographyProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  variant?: variant | variant[] | '';
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  type: type,
  className,
  variant,
  ...rest
}: TypographyProps) => {
  const TagName = type === 'body' || type === 'small' ? 'span' : type;
  let variantType: any = '';
  if (variant) {
    variantType =
      typeof variant === 'string'
        ? `${prefix}--${variant}`
        : variant.map((variantType) => `${prefix}--${variantType}`);
  }

  const classes = classNames(
    prefix,
    `${prefix}--${type}`,
    variantType,
    className
  );
  return <TagName className={classes} {...rest}></TagName>;
};

Typography.defaultProps = {
  type: 'body',
};

export default Typography;
