import * as React from 'react';
import type { SVGProps } from 'react';
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_LIST"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1.5 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 2a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zM5 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M6 12a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z" />
  </svg>
);
export default SvgList;
