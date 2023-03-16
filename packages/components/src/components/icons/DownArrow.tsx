import * as React from 'react';
import { SVGProps } from 'react';
const SvgDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M8.707 15.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L7 12.586V1a1 1 0 0 1 2 0v11.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-6 6Z" />
  </svg>
);
export default SvgDownArrow;
