import * as React from 'react';
import { TextComponentPropTypes, TextComponentProps, TextComponent, Types } from './TextComponent';

const TextField:React.FC<TextComponentProps> = (props) => {
  return <TextComponent type={Types.TEXTFIELD} {...props} />;
};

TextField.propTypes = TextComponentPropTypes;

export default TextField;
