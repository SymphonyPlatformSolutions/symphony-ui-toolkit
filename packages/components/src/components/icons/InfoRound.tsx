import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfoRound = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M8 12a1 1 0 0 0 1-1V8.5a1 1 0 0 0-2 0V11a1 1 0 0 0 1 1ZM8 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z" />
  </svg>
);
export default SvgInfoRound;
