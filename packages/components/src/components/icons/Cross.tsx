import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CROSS"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8l5.293-5.293a1 1 0 0 0-1.414-1.414L8 6.586z" />
  </svg>
);
export default SvgCross;
