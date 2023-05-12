import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrossRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CROSS-ROUND"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10.707 5.293a1 1 0 0 1 0 1.414L9.414 8l1.293 1.293a1 1 0 0 1-1.414 1.414L8 9.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L6.586 8 5.293 6.707a1 1 0 0 1 1.414-1.414L8 6.586l1.293-1.293a1 1 0 0 1 1.414 0Z" />
    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" />
  </svg>
);
export default SvgCrossRound;
