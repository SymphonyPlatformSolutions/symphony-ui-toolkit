import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_COPY"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5 0a1 1 0 0 0-1 1v1h10v10h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
    <path d="M0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 9h8V6H2z" />
  </svg>
);
export default SvgCopy;
