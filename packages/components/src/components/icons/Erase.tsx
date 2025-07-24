import * as React from 'react';
import type { SVGProps } from 'react';
const SvgErase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ERASE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3 5v11h2v-6h6v6h2V5A5 5 0 0 0 3 5m8 3H5V6h6z" />
  </svg>
);
export default SvgErase;
