import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ENTER"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 1a1 1 0 1 0-2 0v7H3.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L3.414 10H15a1 1 0 0 0 1-1z" />
  </svg>
);
export default SvgEnter;
