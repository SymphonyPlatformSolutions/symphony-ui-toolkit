import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_LOADING"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.286 8a5.716 5.716 0 0 0 4.578 5.602c.62.124 1.136.624 1.136 1.255s-.515 1.152-1.14 1.063A8.002 8.002 0 0 1 8 0a8 8 0 0 1 6.414 12.783c-.361.482-1.054.502-1.505.103-.491-.435-.5-1.193-.138-1.74A5.714 5.714 0 1 0 2.286 8" />
  </svg>
);
export default SvgLoading;
