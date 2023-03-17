import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M7.293.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L9 3.414V15a1 1 0 1 1-2 0V3.414L2.707 7.707a1 1 0 0 1-1.414-1.414l6-6Z" />
  </svg>
);
export default SvgUpArrow;
