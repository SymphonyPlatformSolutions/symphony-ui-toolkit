import * as React from 'react';
import {
  TextComponentPropTypes,
  TextComponent,
  TextComponentProps,
  Types,
} from './TextComponent';

const TextArea: React.FC<
  TextComponentProps &
    React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> = React.forwardRef((props, ref) => {
  return <TextComponent type={Types.TEXTAREA} {...props} ref={ref} />;
});

TextArea.propTypes = TextComponentPropTypes;
TextArea.displayName = 'TextArea';

export default TextArea;
