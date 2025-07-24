import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPersonDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_PERSON-DOT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M6.5 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M16 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M0 12.472c0-.31.073-.62.295-.838C.88 11.057 2.5 10 6.5 10s5.619 1.057 6.205 1.634c.222.218.295.528.295.838V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zM6.5 12c-2.7 0-3.976.524-4.5.838V14h9v-1.162C10.476 12.524 9.2 12 6.5 12" />
  </svg>
);
export default SvgPersonDot;
