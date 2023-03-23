import * as React from 'react';
import { SVGProps } from 'react';
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_BOLD"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1 2a1 1 0 0 1 1-1h8.5a4 4 0 0 1 2.875 6.781A4 4 0 0 1 11 15H2a1 1 0 1 1 0-2h1V3H2a1 1 0 0 1-1-1Zm6 5h4V3H7v4Zm0 6h4.5V9H7v4Z" />
  </svg>
);
export default SvgBold;
