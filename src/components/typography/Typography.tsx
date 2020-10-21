import * as React from 'react';
import classNames from 'classnames';

const prefix = 'tk-typography';
type variant = 'italic' | 'bold';

type TypographyProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'small' | '';
  variant?: variant | variant[] | '';
  className?: string;
};

const Typography: React.SFC<TypographyProps> = ({
  tag,
  className,
  variant,
  ...rest
}: TypographyProps) => {
  let variantType: any = '';
  if (variant) {
    variantType = typeof variant === 'string' ? `${prefix}--${variant}` : variant.map(variantType => `${prefix}--${variantType}`);
  }
  const classes = classNames(
    className,
    prefix,
    `${prefix}--${tag}`,
    variantType
  );
  return (
    <div
      className={classes}
      {...rest}
    >
    </div>
  );
};

Typography.defaultProps = {
  tag: '',
};

export default Typography;
