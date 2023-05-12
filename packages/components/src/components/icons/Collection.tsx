import * as React from 'react';
import { SVGProps } from 'react';
const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_COLLECTION"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Zm2 6h3V2H2v5ZM9 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1Zm2 3h3V2h-3v2ZM10 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Zm4 2v4h-3v-4h3ZM0 12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-3Zm2 2h3v-1H2v1Z" />
  </svg>
);
export default SvgCollection;
