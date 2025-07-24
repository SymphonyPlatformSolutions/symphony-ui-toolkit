import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_COLLECTION"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 6h3V2H2zM9 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 3h3V2h-3zM10 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm4 2v4h-3v-4zM0 12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 2h3v-1H2z" />
  </svg>
);
export default SvgCollection;
