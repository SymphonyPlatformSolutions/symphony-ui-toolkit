import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_MINUS"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15 9a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2h14Z" />
  </svg>
);
export default SvgMinus;
