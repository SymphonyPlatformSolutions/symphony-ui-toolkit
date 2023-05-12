import * as React from 'react';
import { SVGProps } from 'react';
const SvgDelivered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_DELIVERED"
    width="1em"
    height="1em"
    viewBox="0 0 16 10"
    {...props}
  >
    <g opacity={0.9}>
      <path d="M15.76 2.15a1 1 0 0 0-1.52-1.3L8.945 7.03 5.707 3.792a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.466-.056l6-7Z" />
      <path d="M10.76 2.15 8.648 4.614 7.23 3.195 9.24.849a1 1 0 0 1 1.52 1.302ZM1.707 4.793 5.385 8.42l-.626.73a1 1 0 0 1-1.466.056l-3-3a1 1 0 1 1 1.414-1.414Z" />
    </g>
  </svg>
);
export default SvgDelivered;
