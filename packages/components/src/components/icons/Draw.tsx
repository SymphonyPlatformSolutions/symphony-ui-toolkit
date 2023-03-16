import * as React from 'react';
import { SVGProps } from 'react';
const SvgDraw = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M11 12v4h2v-6L8 0 3 10v6h2v-4h6Zm-.5-2h-5l1.958-4h1.084l1.958 4Z" />
  </svg>
);
export default SvgDraw;
