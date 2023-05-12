import * as React from 'react';
import { SVGProps } from 'react';
const SvgBusy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_BUSY"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2.264.585a2.28 2.28 0 0 0-1.679 1.68C.31 3.36 0 5.214 0 8s.31 4.64.585 5.736c.21.84.84 1.468 1.68 1.679C3.36 15.69 5.214 16 8 16s4.64-.31 5.736-.585a2.28 2.28 0 0 0 1.679-1.68C15.69 12.64 16 10.786 16 8s-.31-4.64-.585-5.736a2.28 2.28 0 0 0-1.68-1.679C12.64.31 10.786 0 8 0S3.36.31 2.264.585ZM12 8a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1Z" />
  </svg>
);
export default SvgBusy;
