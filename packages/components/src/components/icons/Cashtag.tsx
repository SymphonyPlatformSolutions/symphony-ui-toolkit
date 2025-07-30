import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCashtag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CASHTAG"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7 1a1 1 0 0 1 2 0v1h1.5A3.5 3.5 0 0 1 14 5.5a1 1 0 1 1-2 0A1.5 1.5 0 0 0 10.5 4H9v3h1.5a3.5 3.5 0 1 1 0 7H9v1a1 1 0 1 1-2 0v-1H5.5A3.5 3.5 0 0 1 2 10.5a1 1 0 0 1 2 0A1.5 1.5 0 0 0 5.5 12H7V9H5.5a3.5 3.5 0 1 1 0-7H7zm0 3H5.5a1.5 1.5 0 1 0 0 3H7zm3.5 8a1.5 1.5 0 0 0 0-3H9v3z" />
  </svg>
);
export default SvgCashtag;
