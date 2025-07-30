import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_MINUS"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15 9a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2z" />
  </svg>
);
export default SvgMinus;
