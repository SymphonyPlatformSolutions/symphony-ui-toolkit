import * as React from 'react';
import { TextComponentPropTypes, TextComponent, TextComponentProps, Types } from './TextComponent';

const TextArea:React.FC<TextComponentProps> = (props) => {
  return <TextComponent type={Types.TEXTAREA} {...props} />;
};

TextArea.propTypes = TextComponentPropTypes;

export default TextArea;
