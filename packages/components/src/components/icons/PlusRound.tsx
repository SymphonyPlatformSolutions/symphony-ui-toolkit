import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlusRound = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M7 7V5a1 1 0 0 1 2 0v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0V9H5a1 1 0 0 1 0-2h2Z" />
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0Z" />
  </svg>
);
export default SvgPlusRound;
