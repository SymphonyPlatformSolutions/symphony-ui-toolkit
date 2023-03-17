import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M7 15a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1a1 1 0 1 0-2 0v6H1a1 1 0 0 0 0 2h6v6Z" />
  </svg>
);
export default SvgPlus;
