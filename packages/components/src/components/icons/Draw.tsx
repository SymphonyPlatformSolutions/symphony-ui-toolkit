import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDraw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_DRAW"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11 12v4h2v-6L8 0 3 10v6h2v-4zm-.5-2h-5l1.958-4h1.084z" />
  </svg>
);
export default SvgDraw;
