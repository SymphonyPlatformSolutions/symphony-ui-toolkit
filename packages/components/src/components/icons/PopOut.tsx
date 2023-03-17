import * as React from 'react';
import { SVGProps } from 'react';
const SvgPopOut = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M9 1a1 1 0 0 0 1 1h2.586L8 6.586l.001.001A1 1 0 0 0 9.413 8L9.414 8 14 3.414V6a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1Z" />
    <path d="M6 2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5h-2v4H2V4h4V2Z" />
  </svg>
);
export default SvgPopOut;
