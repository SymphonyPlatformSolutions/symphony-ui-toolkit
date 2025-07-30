import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_PRINT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4 3V0h8v3h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-.111l-.556-2H14V5H2v5h.667l-.556 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2-1v1h4V2z" />
    <path d="M4.75 8.25h6.5L12.369 14H3.63zM12.5 7h-9L1 16h14z" />
  </svg>
);
export default SvgPrint;
