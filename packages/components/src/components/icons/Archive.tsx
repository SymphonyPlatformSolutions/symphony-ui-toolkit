import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ARCHIVE"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2 2v8h10V6z" />
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H0zm14 0H2v2h12zM5 9a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
  </svg>
);
export default SvgArchive;
