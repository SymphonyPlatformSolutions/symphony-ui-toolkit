import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinusRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_MINUS-ROUND"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11 7a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2z" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0" />
  </svg>
);
export default SvgMinusRound;
