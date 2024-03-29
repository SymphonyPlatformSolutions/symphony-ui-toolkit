import * as React from 'react';
import { SVGProps } from 'react';
const SvgBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_BOTTOM"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z" />
  </svg>
);
export default SvgBottom;
