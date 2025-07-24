import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAccent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ACCENT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8.918 4.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0M5.35 5.42a.9.9 0 1 1-.9 1.56.9.9 0 0 1 .9-1.56M4.45 9.02a.9.9 0 1 1 .9 1.56.9.9 0 0 1-.9-1.56M10.686 5.42a.9.9 0 1 1 .9 1.56.9.9 0 0 1-.9-1.56" />
    <path d="M14 8c0 .074-.016.15-.149.256-.16.127-.445.244-.792.244H11a4 4 0 0 0-3.727 5.457A6.001 6.001 0 1 1 14 8m-5 4.5a2 2 0 0 1 2-2h2.06C14.575 10.5 16 9.517 16 8a8 8 0 1 0-8 8c.603 0 2.41-.116 2.41-1.002C10.41 13.774 9 14.65 9 12.5" />
  </svg>
);
export default SvgAccent;
