import * as React from 'react';
import { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_COPY"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5 0a1 1 0 0 0-1 1v1h10v10h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5Z" />
    <path d="M0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Zm2 9h8V6H2v8Z" />
  </svg>
);
export default SvgCopy;
