import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_SCREENSHOT"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V2h2a1 1 0 0 0 1-1M11 2H8a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0zM13 9a1 1 0 1 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2zM2 9a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2H2z" />
  </svg>
);
export default SvgScreenshot;
