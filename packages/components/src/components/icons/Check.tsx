import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_CHECK"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15.669 2.257a1 1 0 0 1 .074 1.412l-9 10a1 1 0 0 1-1.45.038l-5-5a1 1 0 0 1 1.414-1.414l4.255 4.255 8.295-9.217a1 1 0 0 1 1.412-.074" />
  </svg>
);
export default SvgCheck;
