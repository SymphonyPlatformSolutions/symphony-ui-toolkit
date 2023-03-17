import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdjust = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M2 0a1 1 0 0 0-1 1v8.268a2 2 0 0 0 0 3.464V15a1 1 0 1 0 2 0v-2.268a2 2 0 0 0 0-3.464V1a1 1 0 0 0-1-1ZM8 0a1 1 0 0 0-1 1v2.268a2 2 0 0 0 0 3.464V15a1 1 0 1 0 2 0V6.732a2 2 0 0 0 0-3.464V1a1 1 0 0 0-1-1ZM13 1a1 1 0 1 1 2 0v6.268a2 2 0 0 1 0 3.464V15a1 1 0 1 1-2 0v-4.268a2 2 0 0 1 0-3.464V1Z" />
  </svg>
);
export default SvgAdjust;
