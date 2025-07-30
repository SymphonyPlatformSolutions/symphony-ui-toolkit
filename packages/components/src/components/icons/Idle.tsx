import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIdle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_IDLE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.264.585C3.361.31 5.214 0 8 0s4.64.31 5.736.585c.84.21 1.468.84 1.679 1.68C15.69 3.36 16 5.214 16 8s-.31 4.64-.585 5.736a2.28 2.28 0 0 1-1.68 1.679C12.64 15.69 10.786 16 8 16s-4.64-.31-5.736-.585a2.28 2.28 0 0 1-1.679-1.68C.31 12.64 0 10.786 0 8s.31-4.64.585-5.736A2.28 2.28 0 0 1 2.265.585M7.134 8.5l1.748 3.027a1 1 0 1 0 1.732-1L9 7.732V3a1 1 0 0 0-2 0v5a1 1 0 0 0 .134.5" />
  </svg>
);
export default SvgIdle;
