import * as React from 'react';
import { SVGProps } from 'react';
const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_RIGHT"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5.293 12.707a1 1 0 0 1 0-1.414L8.586 8 5.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z" />
  </svg>
);
export default SvgRight;
