import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_FILTER"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1 1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM1 5a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2zM0 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1M1 13a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" />
  </svg>
);
export default SvgFilter;
