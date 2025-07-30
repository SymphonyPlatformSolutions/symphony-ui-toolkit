import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_MIC-ON"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7.75 0a4 4 0 0 0-4 4v3a4 4 0 1 0 8 0V4a4 4 0 0 0-4-4" />
    <path d="M1.75 6.25A.75.75 0 0 1 2.5 7 5.25 5.25 0 0 0 13 7a.75.75 0 0 1 1.5 0 6.75 6.75 0 0 1-5.75 6.676V15a1 1 0 1 1-2 0v-1.324A6.75 6.75 0 0 1 1 7a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgMicOn;
