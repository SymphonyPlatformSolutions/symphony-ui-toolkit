import * as React from 'react';
import type { SVGProps } from 'react';
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ACTIVITY"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m4.909-4.549A6.96 6.96 0 0 1 12 8c0-1.256.33-2.433.909-3.452A5.97 5.97 0 0 1 14 8a5.97 5.97 0 0 1-1.091 3.451m-1.455 1.456A5.97 5.97 0 0 1 8 14a5.97 5.97 0 0 1-3.454-1.093A8.96 8.96 0 0 0 6 8a8.96 8.96 0 0 0-1.454-4.907A5.97 5.97 0 0 1 8 2c1.286 0 2.477.405 3.454 1.093A8.96 8.96 0 0 0 10 8c0 1.81.535 3.495 1.454 4.907M2 8c0-1.285.404-2.475 1.092-3.452A6.96 6.96 0 0 1 4 8c0 1.256-.33 2.433-.908 3.451A5.97 5.97 0 0 1 2 8" />
  </svg>
);
export default SvgActivity;
