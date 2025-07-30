import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_RIGHT-ARROW"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15.707 7.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 0 1 0-2h11.586L8.293 2.707a1 1 0 0 1 1.414-1.414z" />
  </svg>
);
export default SvgRightArrow;
