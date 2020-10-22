import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-typography';
type variant = 'italic' | 'bold';

type TypographyProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'small';
  variant?: variant | variant[] | '';
  className?: string;
};

const Typography: React.SFC<TypographyProps> = ({
  type: type,
  className,
  variant,
  ...rest
}: TypographyProps) => {
  const TagName = type === 'small' ? 'span' : type;
  let variantType: any = '';
  if (variant) {
    variantType = typeof variant === 'string' ? `${prefix}--${variant}` : variant.map(variantType => `${prefix}--${variantType}`);
  }

  const classes = classNames(
    prefix,
    `${prefix}--${type}`,
    variantType,
    className,
  );
  return (
    <TagName
      className={classes}
      {...rest}
    >
    </TagName>
  );
};

Typography.defaultProps = {
  type: 'span',
};

export default Typography;
