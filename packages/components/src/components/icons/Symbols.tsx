import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSymbols = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_SYMBOLS"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7 1a1 1 0 0 1 2 0v4.586l3.243-3.243a1 1 0 0 1 1.414 1.414L10.414 7H15a1 1 0 1 1 0 2h-4.586l3.243 3.243a1 1 0 0 1-1.414 1.414L9 10.414V15a1 1 0 1 1-2 0v-4.586l-3.243 3.243a1 1 0 1 1-1.414-1.414L5.586 9H1a1 1 0 1 1 0-2h4.586L2.343 3.757a1 1 0 0 1 1.414-1.414L7 5.586z" />
  </svg>
);
export default SvgSymbols;
