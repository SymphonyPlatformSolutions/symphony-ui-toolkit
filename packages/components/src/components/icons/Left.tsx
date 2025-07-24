import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_LEFT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10.707 3.293a1 1 0 0 1 0 1.414L7.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" />
  </svg>
);
export default SvgLeft;
