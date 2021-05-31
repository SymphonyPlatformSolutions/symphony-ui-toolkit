import * as React from 'react';
import {
  TextComponentPropTypes,
  Input,
  TextComponentProps,
  Types,
} from './Input';

const TextArea: React.FC<
  TextComponentProps &
  React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> = React.forwardRef((props, ref) => {
  return <Input type={Types.TEXTAREA} {...props} ref={ref} />;
});

TextArea.propTypes = TextComponentPropTypes;
TextArea.displayName = 'TextArea';

export default TextArea;
