import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlertRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    data-testid="ICON_ALERT-ROUND"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 4a1 1 0 0 0-1 1v2.5a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1M8 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" />
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2" />
  </svg>
);
export default SvgAlertRound;
