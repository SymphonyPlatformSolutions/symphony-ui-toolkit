import * as React from 'react';
import { SVGProps } from 'react';
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M1.5 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 2a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2H6ZM5 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM6 12a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H6Z" />
  </svg>
);
export default SvgList;
