import * as React from 'react';
import { SVGProps } from 'react';
const SvgScreenShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_SCREEN-SHARE"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15.707 4.707a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L12.586 3H10.5A3.5 3.5 0 0 0 7 6.5v3c0 1.5 2 1.5 2 0v-3A1.5 1.5 0 0 1 10.5 5h2.086l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3Z" />
    <path d="M2 4h3v2H3v8h10v-4h2v4h1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h1V5a1 1 0 0 1 1-1Z" />
  </svg>
);
export default SvgScreenShare;
