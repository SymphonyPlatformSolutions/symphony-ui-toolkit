import * as React from 'react';
import { SVGProps } from 'react';
const SvgPopIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M.25 7.25a1 1 0 0 1 1-1h3.586L.25 1.664l.001-.001A1 1 0 0 1 1.663.25L1.664.25 6.25 4.836V1.25a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" />
    <path d="M11 2h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4h2v3h10V4h-3V2Z" />
  </svg>
);
export default SvgPopIn;
