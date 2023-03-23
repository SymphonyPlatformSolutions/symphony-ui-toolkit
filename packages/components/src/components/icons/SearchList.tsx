import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearchList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_SEARCH-LIST"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 9a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM12.555 13.505c.729.957 1.636 2.118 1.636 2.118a1 1 0 0 0 1.58-1.225c.001 0-.93-1.188-1.684-2.18a4.5 4.5 0 1 0-1.533 1.287ZM13 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
  </svg>
);
export default SvgSearchList;
