import * as React from 'react';
import { SVGProps } from 'react';
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CODE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5.725 15.962a1 1 0 0 1-.687-1.236l4-14a1 1 0 1 1 1.923.549l-4 14a1 1 0 0 1-1.236.687ZM4.207 11.207a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414L2.414 8l1.793 1.793a1 1 0 0 1 0 1.414ZM15.707 8.707a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 1 0-1.414 1.414L13.586 8l-1.793 1.793a1 1 0 0 0 1.414 1.414l2.5-2.5Z" />
  </svg>
);
export default SvgCode;
