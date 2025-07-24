import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CHEVRON-LEFT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7.707 3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L4.414 8l3.293-3.293a1 1 0 0 0 0-1.414" />
    <path d="M13.707 3.293a1 1 0 0 1 0 1.414L10.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" />
  </svg>
);
export default SvgChevronLeft;
