import * as React from 'react';
import { SVGProps } from 'react';
const SvgEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_ENTER"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 1a1 1 0 1 0-2 0v7H3.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L3.414 10H15a1 1 0 0 0 1-1V1Z" />
  </svg>
);
export default SvgEnter;
