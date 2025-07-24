import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CHEVRON-RIGHT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8.293 3.293a1 1 0 0 0 0 1.414L11.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0" />
    <path d="M2.293 3.293a1 1 0 0 0 0 1.414L5.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0" />
  </svg>
);
export default SvgChevronRight;
