import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CHECK-ROUND"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.753 6.659a1 1 0 0 0-1.506-1.318L7.451 8.537 5.707 6.793a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.46-.049z" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0" />
  </svg>
);
export default SvgCheckRound;
