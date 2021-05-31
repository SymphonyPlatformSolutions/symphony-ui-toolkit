import * as React from 'react';
import {
  TextComponentPropTypes,
  TextComponentProps,
  Input,
  Types,
} from './Input';

const TextField: React.FC<
  TextComponentProps &
  React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> = React.forwardRef((props, ref) => {
  return <Input type={Types.TEXT} {...props} ref={ref} />;
});

TextField.propTypes = TextComponentPropTypes;
TextField.displayName = 'TextField';

export default TextField;
