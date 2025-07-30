import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_MARKET"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1 16a1 1 0 1 1 0-2V6.236C.386 5.686 0 4.888 0 4V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2c0 .888-.386 1.687-1 2.236V14a1 1 0 1 1 0 2zM5.5 3.659a2 2 0 0 1 1.665.893A1 1 0 0 0 8 5a1 1 0 0 0 .835-.448 2 2 0 0 1 3.33 0A1 1 0 0 0 14 4V2H2v2a1 1 0 0 0 1.835.552A2 2 0 0 1 5.5 3.659m6.6 3.204a3 3 0 0 1-1.6-1.204A3 3 0 0 1 8 7a3 3 0 0 1-2.5-1.341A3 3 0 0 1 3 7v7h2v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h2V7q-.473-.002-.9-.137M7 14h2v-3H7z" />
  </svg>
);
export default SvgMarket;
