import * as React from 'react';
import { SVGProps } from 'react';
const SvgChime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_CHIME"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6 0a1 1 0 0 0 0 2h1v2c0 .024 0 .047.002.07A7.002 7.002 0 0 0 1 11v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a7.002 7.002 0 0 0-6.002-6.93A1.01 1.01 0 0 0 9 4V2h1a1 1 0 1 0 0-2H6Zm2 6a5 5 0 0 1 5 5H3a5 5 0 0 1 5-5ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
  </svg>
);
export default SvgChime;
