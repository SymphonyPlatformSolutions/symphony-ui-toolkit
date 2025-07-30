import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_BOLD"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1 2a1 1 0 0 1 1-1h8.5a4 4 0 0 1 2.875 6.781A4 4 0 0 1 11 15H2a1 1 0 1 1 0-2h1V3H2a1 1 0 0 1-1-1m6 5h4V3H7zm0 6h4.5V9H7z" />
  </svg>
);
export default SvgBold;
