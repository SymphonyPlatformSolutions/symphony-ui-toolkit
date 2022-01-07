import * as React from 'react';
import {
  TextComponentPropTypes,
  TextComponentProps,
  TextComponent,
  Types,
} from './TextComponent';

const TextField: React.FC<
  TextComponentProps &
    React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> = React.forwardRef((props, ref) => {
  return <TextComponent type={Types.TEXTFIELD} {...props} ref={ref} />;
});

TextField.propTypes = TextComponentPropTypes;
TextField.displayName = 'TextField';

export default TextField;
