import * as React from 'react';
import { SVGProps } from 'react';
const SvgBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-3.11-3.477-8.367 8.368a6 6 0 0 0 8.367-8.367ZM11.477 3.11a6 6 0 0 0-8.367 8.367l8.368-8.367Z" />
  </svg>
);
export default SvgBlock;
